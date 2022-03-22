<template>
  <div>
    <Loader v-if="loading" />
    <b-container v-else>
      <h1 class="display-3 p-5"> <b-avatar size="5rem"></b-avatar>  <span class="pl-5">Welcome {{ username }}!</span> </h1>

      <div class="">
        <h1><span class="text-orange">Your Balance:</span> {{ balance }}</h1>
        <p>you can add costs to your balance.</p>
        <div class="p-5"></div>
        <div>
          <h1><span class="text-orange">Your points Balance:</span> {{ points }}</h1>
          <p>You can get points buying our dishes. </p>
        </div>

        <div class="pt-5">
          <p>you can  <span class="text-orange font-size-25">Reserve</span> table on our restoraunt  online</p>
          <b-button variant="orange" to="/reservation"  ><h4>Reserve Table</h4>  </b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
  }),
  computed:{
    balance() {
      return this.$store.getters.info.balance
    },
    points() {
      return this.$store.getters.info.pointBalance
    },
    username() {
      return this.$store.getters.info.name
    }
  },
  
};
</script>