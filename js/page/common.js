
document.addEventListener("DOMContentLoaded", function () {

//   /******************************************** 
//   * perf-to-animate
//   ********************************************/

//   document.querySelector('body').classList.remove('perf-no-animation')

  /******************************************** 
  * mobile menu
  ********************************************/


  document.querySelector('.header__burger').addEventListener('click', function(){
    document.querySelector('.nav-main').classList.toggle('open')
  })

  document.querySelector('.nav-main').addEventListener('click', function(){
    document.querySelector('.nav-main').classList.remove('open')
  })
  document.querySelector('.nav-main nav').addEventListener('click', function(e){
    e.stopPropagation(true)
  })
  document.querySelector('.close-mobile-menu').addEventListener('click', function(e){
    document.querySelector('.nav-main').classList.remove('open')
  })



/******************************************** 
  * modal
  ********************************************/

  document.querySelector('[data-modal-open="callback"]').addEventListener('click', function(){
      document.querySelector('.modal-callback').classList.toggle('open')
  })

  document.querySelector('.modal-callback').addEventListener('click', function(){
    document.querySelector('.modal-callback').classList.remove('open')
  })
  document.querySelector('.modal-callback__wrp').addEventListener('click', function(e){
    e.stopPropagation(true)
  })
  document.querySelector('.modal-callback__close').addEventListener('click', function(e){
    document.querySelector('.modal-callback').classList.remove('open')
  })

/******************************************** 
  * load swiper
  ********************************************/

    

 function loadScript(url, callback){
    var script = document.createElement("script");
    
    if (script.readyState){  // IE
        script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
        }
        };
    } else {  // Р”СЂСѓРіРёРµ Р±СЂР°СѓР·РµСЂС‹
        script.onload = function(){
        callback();
        };
    }
    
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('/js/lib/glide.min.js', function(){

/******************************************** 
* data-glide="fb"
********************************************/
 
 

 var fb = new Glide('[data-glide="fb"]', {
  type: 'slider',
  gap: 0,
  perView: 1,
  autoplay: 5000,
  hoverpause: true,
  animationDuration: 300
})


fb.mount();
  

}) 

// init mask

var mask = Maska.create('input[type="tel"]');


/* form */

document.querySelector('[data-form="result"]').addEventListener('submit', function(e){
    e.preventDefault()

    let _this  = this;
    let fields = this.querySelectorAll('input')
    let status = this.querySelector('[data-form=status]')
    let valid = true;

    fields.forEach(function(item){
        if(item.value == ''){
            item.classList.add('err')
            valid = false;
        }else{
            item.classList.remove('err')
        }
    })

    if(!valid){
        status.innerHTML = '<span class="err" >*Все поля обязательны для заполнения</span>'
    }else{
        status.innerHTML = '<span class="msg" >Сообщение отправлено успешно!</span>'
        _this.reset()
    }

  })

/* form callback */

document.querySelector('[data-form="callback"]').addEventListener('submit', function(e){
    e.preventDefault()

    let _this  = this;
    let fields = this.querySelectorAll('input')
    let status = this.querySelector('[data-form=status]')
    let valid = true;

    fields.forEach(function(item){
        if(item.value == ''){
            item.classList.add('err')
            valid = false;
        }else{
            item.classList.remove('err')
        }
    })

    if(!valid){
        status.innerHTML = '<span class="err" >*Все поля обязательны для заполнения</span>'
    }else{
        status.innerHTML = '<span class="msg" >Сообщение отправлено успешно!</span>'
        _this.reset()

        document.querySelector('.modal-callback').classList.add('fadeout')

        setTimeout(function(){
            document.querySelector('.modal-callback').classList.remove('fadeout')
            document.querySelector('.modal-callback').classList.remove('open')
        }, 1000)
    }

  })


}); //DOMContentLoaded


 




