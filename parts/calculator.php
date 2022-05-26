<?php
function getCalculator($mode){
  $lasertag = ($mode == "lasertag") ?  'selected' : '';
  $paintball = ($mode == "paintball") ?  'selected' : '';
  $airsoft = ($mode == "airsoft") ?  'selected' : '';

  echo '
  <div class="container">
      <!-- Block-Calc-calc start -->
      <div class="b-calc">
      <input type="hidden" id="orderText" value="">
          <div class="row b-calc--point">
              <div class="col-lg-7 col-md-6 col-sm-12">
                  <h2 class="b-calc--cry wow fadeInUp">Калькулятор стоимости</h2>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="b-calc--utter wow fadeInUp">
                      <!-- Form-select start -->
                      <select class="wide calc-type-game form-select" name="type">
                        <option value="lasertag"  '.$lasertag.'>Лазертаг</option>
                        <option value="paintball" '.$paintball.'>Пейнтбол</option>
                        <option value="airsoft"   '.$airsoft.'>Страйкбол</option>
                      </select>
                      <!-- Form-select end -->
                  </div>
              </div>
          </div>
          <div class="row wow fadeInUp">
              <div class="col-lg-4 col-md-6 col-sm-4 b-calc--station b-calc--first">
                  <p class="b-calc--name">Количество игроков:</p>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 b-calc--station">
                  <!-- Element-players start -->
                  <div class="e-players">
                      <div class="e-players--exile"><input class="form-utter playersCount" placeholder="1" type="text" name="name" required="" data-min="1" data-max="100" value="1"></div>
                      <p class="e-players--wash b-calc--name">чел.</p>
                  </div>
                  <!-- Element-players end -->
              </div>
              <div class="col-lg-1 col-md-6 col-sm-4 b-calc--station b-calc--first">
                  <p class="b-calc--name b-calc--sector">Дата:</p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-8">
                  <!-- Element-date start -->
                  <div class="e-date">
                      <div>
                          <div class="e-date--floor">
                              <p class="e-date--term">День</p>
                              <p class="e-date--term">Месяц</p>
                              <p class="e-date--term">Год</p>
                          </div>
                          <div class="e-date--floor e-date--have">
                            <input class="form-utter gameDay" placeholder="" type="text" name="name" required="" data-min="1" data-max="31" value="1">
                            <input class="form-utter gameMonth" placeholder="" type="text" name="name" required="" data-min="1" data-max="12" value="1">
                            <input class="form-utter gameYear" placeholder="" type="text" name="name" required="" data-min="2019" data-max="2030" value="2019">
                          </div>
                      </div>
                  </div>
                  <!-- Element-date end -->
              </div>
          </div>
          <div class="lasertag b-calc--make wow fadeInUp">
              <!-- Block-Calc-one start -->
              <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-4 b-calc--station b-calc--first">
                      <p class="b-calc--name b-calc--lead">Продолжительность игры:</p>
                  </div>
                  <div class="col-lg-8 col-md-6 col-sm-8">
                      <!-- Element-range start -->
                      <div class="e-range--right">
                        <input class="calc-range-hours lasertagHours" type="text" name="hours" value="2 часа"></div>
                      <!-- Element-range end -->
                  </div>
              </div>
              <!-- Block-Calc-one end -->
          </div>
          <div class="paintball b-calc--make">
              <!-- Block-Calc-two start -->
              <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-4 b-calc--station b-calc--first">
                      <p class="b-calc--name b-calc--lead">Количество шаров на игрока:</p>
                  </div>
                  <div class="col-lg-8 col-md-6 col-sm-8">
                      <!-- Element-range start -->
                      <div class="e-range--right">
                        <input class="calc-range-bullets paintballBallCount" type="text" name="hours" value="100 шт">
                      </div>
                      <!-- Element-range end -->
                  </div>
              </div>
              <div class="row b-calc--subject paintballApgradeCheckList">
                  <div class="col-lg-4 col-md-12 b-calc--station b-calc--first">
                      <p class="b-calc--name b-calc--lead">Апгрейд игрока:</p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                      <!-- Form-checkbox start --><label class="checkbox">Жилет<input type="checkbox" value="Жилет" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Бандаж<input type="checkbox" value="Бандаж" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Зашита шеи<input type="checkbox" value="Зашита шеи" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                      <!-- Form-checkbox start --><label class="checkbox">Удлинненый ствол<input type="checkbox" value="Удлинненый ствол" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Наколенники<input type="checkbox" value="Наколенники" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --> <label class="checkbox">Налокотники<input type="checkbox" value="Налокотники" name="apgrade"><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                  </div>
              </div>
              <!-- Block-Calc-two end -->
          </div>
          <div class="airsoft b-calc--make">
              <!-- Block-Calc-three start -->
              <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-4 b-calc--station b-calc--first">
                      <p class="b-calc--name b-calc--lead">Продолжительность игры:</p>
                  </div>
                  <div class="col-lg-8 col-md-6 col-sm-8">
                      <!-- Element-range start -->
                      <div class="e-range--right">
                        <input class="calc-range-hours airsoftHours" type="text" name="hours" value="2 часа">
                      </div>
                      <!-- Element-range end -->
                  </div>
              </div>
              <div class="row b-calc--subject airsoftApgradeCheckList">
                  <div class="col-lg-4 col-md-12 b-calc--station b-calc--first">
                      <p class="b-calc--name b-calc--lead">Апгрейд игрока:</p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                      <!-- Form-checkbox start --><label class="checkbox">Жилет<input type="checkbox" value="Жилет" name=""><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Бандаж<input type="checkbox" value="Бандаж" name=""><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Зашита шеи<input type="checkbox" value="Зашита шеи" name=""><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                      <!-- Form-checkbox start <label class="checkbox">Удлинненый ствол<input type="checkbox" value="Удлинненый ствол" name=""><span class="checkmark"></span></label> -->
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start --><label class="checkbox">Наколенники<input type="checkbox" value="Наколенники" name=""><span class="checkmark"></span></label>
                      <!-- Form-checkbox end -->
                      <!-- Form-checkbox start <label class="checkbox">Налокотники<input type="checkbox" value="Налокотники" name=""><span class="checkmark"></span></label> -->
                      <!-- Form-checkbox end -->
                  </div>
              </div>
              <!-- Block-Calc-three end -->
          </div>
          <div class="row b-calc--article wow-delay">
              <div class="col-lg-8 col-md-7 col-sm-12 b-calc--idem">
                  <div class="b-calc--idem wow fadeInUp"><span class="b-calc--the">Итого: </span><span class="b-calc--rumor"> </span><span class="b-calc--the"> грн </span></div>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12"><button class="btn-into btn-tie btn wow fadeInUp" id="calculatorOrderBtn">Заказать игру</button></div>
          </div>
      </div>
      <!-- Block-Calc-calc end -->
  </div>
  ';
}
 ?>
