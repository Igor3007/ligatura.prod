document.addEventListener('DOMContentLoaded', function(){
    var app = new Vue({
        el: '#calculator',
        data: {
          PARAMS,
          PACK_TYPE: 'pvd',
          PACK_SIZE: false,
          PACK_COLOR: false,
          PACK_COLORFUL: '1+0',
          PACK_COUNT: 50,
          PACK_COLOR_PRICE: 0,
          PACK_COLORFUL_PRICE: 0,
          ERROR_LOG: false
        },

        mounted: function(){
            console.log(PARAMS)
        },

        methods: {
            getSize: function(){

                let sizesArray = this.PARAMS.type[this.PACK_TYPE]['size'];
                if(!this.PACK_SIZE) this.PACK_SIZE = sizesArray[0]['title']

                return sizesArray;
            },

            getColor: function(){
                let sizesArray = this.PARAMS.type[this.PACK_TYPE]['size'];

                let colorArray = sizesArray.find((item)=>{
                    return item.title == this.PACK_SIZE
                })

                //console.log(colorArray, 'cooooro')

                if(!this.PACK_COLOR){
                    this.PACK_COLOR       = colorArray['colors'][0]['title']
                    this.PACK_COLOR_PRICE = colorArray['colors'][0]['price']
                }
                 
                    
                

                return colorArray['colors'];
            },

            getColorfulness: function(){

                if(!this.PACK_COLORFUL) this.PACK_COLORFUL = '1+0'
                return this.PARAMS.colorfulness[0]['price']
            },

            getCount: function(value){
                

                if(value < 50){
                    this.PACK_COUNT = 50; 
                    this.ERROR_LOG = 'Тираж не менее 50 шт'
                    return;
                } 
                if(value > 2000){
                    this.PACK_COUNT = 2000; 
                    this.ERROR_LOG = 'Тираж не более 2000 шт'
                    return;
                } 

                 
                  

                this.ERROR_LOG = false;
                this.PACK_COUNT = Math.ceil(value / 50) * 50


                console.log(Math.ceil(value / 50) * 50)

            },

            changePrice: function(type, value){


                switch(type){
                    case 'color':  this.PACK_COLOR_PRICE = value; break;
                    case 'colorful': this.PACK_COLORFUL_PRICE = value; break;
                }
            },

            getTotalPrice: function(){

                if(!this.PACK_COUNT){

                    this.ERROR_LOG = 'Заполните поле тираж'

                    return 0
                };

                if(this.PACK_COUNT <= 180 ){

                    //Min заказ печати + (Стоимость пакета*Тираж)

                    let colorful = this.PARAMS.colorfulness.find((item)=>{
                        return this.PACK_COUNT >= item.min && this.PACK_COUNT <= item.max
                    })

                    let total = (Number(colorful['price'][this.PACK_COLORFUL]))+(Number(this.PACK_COLOR_PRICE)*Number(this.PACK_COUNT))

                    return total.toFixed(2);
                }

                if(this.PACK_COUNT > 180 ){

                    //(Стоимость печати+стоимость пакета)*тираж

                    let colorful = this.PARAMS.colorfulness.find((item)=>{
                        return this.PACK_COUNT >= item.min && this.PACK_COUNT <= item.max
                    })

                    let tolal = (Number(colorful['price'][this.PACK_COLORFUL])+Number(this.PACK_COLOR_PRICE))*Number(this.PACK_COUNT);

                    return tolal.toFixed(2);
                }

            },

            getResultDesc: function(){

                let resultList = [];

                resultList.push({
                    name: 'Тип',
                    value: this.PARAMS['type'][this.PACK_TYPE]['name']
                })
                resultList.push({
                    name: 'Размер',
                    value: this.PACK_SIZE
                })
                resultList.push({
                    name: 'Цвет',
                    value: this.PACK_COLOR
                })
                resultList.push({
                    name: 'Цветность',
                    value: this.PACK_COLORFUL
                })
                resultList.push({
                    name: 'Тираж',
                    value: this.PACK_COUNT + 'шт'
                })

                return resultList;

            }

             

        },

        watch: {
            'PACK_TYPE': function(){
               this.PACK_SIZE = false;
               this.PACK_COLOR = false;
              
            },
            'PACK_SIZE': function(){
                this.PACK_COLOR = false;
            }
        }

      })


      

})