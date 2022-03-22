<template>
  <div class="empty-layout-main">
    <div class="empty-layout-item m-auto">
      <b-form class="p-4" @submit.prevent="onSubmit" >
        <label class="pt-3"><h3>Sigh In</h3></label>
        <b-form-group
          class="pt-3"
          id="input-group-1"
          label-for="input-1"
        >
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            :state="validationState('email')"
            type="email"
            placeholder="Enter email"
            required
            aria-describedby="email-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
          id="email-feedback"
          >
            Email is incorrect.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="pt-3" id="input-group-2" label-for="input-2">
          <b-form-input
            id="password"
            v-model.trim="$v.form.password.$model"
            :state="validationState('password')"
            placeholder="Enter name"
            type="password"
            aria-describedby="password-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="password-feedback">
            Password is incorrect.
          </b-form-invalid-feedback>
        </b-form-group>


        <b-form-group class="pt-3" id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="$v.form.checked.$model"
            :state="validationState('checked')"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">I'm not a robot</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit"  class="w-100 button-bg-color"
          >Submit</b-button>

        <label class="pt-3"><h3>Haven't account? <router-link to="/register"><b>Log in!</b></router-link></h3></label>
      </b-form>
    </div>
  </div>
</template>

<script>
import {email,required,sameAs} from "vuelidate/lib/validators"
export default {
  data: () => ({
      form: {
        email: "",
        password: "",
        checked: [],
      }
  }),
  validations: {
    form:{
      email:{required,email},
      password:{required},
      checked:{required}
    }
  },
  methods: {
    validationState(value){
      const { $dirty, $error } = this.$v.form[value]
      return $dirty ? !$error : null
    },
    async onSubmit() {
      if (this.$v.$invalid){
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.form.email,
        password: this.form.password,
      }

      try{
        await this.$store.dispatch("login", formData)
        this.$router.push('/')
      }catch(e) {
        console.log(e);
      }
    }
  },
};
</script>