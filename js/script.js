       //для верхнего скрола
		 document.querySelectorAll('.scrol-on').forEach(link => {
			//для отмены перехода по ссылке
	  link.addEventListener('click', function(e) {
	  e.preventDefault();
	  
	  let href = this.getAttribute('href').substring(1);
	  
	  const scrollTarget = document.getElementById(href);
	  
	  const topOffset = 70; 
	  const elementPosition = scrollTarget.getBoundingClientRect().top;
	  const offsetPosition = elementPosition - topOffset;
	  
	  window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
	  });
	  });
	  });
	  
	  //для карусели
	  $('.owl-carousel').owlCarousel({
	  loop:true,
	  margin:40,
	  nav:true,
	  responsive:{
	  0:{
			items:1,margin:10,
	  },
	  600:{
			items:3,margin:15,
	  },
	  1000:{
			items:3,margin:20
	  }
	  }
	  });
	  //для отмены перехода по ссылке
	  document.querySelectorAll('.details').forEach(link => {
	  
	  link.addEventListener('click', function(e) {
	  e.preventDefault();
	  });
	  });
	  //при наведение и отвода мышки
	  $('.wrapp-price').on('mouseover',function(){
	  $(this).addClass('active');
	  
	  });
	  $('.wrapp-price').on('mouseout',function(){
	  $('.wrapp-price').removeClass('active');
	  });
	  
	  $('.btn-sum').on('mouseover',function(){
	  $(this).css({'background':'white'});
	  $('.btn-sum .description-three').css({'color':'red'});
	  });
	  
	  $('.btn-sum').on('mouseout',function(){
	  $(this).css({'background':'#D52027'});
	  $('.btn-sum .description-three').css({'color':'white'});
	  });
	  
	  $('.b-1').on('mouseover',function(){
	  $(this).css({'background':'white'});
	  $('.b-1 .d-1').css({'color':'red'});
	  });
	  
	  $('.b-1').on('mouseout',function(){
	  $(this).css({'background':'#D52027'});
	  $('.b-1 .d-1').css({'color':'white'});
	  });
	  
	  $('.b-2').on('mouseover',function(){
	  $(this).css({'background':'white'});
	  $('.b-2 .d-2').css({'color':'red'});
	  });
	  
	  $('.b-2').on('mouseout',function(){
	  $(this).css({'background':'#D52027'});
	  $('.b-2 .d-2').css({'color':'white'});
	  });
	  
	  $('.btn-sub').on('mouseover',function(){
	  $(this).css({'background':'white'});
	  $('.btn-sub .des-5').css({'color':'red'});
	  });
	  
	  $('.btn-sub').on('mouseout',function(){
	  $(this).css({'background':'#D52027'});
	  $('.btn-sub .des-5').css({'color':'white'});
	  });
	  
	  //для отмены перехода по ссылке
	  document.querySelectorAll('description-three').forEach(link => {
	  
	  link.addEventListener('click', function(e) {
	  e.preventDefault();
	  
			//для нижнего скрола
	  let href = this.getAttribute('href').substring(1);
	  
	  const scrollTarget = document.getElementById(href);
	  
	  const topOffset = 70; 
	  const elementPosition = scrollTarget.getBoundingClientRect().top;
	  const offsetPosition = elementPosition - topOffset;
	  
	  window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
	  });
	  });
	  });
	  
	  //для формы заполнение
	  let nameUser = document.querySelector('.form-reg');
	  let phone = document.querySelector('.phone');
	  let email = document.querySelector('.email');
	  let btn = document.querySelector('.buton');
	  
	  nameUser.addEventListener('click',function(){
			nameUser.style.background = '#eaeaea'
	  })
	  phone.addEventListener('click',function(){
			phone.style.background = '#eaeaea'
	  })
	  email.addEventListener('click',function(){
			email.style.background = '#eaeaea'
	  })
	  btn.addEventListener('click',function(){
	  
			if(!nameUser.value.length && !phone.value.length && !email.value.length){
				 alert("Пожалуйста, заполните все поля");
			}else if(!nameUser.value.length){
				 alert("Пожалуйста, введите имя")
			}else if(!phone.value.length){
				 alert("Пожалуйста, введите телефон")
			}else if(!email.value.length){
				 alert("Пожалуйста, введите email")
			}else{
				 alert("Всё в порядке,форма успешно отправлена")
				 nameUser.value = "";
				 phone.value = "";
				 email.value = "";
			}
	  
			if(nameUser.value.length){
				 nameUser.style.background = '#eaeaea'
			}else{
				 nameUser.style.background = 'white'
			}
	  
			if(phone.value.length){
				 phone.style.background = '#eaeaea'
			}else{
				 phone.style.background = 'white'
			}
	  
			if(email.value.length){
				 email.style.background = '#eaeaea'
			}else{
				 email.style.background = 'white'
			}
	  });
	  
	  //для акордиона
		$( function() {
	  $( "#accordion" ).accordion({
	  collapsible: true
	  });
	  } );
	  
	  //для табов
	  $( function() {
		 $( "#tabs" ).tabs();
	  } );
	  
	  //для показа модального окна
	  $('.details').on('click',function(){
			$('.popup-modal').show();
			let name = $(this).siblings('.name-teacher').text();
			let img = $(this).siblings('.teacher').find('img').attr('src');
			$('.popup-modal .name-1').text(name);
			$('.popup-modal .img-teacher').css({'background-image':'url('+img+')'});
	  });
	  
	  //закрытие модального окна
	  $('.close,.overflow').on('click',function(){
			$('.popup-modal').hide()
	  });
	  //для мобильного окна
	  $('.b-menu').on('click',function(){
			$('.wrap-mobile').addClass('active')
	  });
	  $('.close-2').on('click',function(){
			$('.wrap-mobile').removeClass('active')
	  });
	  $('.s-1').on('click',function(){
			$('.wrap-mobile').removeClass('active')
	  });
	  $('.t-1').on('click',function(){
			$('.wrap-mobile').removeClass('active')
	  });
	  $('.p-1').on('click',function(){
			$('.wrap-mobile').removeClass('active')
	  });
