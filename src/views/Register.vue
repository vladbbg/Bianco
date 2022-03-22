  <template>
  <div class="empty-layout-main">
    <div class="empty-layout-item m-auto">
      <b-form class="p-4" @submit.prevent="onSubmit">
        <label class="pt-3"><h3>Log In</h3></label>

        <b-form-group class="pt-3" id="input-group-2" label-for="input-2">
          <b-form-input
            id="name"
            v-model.trim="$v.form.name.$model"
            :state="validationState('name')"
            placeholder="Name"
            type="text"
            aria-describedby="name-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            id="name-feedback"
          >
            Enter your name
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="pt-3" id="input-group-1" label-for="input-1">
          <b-form-input
            id="email"
            v-model.trim="$v.form.email.$model"
            type="email"
            :state="validationState('email')"
            placeholder="Email"
            aria-describedby="email-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            id="email-feedback"
          >
            Email is incorrect
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="pt-3" id="input-group-2" label-for="input-2">
          <b-form-input
            id="password"
            v-model.trim="$v.form.password.$model"
            placeholder="Password"
            type="password"
            :state="validationState('password')"
            aria-describedby="password-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            id="password-feedback"
          >
            Password has at least 4 symbols.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          class="pt-3"
          id="input-group-4"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model.trim="form.checked"
            id="checkboxes-4"
            :state="validationState('checked')"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me"
              >you're agree with our
              <span
                class="text-decoration-underline"
                v-b-tooltip.hover
                title="rules"
                >rules</span
              >
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" class="w-100 button-bg-color">Submit</b-button>

        <label class="pt-3"
          ><h3>
            Already have account?
            <router-link  to="/login"><b>Sign in!</b></router-link>
          </h3></label
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import {email,required,minLength} from 'vuelidate/lib/validators'
export default {
  data: () => ({
    form: {
      email: "",
      name: "",
      password: "",
      checked: [],
    },
  }),
  validations: {
    form: {
      name: {required},
      password: {required,minLength: minLength(6)},
      email: {email,required},
      checked: {required},
    }
  },
  methods: {
    validationState(value) {
      const { $dirty, $error } = this.$v.form[value]
      return $dirty ? !$error : null
     
    },
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        pointBalance: 0,
        balance: 0
      };

      try{
        await this.$store.dispatch('register', formData)
        this.$router.push("/")
      } catch (e) {
        console.log(e);
      } 

    }
  },
};
</script>