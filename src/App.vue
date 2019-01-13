<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <img
          :src="images.logo"
          width="75px"
          padding="25px"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="$vuetify.goTo('#home', options);" flat>Home</v-btn>
        <v-btn @click="$vuetify.goTo('#about_us', options);" flat>About Us</v-btn>
        <v-btn @click="$vuetify.goTo('#our_product', options);" flat>Our Product</v-btn>
        <v-btn @click="$vuetify.goTo('#social', options);" flat>Social</v-btn>
        <v-btn @click="$vuetify.goTo('#order', options);" flat>Order</v-btn>
        <v-btn href="" flat>Blog</v-btn>
        <v-btn @click="$vuetify.goTo('#contact', options);" flat>Contact</v-btn>
        
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  },
  data () {
    return {
      images:{
        logo: require('@/assets/logo.png'),
      }
    }
  }
}
</script>
