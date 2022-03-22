<template>
  <div>
    <!-- main photo , text, navbar -->
    <b-container>
      <b-row class="main-img-height text-light text-center" align-v="center">
        <b-col cols="12"
          ><h1 class="display-1" style="font-family: Perpetua">
            Pizza to fill your soul
          </h1>
          <br />
          <h1>you have to taste it</h1>
          <br />
          <h3>
            We are baking pizzas so good they melt in your mouth!
            <br />
            Book online or call ******
          </h3>
        </b-col>
      </b-row>
    </b-container>
    <!-- card with offer -->
    <b-container fluid class="mt-5">
      <div class="pt-5">
        <b-card no-body class="overflow-hidden" border-variant="white">
          <b-row no-gutters>
            <b-col cols="2"></b-col>
            <b-col cols="5">
              <b-card-img
                src="/img/Home/complete-photo.png"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col cols="3">
              <b-card-body class="lg-pt-5">
                <b-card-text class="lg-pt-5">
                  <h1>Mia Ittalonni’s Chef</h1>
                  <br /><br />

                  <p>
                    A native of the Italian city of Naples, Simon is one of the
                    best pizzaioli in the US. Want a proof of that?
                  </p>
                  <p>
                    "
                    <span class="font-weight-bold">
                      Actually, people flock from the bordering counties of the
                      state just to try a slice of his signature Marinara pizza
                      pie!
                    </span>
                    "
                  </p>

                  <p>
                    <router-link
                      to="/about"
                      class="text-orange font-weight-bold"
                      >About us</router-link
                    >
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <!-- drinks , main courses , starters  -->
    </b-container>

    <b-container fluid class="mt-5 pt-5">
      <b-row >
        <b-col cols="4" class="no-padding bg-danger">
          <b-img fluid  src="/img/Home/cols-1.png"></b-img>
          <b-button
              to="/drinks"
              class="w-100 text-center font-weigth-bold btn-orange p-4"
              ><h2>D R I N K S</h2>
            </b-button>
        </b-col>
        <b-col cols="4" class="no-padding bg-info">
          <b-img fluid src="/img/Home/cols-2.png"></b-img>
          <b-button 
            to="/main-courses"
            class="w-100 text-center font-weigth-bold btn-orange p-4"
              ><h2>Main courses</h2></b-button
            >
        </b-col>
        <b-col cols="4" class="no-padding bg-success">
          <b-img fluid src="/img/Home/cols-3.png"></b-img>
          <b-button 
            to="/starters"
            class="w-100 text-center font-weigth-bold btn-orange p-4"
              ><h2>Starters</h2>
            </b-button>
        </b-col>
      </b-row>
      
    </b-container>
    <!-- похвали людей -->
    <b-container  fluid class="pt-5 text-center" :class="bgColor">
      <b-row class="pt-5">
        <b-col><h2>What people are saying about our restaurant</h2></b-col>
      </b-row>
      <b-row class="pt-2">
        <b-col
          ><h5>
            Anyone, who visits our place leaves us well fed and in a great mood!
          </h5></b-col
        >
      </b-row>

      <b-container>
        <b-card-group class="text-center">
          <b-card
            :border-variant="color"
            :bg-variant="color"
            :header-bg-variant="color"
            :header-border-variant="color"
          >
            <template #header>
              <b-avatar size="4rem"></b-avatar>
              <small class="ml-4 text-muted">username1</small>
            </template>
            <b-card-text>
              <h4>4 <b-icon icon="star-fill"></b-icon></h4>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>

          <b-card
            :border-variant="color"
            :bg-variant="color"
            :header-bg-variant="color"
            :header-border-variant="color"
          >
            <template #header>
              <b-avatar size="4rem"></b-avatar>
              <small class="ml-4 text-muted">username2</small>
            </template>
            <b-card-text>
              <h4>4<b-icon icon="star-fill"></b-icon></h4>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card>

          <b-card
            :border-variant="color"
            :bg-variant="color"
            :header-bg-variant="color"
            :header-border-variant="color"
          >
            <template #header>
              <b-avatar size="4rem"></b-avatar>
              <small class="ml-4 text-muted">username3</small>
            </template>
            <b-card-text>
              <h4>4<b-icon icon="star-fill"></b-icon></h4>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-container>
    </b-container>
    <!-- footer  -->
    <b-container fluid> 
      <b-row>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    width: "200px",
    height: "200px",
    color: "light",
  }),
  components: {},
  methods: {},
  computed: {
    bgColor() {
      return "bg-" + this.color;
    },
  },
};
</script>
 

<style lang="scss">
@import "@/assets/index.scss";
</style>
