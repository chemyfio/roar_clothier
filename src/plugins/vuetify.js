import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: { 
    primary: "#FFFFFF", 
    secondary: "#EEEEEE", 
    accent: "#000000", 
    error: "#f44336", 
    warning: "#ffeb3b", 
    info: "#2196f3", 
    success: "#4caf50" 
  },
  
  iconfont: 'md',
})
