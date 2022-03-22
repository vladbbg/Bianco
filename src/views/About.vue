<template>
  <b-container fluid>
    <div class="mt-5 mb-5">
      <b-img center class="" src="/img/About/1.jpg"></b-img>
    </div>
    <b-container>
      <b-row>
        <b-col cols="8" class="mx-auto"><h3>Since 1982</h3></b-col>
      </b-row>
      <b-row>
        <b-col cols="8" class="mx-auto">
          <p>
            With both of our founders, Ricardo & Alberto being the natives of
            the Italian city of Naples, their pizza restaurant is a true melting
            pot of Italian and American culinary traditions.
          </p>
          <p>
            Boasting a huge range of 99+ pizzas, dozens of pasta and 88 Italian
            wines, we are the prime destination for all of your cravings for a
            true, delicious Italian dinner!
          </p>
        </b-col>
      </b-row>
      <b-row class="pt-5" clas>
        <b-col cols="8" class="mx-auto">
          <p class="text-orange text-quote">
            "
            <span class="font-weight-bold">
              Coming to us for a lunch or a dinner should feel just as
              comfortable, as having one at home. The simplicity, freshness and
              reasonable pricing for our dishes just underline how home-like our
              restaurant is…
            </span>
            "
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <b-img center class="img" src="/img/About/2.jpg"></b-img>
    </div>
    <b-container>
      <h1 class="display-4 pl-5 pt-5">Meet our team</h1>
      <p>
        Mia Ittalonni is a family owned restaurant, which treasures the
        atmosphere just as much as the dining menu.
      </p>
      <p>
        We assembled a strong team of professionals, all of whom aspire to
        constantly excel and step it up!
      </p>
      <!-- first -->
      <div class="pt-5">
        <b-card
          no-body
          border-variant="white"
          class="overflow-hidden"
          style="max-width: 720px"
        >
          <b-row no-gutters>
            <b-col cols="5" class="">
              <b-card-img
                src="/img/About/3.jpg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col cols="7" class="">
              <b-card-body title="Umberto Vincenzo">
                <b-card-text>
                  <span class="text-muted"> Chef</span><br />
                  <p class="card-text">
                    Umberto is a renowned cook, who’s been working at various
                    Italian restaurants since the ’80s… His immense experience
                    and his talent in mixing miscellaneous ingredients and
                    making brand new, delicious dishes are impressive. He’s
                    presiding over our kitchen for 15 years by now and he always
                    gets a high praise from our clients…
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <!-- second -->
      <div class="pt-5">
        <b-card
          no-body
          border-variant="white"
          class="overflow-hidden"
          style="max-width: 720px"
        >
          <b-row no-gutters>
            <b-col cols="5" class="">
              <b-card-img
                src="/img/About/4.jpg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col cols="7" class="">
              <b-card-body title="Gerald Mackler">
                <b-card-text>
                  <span class="text-muted"> Chef's assistant</span><br />
                  <p class="card-text">
                    In an ironic twist of fate, an Aberdeen native Gerald
                    Mackler has been working at Italian restaurants even in his
                    home country of Scotland. We’re delighted, that as he moved
                    with his family to Boston, MA, he chose to join our big
                    friendly team! Gerald specializes in overseeing and cooking
                    the salads and dishes with seafood.
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <!-- third -->
      <div class="pt-5 pb-5">
        <b-card
          no-body
          border-variant="white"
          class="overflow-hidden"
          style="max-width: 720px"
        >
          <b-row no-gutters>
            <b-col cols="5" class="">
              <b-card-img
                src="/img/About/5.jpg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col cols="7" class="">
              <b-card-body title="Mary Walnut">
                <b-card-text>
                  <span class="text-muted"> Desserts Chef</span><br />
                  <p class="card-text">
                    Umberto is a renowned cook, who’s been working at various
                    Italian restaurants since the ’80s… His immense experience
                    and his talent in mixing miscellaneous ingredients and
                    making brand new, delicious dishes are impressive. He’s
                    presiding over our kitchen for 15 years by now and he always
                    gets a high praise from our clients…
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <br />
      <hr />
      <p class="">Recent Press</p>
      <p>

      <router-link to="/about" class="text-orange">Washington Post – Feature</router-link><br>
      </p>
      <p>
      <router-link to="/about" class="text-orange">City Paper – Review</router-link><br>

      </p>
      <p>

      <router-link to="/about" class="text-orange">Alexandria Sun – Review</router-link><br>

      </p>
      <p>

      <router-link to="/about" class="text-orange">City Paper – Soft Opening Gallery</router-link>
      </p>
      <hr />
      <h1 class="text-center display-4">View <router-link class="text-orange" to="/menu">The Menus</router-link>  and <router-link  class="text-orange" to="">Make A Reservation</router-link></h1>
    </b-container>
  </b-container>
</template>
<style lang="scss">
.img {
  width: 60vw;
}
.text-quote,
.text-footer {
  font-size: 28px;
}
.card-text {
  font-size: 18px;
}
</style>
