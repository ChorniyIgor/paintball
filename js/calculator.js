(function(){
  "use srtict";
    const gameType = $('.calc-type-game');
    gameType.on('change',calcTotalPrice);
    const playersCount = $('.playersCount');
    playersCount.on('input',calcTotalPrice);
    const gameDay = $('.gameDay');
    gameDay.on('input',calcTotalPrice);
    const gameMonth = $('.gameMonth');
    gameMonth.on('input',calcTotalPrice);
    const gameYear = $('.gameYear');
    gameYear.on('input',calcTotalPrice);

    const lasertagHours = $('.lasertagHours');
    lasertagHours.on('change',calcTotalPrice);

    const paintballBallCount = $('.paintballBallCount');
    paintballBallCount.on('change',calcTotalPrice);
    const apgradeCheckList = $('.paintballApgradeCheckList');
    apgradeCheckList.find('input:checkbox').each(function(){
      this.addEventListener('change',calcTotalPrice);
    });

    const airsoftHours = $('.airsoftHours');
    airsoftHours.on('change',calcTotalPrice);
    const airsoftApgradeCheckList = $('.airsoftApgradeCheckList');
    airsoftApgradeCheckList.find('input:checkbox').each(function(){
      this.addEventListener('change',calcTotalPrice);
    });

  function calcTotalPrice(){
    const gameTypeVal = gameType.val();
    const playersCountVal = playersCount.val();
    const gameDayVal = gameDay.val();
    const gameMonthVal = gameMonth.val();
    const gameYearVal = gameYear.val();
    let msg =
    `Тип игры: ${gameTypeVal} %0AКоличество игроков: ${playersCountVal} %0AДата: ${gameDayVal}.${gameMonthVal}.${gameYearVal} %0A`;

    let TotalPrice = 0;

    if (gameTypeVal==='lasertag'){
      const priceTable = {
        '2 часа': 270,
        '3 часа': 370,
        '4 часа': 493,
        '5 часов': 617,
      };
        const lasertagHoursVal = lasertagHours.val();
        TotalPrice = playersCountVal * priceTable[lasertagHoursVal];

        msg+=`Продолжительность игры: ${lasertagHoursVal}`;

    } else if (gameTypeVal==='paintball'){
      const apgradePriceTable = {
        'Жилет': 10,
        'Бандаж': 10,
        'Зашита шеи': 10,
        'Удлинненый ствол': 10,
        'Наколенники': 10,
        'Налокотники': 10
      };
      const ballPriceTable = {
        '100 шт': 190,
        '200 шт': 380,
        '300 шт': 400,
        '400 шт': 533,
        '500 шт': 560,
        '600 шт': 672,
        '700 шт': 784,
        '800 шт': 896,
        '900 шт': 1008,
        '1000 шт': 1112
      };

      const paintballBallCountVal = paintballBallCount.val();
      const apgradeList = [];
      apgradeCheckList.find('input:checkbox:checked').each(function(){
        apgradeList.push(this.value);
      });
      let totalApgradePrice = 0;
      if (apgradeList.length > 0){
         totalApgradePrice = apgradeList.reduce((sum, current)=>{
          return sum + apgradePriceTable[current]
        },0)
      }
      TotalPrice=(totalApgradePrice + ballPriceTable[paintballBallCountVal])*playersCountVal;

      msg+=
      `Количество шаров: ${paintballBallCountVal} %0AАпгрейд игрока: ${apgradeList}`;

    } else if (gameTypeVal==='airsoft') {
      const timePriceTable = {
        '2 часа': 370,
        '3 часа': 470,
        '4 часа': 627,
        '5 часов': 783,
      };
      const apgradePriceTable = {
        'Жилет': 10,
        'Бандаж': 10,
        'Зашита шеи': 10,
        'Удлинненый ствол': 10,
        'Наколенники': 10,
        'Налокотники': 10
      };
      const airsoftHoursVal = airsoftHours.val();
      const apgradeList = [];
      airsoftApgradeCheckList.find('input:checkbox:checked').each(function(){
        apgradeList.push(this.value);
      });
      let totalApgradePrice = 0;
      if (apgradeList.length > 0){
         totalApgradePrice = apgradeList.reduce((sum, current)=>{
          return sum + apgradePriceTable[current]
        },0)
      }
      TotalPrice=(timePriceTable[airsoftHoursVal]+totalApgradePrice)*playersCountVal;

      msg+=
      `Продолжительность игры: ${airsoftHoursVal} %0AАпгрейд игрока: ${apgradeList}`;
    }

    showTotalPrice(TotalPrice);
    msg+=`%0AЦена: ${TotalPrice}`;
    saveOrderInfo(msg);
  }

  const totalPriceContainer = $('.b-calc--rumor');
  function showTotalPrice(val){
    totalPriceContainer.text(val);
  }

  const orderText = $('#orderText');
  function saveOrderInfo(result){
    orderText.val(result);
  };

  calcTotalPrice();
})();
