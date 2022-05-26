'use strict';
var init = {
  swiper : function() {
    var width = $(window).width();
    /**
     * @param {string} what
     * @return {?}
     */
    var require = function(what) {
      var $dataPreviewPanel = $(what).parents(".container");
      return {
        nextEl : $(".swiper-button-next", $dataPreviewPanel),
        prevEl : $(".swiper-button-prev", $dataPreviewPanel)
      };
    };
    new Swiper("#slides-main", {
      spaceBetween : 0,
      autoplay : {
        delay : 5000
      },
      autoHeight : true,
      effect : "fade",
      roundLengths : true,
      navigation : require("#slides-main")
    });
    new Swiper("#swiper-reviews", {
      spaceBetween : 30,
      slidesPerView : 1,
      autoHeight : true,
      roundLengths : true,
      navigation : require("#swiper-reviews")
    });
  },
  mobileMenu : function() {
    $("#mobile-menu").menu();
    $("#mobile-menu-close").on("click", function() {
      $("#mobile-menu").menu("close");
    });
    $("#mobile-menu-toggle").on("click", function(event) {
      event.preventDefault();
      $("#mobile-menu").menu("open");
    });
    $(".mobile-body .scrollTo").on("click", function() {
      $("#mobile-menu").menu("close");
    });
  },
  modal : function() {
    $("a[data-modal]").click(function(event) {
      var geoJSON_str = $(this).data("modal-title") || "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";
      $("#modal-title").text(geoJSON_str);
      $(this).modal({
        fadeDuration : 250
      });
      return false;
    });
  },
  magnific : function() {
    $(".gallery").each(function() {
      $(this).magnificPopup({
        delegate : ".image",
        type : "image",
        gallery : {
          enabled : true
        }
      });
    });
  },
  video : function() {
    $(".popup-video").magnificPopup({
      disableOn : false,
      type : "iframe",
      mainClass : "mfp-fade",
      removalDelay : 160,
      preloader : false,
      fixedContentPos : false
    });
  },
  wow : function() {
    $(".wow-delay").each(function() {
      /** @type {number} */
      var x = 0;
      $(".wow", this).each(function() {
        x = x + 0.1;
        if (x > 1) {
          /** @type {number} */
          x = 0;
        }
        $(this).attr("data-wow-delay", x + "s");
      });
    });
    (new WOW).init();
  },
  onload : function() {
    /** @type {boolean} */
    var ready = false;
    /**
     * @return {undefined}
     */
    var load = function() {
      if (ready) {
        return;
      }
      /** @type {boolean} */
      ready = true;
      clearTimeout(autoResumeTimer);
      $("body").addClass("loaded");
      init.wow();
    };
    /** @type {number} */
    var autoResumeTimer = setTimeout(function() {
      load();
    }, 5000);
    window.addEventListener("load", function() {
      load();
    });
  },
  form : function(next) {
    $("input[name='phone']").inputmask("+38 (999) 999 99 99", {
      clearMaskOnLostFocus : true
    });
    $("form").submit(function(event) {
      event.preventDefault();
      var $parent = $(this);
      $("button", $parent).css({
        opacity : 0.5
      }).attr("disabled", "");
      $.post("mail/send.php", $(this).serializeArray(), function(SMessage) {
        $("button", $parent).css({
          opacity : 1
        }).removeAttr("disabled");
        if (SMessage.success) {
          if (next) {
            /** @type {string} */
            window.location = next;
          } else {
            $("#modal-success").modal({
              fadeDuration : 250
            });
            setTimeout(function() {
              $("input,textarea", $parent).not('[type="hidden"]').val("");
              $.modal.close();
            }, 3000);
          }
        }
      }, "json");
    });
  },
  faq : function() {
    $(".e_faq").each(function() {
      var item = $(this);
      var body = $(".e_faq-body", item);
      $(".e_faq-header", item).on("click", function() {
        if (body.is(":visible")) {
          body.slideUp(200);
          item.removeClass("open");
        } else {
          body.slideDown(200);
          item.addClass("open");
        }
      });
    });
  },
  more : function() {
    $(".e_more").each(function() {
      var backwardCtrl = $(".e_more-read", this);
      var statoptions = $(".e_more-body", this);
      backwardCtrl.on("click", function(event) {
        event.preventDefault();
        if (statoptions.is(":visible")) {
          statoptions.slideUp(200);
          backwardCtrl.text("\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c");
        } else {
          statoptions.slideDown(200);
          backwardCtrl.text("\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c");
        }
      });
    });
  },
  time : function(option, value) {
    /**
     * @return {undefined}
     */
    function timer() {
      /** @type {!Date} */
      var time = new Date;
      /** @type {number} */
      time = Math.floor((now - time) / 1000);
      /** @type {number} */
      var rest = time % 60;
      /** @type {number} */
      time = Math.floor(time / 60);
      if (rest < 10) {
        /** @type {string} */
        rest = "0" + rest;
      }
      /** @type {number} */
      var m = time % 60;
      /** @type {number} */
      time = Math.floor(time / 60);
      if (m < 10) {
        /** @type {string} */
        m = "0" + m;
      }
      /** @type {number} */
      var sec = time % 24;
      /** @type {number} */
      time = Math.floor(time / 24);
      /** @type {string} */
      time = ("0" + time).slice(-2);
      /** @type {string} */
      rest = ("0" + rest).slice(-2);
      /** @type {string} */
      m = ("0" + m).slice(-2);
      /** @type {string} */
      sec = ("0" + sec).slice(-2);
      $(".day", option).text(time);
      $(".hour", option).text(sec);
      $(".min", option).text(m);
      $(".sec", option).text(rest);
    }
    /** @type {!Date} */
    var now = new Date(value);
    timer();
    setInterval(timer, 1000);
  },
  scrollTo : function(doSelect) {
    $(".scrollTo").click(function(event) {
      event.preventDefault();
      $.modal.close();
      var hash = $(this).attr("href") || $(this).data("modal");
      var top = $(hash).offset().top;
      if (doSelect) {
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      }
      $("html, body").animate({
        scrollTop : top - 20
      }, Math.max(500, Math.round(top * 0.2)));
    });
  },
  tabs : function() {
    $(".tabs").each(function() {
      var links = $(".tabs-link", this);
      var formsearch = $(".tabs-content", this);
      links.on("click", function(event) {
        event.preventDefault();
        links.removeClass("active");
        $(this).addClass("active");
        var targetPaneId = $(this).attr("href");
        formsearch.removeClass("active");
        $(targetPaneId).addClass("active");
      });
    });
  },
  fluid : function() {
    /**
     * @return {undefined}
     */
    function resize() {
      var width = $(window).width();
      $(".fluid-right").each(function() {
        var inputPad = $(this).offset();
        $(this).width(width - inputPad.left);
      });
    }
    $(window).resize(resize);
    resize();
  },
  sticker : function(options) {
    options.sticky({
      topSpacing : 0
    });
  },
  calc : function() {
    var group_el = $(".b-calc");
    var thread_rows = $(".form-utter", group_el);
    var searchContactPanel = $(".b-calc--make", group_el);
    var $repeat_ends = $(".calc-type-game", group_el);
    thread_rows.each(function() {
      
      var $node = $(this);
      /** @type {number} */
      var cp1x = parseInt($node.data("min"));
      /** @type {number} */
      var left = parseInt($node.data("max"));
      $node.on("keyup", function() {
        /** @type {number} */
        var width = parseInt($node.val());
        /** @type {number} */
        width = isNaN(width) ? 1 : width;
        /** @type {number} */
        width = Math.min(left, Math.max(cp1x, width));
        $node.val(width);
      });
    });
    $(".calc-range-hours").ionRangeSlider({
      label : false,
      grid : true,
      min : 2,
      max : 5,
      step : 1,
      values : ["2 \u0447\u0430\u0441\u0430", "3 \u0447\u0430\u0441\u0430", "4 \u0447\u0430\u0441\u0430", "5 \u0447\u0430\u0441\u043e\u0432"]
    });
    $(".calc-range-bullets").ionRangeSlider({
      label : false,
      grid : true,
      min : 100,
      max : 1000,
      step : 100,
      values : ["100 \u0448\u0442", "200 \u0448\u0442", "300 \u0448\u0442", "400 \u0448\u0442", "500 \u0448\u0442", "600 \u0448\u0442", "700 \u0448\u0442", "800 \u0448\u0442", "900 \u0448\u0442", "1000 \u0448\u0442"]
    });
    searchContactPanel.hide();
    $repeat_ends.on("change", function() {
      var conid = $(this).val();
      searchContactPanel.hide();
      $("." + conid, group_el).show();
    });
    $(".lasertag", group_el).show();
  }
};
$(function() {
  /** @type {boolean} */
  var isPageSpeed = /Google Page Speed Insights/.test(navigator.userAgent);
  if (isPageSpeed) {
    return;
  }
  init.magnific();
  init.video();
  init.swiper();
  init.modal();
  init.mobileMenu();
  init.form();
  init.faq();
  init.more();
  init.scrollTo(false);
  init.tabs();
  init.calc();
  $("select").niceSelect();
  init.sticker($("#sticker"));
});
init.onload();
