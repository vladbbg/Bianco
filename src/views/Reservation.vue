<template>
  <div>
    <b-container>
      <div class="text-center">
        <p class="padding-top-for-reserve font-size-30">Table Reservation</p>
        <p class="font-size-25">
          Mia Restaurant is the place for any food-accompanied occasion!
        </p>
        <p>
          Be it a business meeting lunch, a family birthday dinner, anniversary
          or a proposal romantic dinner or any other event… We will make sure
          the atmosphere and dishes do the justice!
        </p>
      </div>
      <!-- Table img -->
      <b-row class="pb-5" align-v="center">
        <b-col class="pt-5" :cols="el.cols" v-for="el in lst" :key="el.id">
          <b-button
            to="/reserve"
            @click="click(el)"
            variant="outline-tranparent"
          >
            <b-img
              class="img-fluid"
              :src="el.imgSrc"
              :class="[{ filter: el.changing }, { withoutFilter: el.changing }]"
              @mouseover="el.changing = !el.changing"
              @mouseleave="el.changing = !el.changing"
            >
            </b-img>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    imgSrc1: "/img/Reservation/1.png",
    first: 1,
    lst: [
      {
        id: 1,
        imgSrc: "/img/Reservation/1.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 2,
        imgSrc: "/img/Reservation/2.png",
        changing: false,
        cols: "6",
        capacity: "6",
      },
      {
        id: 3,
        imgSrc: "/img/Reservation/3.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 4,
        imgSrc: "/img/Reservation/4.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 5,
        imgSrc: "/img/Reservation/5.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 6,
        imgSrc: "/img/Reservation/6.png",
        changing: false,
        cols: "6",
        capacity: "6",
      },
      {
        id: 7,
        imgSrc: "/img/Reservation/7.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 8,
        imgSrc: "/img/Reservation/8.png",
        changing: false,
        cols: "3",
        capacity: "2",
      },
      {
        id: 9,
        imgSrc: "/img/Reservation/9.png",
        changing: false,
        cols: "3",
        capacity: "4",
      },
      {
        id: 10,
        imgSrc: "/img/Reservation/10.png",
        changing: false,
        cols: "3",
        capacity: "4",
      },
    ],
  }),
  methods: {
    click(el) {
      this.$store.commit("increment", el.capacity);
    },
  },
};
</script>
<style lang="scss" >
.font-size-30 {
  font-size: 30px;
}
.filter {
  filter: grayscale(100%);
  -webkit-transition: filter 200ms linear;
  -ms-transition: filter 200ms linear;
  transition: filter 200ms linear;
}
.withoutFilter {
  -webkit-transition: 200ms linear;
  -ms-transition: 200ms linear;
  transition: 200ms linear;
}
</style>