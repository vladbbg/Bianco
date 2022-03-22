<template>
  <div>
    <b-navbar toggleable="lg" type="dark" :variant="NavbarVariant">
      <b-navbar-brand
        class="w-25 text-brand-orange text-decoration-none text-orange font-size-30 font-weight-bold text-center m-3"
        href="#"
      >
        
          BIANCO
      </b-navbar-brand>

      <!-- button when toggle less than lg  -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="font-weight-bold" is-nav>
        <b-navbar-nav class="w-100" justified>
          <b-nav-item class="mr-5 ml-5" to="/">Home</b-nav-item>
          <b-nav-item class="mr-5 ml-5" to="/about">About</b-nav-item>
          <!-- TODO -->
          <b-nav-item-dropdown
            size="lg"
            id="mydiv"
            split
            to="/menu"
            class="mr-5 ml-5"
            text="Menu "
          >
            <b-dropdown-item to="/starters"
              ><p class="text-orange">Starters</p>
            </b-dropdown-item>
            <b-dropdown-item to="/main-courses"
              ><p class="text-orange">Main Courses</p>
            </b-dropdown-item>
            <b-dropdown-item to="/desserts"
              ><p class="text-orange">Desserts</p></b-dropdown-item
            >
            <b-dropdown-item to="/drinks"
              ><p class="text-orange">Drinks</p></b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item class="mr-5 ml-5" to="/reservation"
            >Reservation
          </b-nav-item>

          <b-nav-item-dropdown toggle-class="text-orange" split size="lg" right>
            <!-- Using 'button- content' slot -->
            <template class="mr-5 ml-5" #button-content>
              <em v-if="name">{{ name }}</em>
              <em v-else @click="logIn">Log/Sign in</em>
            </template>
            <b-dropdown-item to="/profile">
              <p class="text-orange">Profile</p>
            </b-dropdown-item>
            <b-dropdown-item @click="signOut">
                <p class="text-orange" >Sign Out</p>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="w-25"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    NavbarBg: String,
    required: true,
  },
  data: () => ({
    variant: "",
    loading: true,
  }),
  methods: {
    logIn() {
      this.$router.push("/login")
    },
    async signOut(){
        try{
          await this.$store.dispatch('logout')
          this.$router.push("/login")
        }catch(e){
          console.log("signOut => ", e);
        }
    }
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  computed: {
    NavbarVariant() {
      return this.NavbarBg;
    },
    name() {
      return this.$store.getters.info.name
    }
  },
};
</script>
<style lang="scss" scoped>
::v-deep .nav-link {
  color: orange !important;
  font-size: 20px !important;
}
::v-deep .nav-link .drop .navbar-dark:hover,
.navbar-nav:hover,
.nav-link:hover,
.navbar-dark:focus,
.navbar-nav:focus,
.nav-link:focus {
  color: orangered !important;
}
</style>