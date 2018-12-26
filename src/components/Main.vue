<template>
    <div id="app">
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
          <v-parallax :src="images[0].src" height="600" width="100%">
            <v-layout
              column
              align-center
              justify-center
            >
              <div class="white black--text" margin="30px">
                <h1 class="mb-2 display-1 text-xs-center">About Us</h1>
                <div class="subheading mb-3 text-xs-center">
                  Roar_Clothier merupakan salah 1 konveksi asal Bandung yang telah berdiri sejak tahun 2016. 
                  Didirikan oleh dua mahasiswa ITB yang ingin membantu perekonomian Warga Kota Bandung dengan 
                  menerapkan sistem Win-Win Solution. Walau usia konveksi masih tergolong relatif muda, 
                  Roar_Clothier telah melayani berbagai macam pesanan produk baik dalam maupun luar Pulau Jawa. Selain ingin membantu para Warga Kota Bandung, Roar_Clothier lahir dari keprihatinan kami akan kebutuhan konsumen untuk berkonsultasi terkait kebutuhan informasi akan bahan dan keprihatinan kami melihat banyaknya konveksi yang tidak jujur atau kurang memahami dalam memberikan informasi terkait bahan-bahan yang digunakan dalam produksi.
                </div>
              </div>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout height="600" id="our_product">
            <v-container grid-list-md text-xs-center color="blue-grey darken-1">
              <h1 class="mb-2 display-1 text-xs-center">Our Product</h1>
              <v-layout row wrap >
                <v-flex v-for="(product,i) in products" :key="i" xs4>
                  <v-card dark height="200" color="transparent">
                    <img
                      height="100"
                      :src="product.src"
                    >
                    <v-card-text class="black--text">{{ product.desc }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <div>
                <v-btn depressed large color="blue white--text">See More Products</v-btn>
              </div>
            </v-container>
          </v-layout>
        </section>
        
        <section id="social">
          <v-container grid-list-xs>
            <h1 class="mb-2 display-1 text-xs-center">Social</h1>
            <v-layout row wrap justify-center>
              <v-flex
                v-for="(gram, index) in grams"
                :key=index
                sm2
                xs3
              >
                <a :href="gram.link">
                  <img :src="gram.images.thumbnail.url" :alt="gram.text" />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

        <section id="order">
          <v-container grid-list-xs>
            <v-layout row wrap justify-center>
              <v-flex xs6>
                <h2 class="mb-2 display-1 text-xs-center">FAQ</h2>
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
              <v-flex xs6>
                <h2 class="mb-2 display-1 text-xs-center">Order</h2>
                <div class="text-xs-center align-center">
                  <v-dialog
                    v-model="dialog"
                    width="800"
                  >
                    
                    <span slot="activator"> How to <i>order</i>? It's easy! Just download the document below this and you'll find the way. 
                Need guideline for clothes size? <b>Click here.</b> </span>
                    <v-card>
                      <v-card-title>
                        <v-spacer></v-spacer>
                        <v-icon @click="dialog = false">close</v-icon>
                      </v-card-title>
                      <img :src="images[1].src" width="750">
                    </v-card>
                  </v-dialog>
                  <a><img :src="images[2].src" v-on:click="getDownloadFile()"></a>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

        <section id="contact">
          <v-container grid-list-xl>
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
                  <div class="headline">Contact us</div>
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
    </div>
</template>

<script src="./functions/main_methods.js">
 </script>
