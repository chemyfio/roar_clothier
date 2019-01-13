<template>
    <!-- <div id="app"> -->
      <v-app>
        <section id="home">
          <v-carousel
            :light="light"
            height="600"
            hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </section>

        <section id="about_us">
          <v-app id="para">
            <v-parallax :src="images[0].src" height="600" >
              <v-layout
                column
                justify-center
              >
                <div class="grey darken-4 white--text mx-5 pa-5 ">
                  <h4 class="mb-2 display-1 font-weight-black">ABOUT US</h4>
                  <div class="subheading font-weight-light mb-3 ">
                    Roar_Clothier merupakan salah 1 konveksi asal Bandung yang telah berdiri sejak tahun 2016. 
                    Didirikan oleh dua mahasiswa ITB yang ingin membantu perekonomian Warga Kota Bandung dengan 
                    menerapkan sistem Win-Win Solution. Walau usia konveksi masih tergolong relatif muda, 
                    Roar_Clothier telah melayani berbagai macam pesanan produk baik dalam maupun luar Pulau Jawa. Selain ingin membantu para Warga Kota Bandung, Roar_Clothier lahir dari keprihatinan kami akan kebutuhan konsumen untuk berkonsultasi terkait kebutuhan informasi akan bahan dan keprihatinan kami melihat banyaknya konveksi yang tidak jujur atau kurang memahami dalam memberikan informasi terkait bahan-bahan yang digunakan dalam produksi.
                  </div>
                </div>
              </v-layout>
            </v-parallax>
          </v-app>
        </section>

        <section id="our_product">
          <v-layout height="600" >
            <v-container grid-list-md text-xs-center color="blue-grey darken-1">
              <h4 class="mb-2 display-1 font-weight-black text-xs-center">OUR PRODUCT</h4>
              <v-layout row wrap >
                <v-flex v-for="(product,i) in products" :key="i" xs4>
                  <v-hover>
                    <v-card 
                      slot-scope="{ hover }"
                      class="mx-auto ma-2 pa-3"
                      :class="`elevation-${hover ? 12 : 2}`"
                      dark color="transparent">
                      <img
                        height="100"
                        :src="product.src"
                      >
                      
                      <v-card-text class="black--text">{{ product.desc }}</v-card-text>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
              <div>
                <v-btn depressed large color="blue white--text">See More Products</v-btn>
              </div>
            </v-container>
          </v-layout>
        </section>
        
        <section id="social" class="grey darken-4 white--text">
          <v-container grid-list-xs height="600">
            <h4 class="display-1 font-weight-black text-xs-center">SOCIAL</h4>
            <v-layout row wrap justify-center>
              
                  <v-flex
                    v-for="(gram, index) in grams"
                    :key=index
                    sm3
                    xs3
                  >
                  <v-hover>
                <v-card
                    slot-scope="{ hover }">
                    <a :href="gram.link">
                      <v-img 
                        :src="gram.images.low_resolution.url" 
                        style="max_height:320">

                        <v-expand-transition>
                          <div
                            v-if="hover"
                            align-center
                            class="d-flex transition-fast-in-fast-out black v-card--reveal white--text"
                            style="height: 100%; opacity:0.5"
                          >
                            <v-card-actions>
                              <v-btn icon class="red--text">
                                <v-icon medium>fa-reddit</v-icon>
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </a>
                </v-card>
                  </v-hover>
                </v-flex>
            </v-layout>
          </v-container>
        </section>

        <section id="order">
          <v-parallax :src="images[3].src" height="600" >
          <v-container grid-list-xs >
            <v-layout row wrap justify-center class="grey darken-4 ma-1 pa-3">
              <v-flex xs6 >
                <h4 class="mb-2 display-1 font-weight-black text-xs-center">FAQ</h4>
                <v-expansion-panel>
                  <v-expansion-panel-content
                    v-for="(item,i) in 5"
                    :key="i"
                  >
                    <div slot="header">Item</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
              <v-flex xs6 >
                <h4 class="mb-2 display-1 font-weight-black text-xs-center">ORDER</h4>
                <div class="text-xs-center align-center">
                  <span slot="activator" class="ma-3"> How to <i>order</i>? It's easy! Just download the document below this, 
                  fill up your order spesification, and send it to roarclothier@gmail.com </span>
                  <a><img :src="images[2].src" v-on:click="getDownloadFile()" class="mt-3"></a>
                  <v-dialog
                    v-model="dialog"
                    width="800"
                  >
                    <br><br>Need guideline for clothes size? <b>Click here.</b> 
                    <v-card>
                      <v-card-title>
                        <v-spacer></v-spacer>
                        <v-icon @click="dialog = false">close</v-icon>
                      </v-card-title>
                      <img :src="images[1].src" width="750">
                    </v-card>
                  </v-dialog>
                  
                </div>
              </v-flex>
            </v-layout>
          </v-container>
          </v-parallax>
        </section>

        <section id="contact">
          <v-container grid-list-xl height="600">
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card
                v-for="(profile,i) in profiles" :key="i"
                class="elevation-0 transparent text-xs-center
                align-center">
                <v-avatar
                  :tile="avatar.tile"
                  :size="avatar.size"
                >
                  <img :src="profile.src" alt="avatar">
               
                </v-avatar>
                <div ><i>{{ profile.desc }}</i></div>
                <div ><b>{{ profile.role }}</b></div>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline font-weight-black">CONTACT US</div>
                </v-card-title>
                <v-card-text>
                  Jika kamu butuh bantuan atau informasi tambahan, 
                  kamu dapat menghubungi kontak di bawah ini.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+6289656955156</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Bandung, Indonesia</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>roarclothier@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        </section>
      </v-app>
    <!-- </div> -->
</template>

<script src="./functions/main_methods.js">
 </script>

<style scoped>
  #para img{
    height: 100%
  }
  @import url('https://fonts.googleapis.com/css?family=Poppins');
</style>