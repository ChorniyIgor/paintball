<div class="jquery-modal blocker current" style="display:none">
  <div class="modal" id="modal-call-1" style="display: inline-block;">
            <h3 class="modal-title"></h3>
            <form action="" id="popapOrderForm">
              <input class="form-say form-border form-group" type="text" name="name" placeholder="Имя" required="">
              <input class="form-say form-border form-group" type="text" name="phone" placeholder="Телефон" required="">
              <input type="hidden" id="msgFromCalc">
              <button class="btn btn-tie btn-into" id="popapSendOrderBtn">Отправить</button>
            </form>
        <a href="#close-modal" rel="modal:close" class="close-modal">Close</a>
  </div>
</div>

<!-- Modal-success start -->
<div class="blocker current" style="display:none" id="modal-success">
  <div class="modal modal-success" style="display: inline-block;" >
      <h3 class="modal-title">Спасибо</h3>
      <p class="modal-text">Ваша заявка принята! Мы свяжемся с вами в ближайшее время.</p>
  </div>
</div>
<!-- Modal-success end -->
