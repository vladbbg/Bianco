<template>
  <b-container class="text-center padding-top-for-reserve">
    <p class="font-size-30 padding-top-for-reserve">
      Tabel Reservation for {{ count }} people
    </p>
    <p>
      Please click on one of the white boxes to specify the time slot for your
      free consultation
    </p>
    <div class="calendar pb-5">
      <b-calendar block v-model="value"  locale="en-US"></b-calendar>
    </div>
    <b-row>
      <b-col>
        <label for="example-datepicker"><h2>Choose a date</h2> </label>
        <p v-show="value">Reserve table to '{{ value  }}'</p>
        <p> {{today | date('date')}} </p>
      </b-col> 
    </b-row>
    <b-row class="pb-5">
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <b-button class="btn-orange w-100"><h3>Reserve</h3></b-button>
      </b-col>
      <b-col cols="4"></b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Reserve",
  data: () => ({
    value: ''
  }),      
  
  computed: {
    count() {
      return this.$store.getters.TakeCapacity;
    },
    today() {
      const now= new Date()
      return new Date(now.getFullYear(), now.getMonth(), now.getDate())
    }
  },
  methods: {
    dateDisabled(ymd, date){

    }
  }
};
</script>
<style lang="scss">
</style>