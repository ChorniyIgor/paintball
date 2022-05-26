<?php
function getMainScreen($title, $imgClass){
  echo '
  <section class=" section s-one--section '.$imgClass.'" id="main">
      <div class="e-lines e-lines--white-bottom e-lines--gray"></div>
      <div class="container">
          <div class="wow-delay">
              <div class="s-one--object">
                  <!-- Element-logo start -->
                  <div class="e-logo wow fadeInUp"><img class="e-logo--speech img-fluid" src="img/logo.png" alt="">
                      <p class="e-logo--say">10 Лет в Одессе</p>
                  </div>
                  <!-- Element-logo end -->
                  <!-- <div class="s-one--word wow fadeInUp">
                    <a class="calc scrollTo btn-into btn" href="#calc">Калькурятор стоимости</a>
                  </div> -->
              </div>
              <div class="s-one--rumor wow fadeInUp"><button class="btn-into btn-tie btn" id="mainScreenOrderBtn">ЗАкажите игру сейчас</button></div>
              <h1 class="s-one--article wow fadeInUp">'.$title.'</h1>
          </div>
      </div>
  </section>
  ';
};
?>
