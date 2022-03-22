<template>
  <div>
    <div class="menu-img-like-nav">
      <b-card
        overlay
        img-src="/img/Menu/Starters.png"
        img-alt="Card Image"
        text-variant="white"
        img-height="250"
      >
        <b-card-text class="text-center font-weight-bold h-100">
          <b-row align-v="center" class="h-100">
            <b-col>
              <h1 class="">Drinks</h1>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
    <b-container class="pt-5 text-menu pb-5">
      <!-- rows -->
      <!-- 1t -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >CLASSY DISH</router-link
          >
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 5$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"> Main1 </router-link>
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">18$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 2d -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">MARINARA</router-link>
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 23$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">
            BEST SALAD
          </router-link>
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">5$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 3d -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >DELECIOUS MEAT</router-link
          >
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 7$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">
            EXQUISITE STEAK
          </router-link>
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">5$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 4th -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">AMERICANO</router-link>
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 5$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">
            DELICIOUS MEAT
          </router-link>
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">5$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 5th -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >CRUDO DE PARMA</router-link
          >
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 5$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link">
            AWESOME DISH
          </router-link>
          <br />

          <span class="text-muted menu-text-muted"> something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">5$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 6th -->
      <b-row class="pt-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >TASTY STUFF</router-link
          >
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 5$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >GREAT FOOD
          </router-link>
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">5$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!-- 7th -->
      <b-row class="pt-5 pb-5">
        <b-col cols="1"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >SWEET DESSERT1</router-link
          >
          <br />
          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col class="text-right text-orange" cols="2"> 34$ </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <router-link to="/starters" class="menu-link"
            >SWEET DESSERT2</router-link
          >
          <br />

          <span class="text-muted menu-text-muted">something</span>
        </b-col>
        <b-col cols="2" class="text-right text-orange">34$</b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  
}
</script>