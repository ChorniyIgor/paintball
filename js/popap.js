"use strict";

$( document ).ready(function() {
    const popap = $('.jquery-modal');
    const popapSuccess = $('#modal-success');
    const popapText = $('.modal-title');
    const msgFromCalc = $('#msgFromCalc');
    const closeBtn = $('.close-modal');
    closeBtn.on('click', hidePopap);


    window.showPopap = function (text='', data){
      popapText.text(text);
      msgFromCalc.val(data);
      popap.show();
    }

    function hidePopap(){
      popap.hide();
    }

    const headerCall = $('#headerCall');
    headerCall.on('click',(evt)=>{
      evt.preventDefault();
      showPopap('Закажите игру сейчас!')
    });

    const mainScreenOrderBtn = $('#mainScreenOrderBtn');
    mainScreenOrderBtn.on('click',(evt)=>{
      evt.preventDefault();
      showPopap('Закажите игру сейчас!')
    });

    const showGroundInfo = $('#showGroundInfo');
    showGroundInfo.on('click',(evt)=>{
      evt.preventDefault();
      showPopap('Получить консультацию о площадках','Пользователь хочет получить консультацию о площадках')
    });



    const calculatorOrderBtn = $('#calculatorOrderBtn');
    const calculatorText = $('#orderText');

    calculatorOrderBtn.on('click',()=>{
      const orderInfo = calculatorText.val();
      showPopap('Закажите игру сейчас!',orderInfo);
    })

    const popapOrderForm =$('#popapOrderForm');
    popapOrderForm.submit((evt)=>{
      evt.preventDefault();
      const  phone = popap.find('input[name="phone"]').val().replace(/[- )(]/g,'');;
      const msg = `Имя: ${popap.find('input[name="name"]').val()} %0AТелефон: - <a href="tel:${phone}">+${phone}</a> %0A${msgFromCalc.val()}%0A`;

      sendToTelegram(msg);
    });

    const teamForm = $('#teamForm');
    teamForm.submit((evt)=>{
      evt.preventDefault();
      const  phone = evt.target.querySelector('input[name="phone"]').value.replace(/[- )(]/g,'');;
      sendToTelegram(`Пользователь хочет узнать дату ближайшей открытой игры %0AТелефон: - <a href="tel:${phone}">+${phone}</a>`)
    })


    const priceOrderBtns = $('.priceOrderBtn');
    priceOrderBtns.each(function() {
      $(this).on('click',(evt)=>{
        evt.preventDefault();
        const msg = $(this).data('msg');
        showPopap('Закажите игру сейчас!', msg);
      })
    })











  const sendToTelegram = async function (msg){
      try{
        const data = new FormData();
        data.append('text',msg);
         await fetch('telegram.php',{
            method:'post',
            body: data
          });
          popap.hide();
          popapSuccess.show();
          setTimeout(()=>{
            popapSuccess.hide();
          },2000);
      } catch(error) {
        console.log(error);
      }

      //dataLayer.push({'event': 'form_send'});
    }
});
