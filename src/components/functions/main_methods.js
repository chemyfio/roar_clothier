import axios from 'axios';
import _ from 'lodash';

export default {
    el: '#app',
    name: 'Main',
    data: () => ({
        light: true,
        items:[
          {src: require('@/assets/section.jpg')},
          {src: require('@/assets/hero.jpeg')},
        ],
        images:[
          {src: require('@/assets/back-resize.png')},
          {src: require('@/assets/ukuran.jpg')},
          {src: require('@/assets/icons8-document-96.png')},
        ],  
        products:[
          {src: require('@/assets/Bag-icon.png'), desc:'Bag'},
          {src: require('@/assets/Clothing-Baseball-Cap-icon.png'), desc:'Cap'},
          {src: require('@/assets/Clothing-Jacket-icon.png'), desc:'Jacket'},
          {src: require('@/assets/Jacket-icon.png'), desc:'Hoodie'},
          {src: require('@/assets/Shirt-icon.png'), desc:'Shirt'},
          {src: require('@/assets/T-Shirt-icon.png'), desc:'T-Shirt'},
          
        ],
        profiles:[
          { src: require('@/assets/david.jpg'), desc:'David Wijaya', role: 'Founder' },
          { src: require('@/assets/ivan.jpg'), desc:'Ivan Adhitama', role: 'Co-Founder' },        
        ],
        avatar:{
          tile: false,
          size: 130
        },
        access_token: "6975046364.7df674c.fd6cbe49e80a42eaa20cd845a99bd093",
        url: "https://api.instagram.com/v1/users/self/media/recent/",
        username: "roar_clothier",
        grams: [],
        next_url: "",
        error: false,
        dialog: false,
        computed: {
          instapage() {
            return 'https://www.instagram.com/' + this.username
          }
        },
      }),
      methods: {
        getGrams() {
          axios.get(this.url + "?access_token=" + this.access_token)
            .then(({data}) => {
              this.grams = data.data
              this.username = data.data[0].user.username
              this.next_url = data.pagination.next_url
            })
            .catch(function (error) {
              console.log(error)
              this.error = true
            });
        },
        getMoreGrams(){
          axios.get(this.next_url)
            .then(({data}) => {
              this.grams = this.grams.concat(data.data)
              this.next_url = data.pagination.next_url
            })
            .catch(function (error) {
              console.log(error)
              this.error = true
            });         
        },
        getDownloadFile(){
          console.log('test');
          axios({
            url: 'http://localhost:8080/DW_Formulir_Pemesanan_ROAR_Clothier.docx',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'formulir.docx');
            document.body.appendChild(link);
            link.click();
          });
        }
      },
      created() {
        this.getGrams();
      }
      
    
  }