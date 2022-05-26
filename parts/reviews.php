<?php
function getReviews($title){
  echo '
  <section class="section s-six--section" id="reviews">
      <div class="container">
          <!-- Element-title start -->
          <h3 class="text-center e-title wow fadeInUp">'.$title.'</h3>
          <!-- Element-title end -->
          <div class="s-six--mid">
              <!-- Block-brends start -->
              <div class="b-brends wow fadeInUp">
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/1.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/2.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/3.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" alt="" src="img/icon/brends/4.png"></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/5.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/6.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/7.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/8.png" alt=""></div>
                  <div class="b-brends--item"><img class="b-brends--img" src="img/icon/brends/9.png" alt=""></div>
              </div>
              <!-- Block-brends end -->
              <!-- Block-reviews start -->
              <div class="b-reviews wow fadeInUp">
                  <div class="swiper-container" id="swiper-reviews">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                              <!-- Element-review start -->
                              <div class="e-review">
                                  <h4 class="e-review--term">Ростислав Курбатов</h4>
                                  <p class="e-review--object">Весело и круто. Главное хорошая компания. Все выдают и объясняют. Если  едите с улицы ядова. То поворачивайте в синии ворота. На которых написано что-то типо бактериологическое. Потому что немного сложно найти.</p>
                              </div>
                              <!-- Element-review end -->
                          </div>
                          <div class="swiper-slide">
                              <!-- Element-review start -->
                              <div class="e-review">
                                  <h4 class="e-review--term">Никита Шалаев</h4>
                                  <p class="e-review--object">Супер место!! Отличный подход персонала к своей работе и помощи клиентам.
                                    Хорошие места непосредственного "боя" убраны и всегда готовы к бою.<br>
                                    Если проблемы были с оружием без вопросов исправлял огрехи или же меняли "маркер", остались довольными, прийдем сюда ещё не раз!
                                    </p>
                              </div>
                              <!-- Element-review end -->
                          </div>
                          <div class="swiper-slide">
                              <!-- Element-review start -->
                              <div class="e-review">
                                  <h4 class="e-review--term">Ирина Корниенко</h4>
                                  <p class="e-review--object">Детям очень понравилось! Провели инструктаж, оделись, сфотографировались, и в бой! Море впечатлений и потом часы обсуждения! Рекомендую!</p>
                              </div>
                              <!-- Element-review end -->
                          </div>
                          <div class="swiper-slide">
                              <!-- Element-review start -->
                              <div class="e-review">
                                  <h4 class="e-review--term">Евгений Петров</h4>
                                  <p class="e-review--object">Пейнтбольный клуб, весьма не плохой. Есть система скидок (если у вас День Рождения). Обмундирование дополнительное и дополнительные шарики, надо докупать.</p>
                              </div>
                              <!-- Element-review end -->
                          </div>
                      </div>
                  </div>
                  <div class="swiper-button-bottom">
                      <div class="swiper-button swiper-button-prev"></div>
                      <div class="swiper-button swiper-button-next"></div>
                  </div>
              </div>
              <!-- Block-reviews end -->
          </div>
      </div>
  </section>
  ';
};
?>
