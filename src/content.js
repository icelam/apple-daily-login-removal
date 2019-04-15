// Document ready
var ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState != 'loading') fn();
    });
  }
};

// Main function - to remove login box
var AppleDailyLoginRemover = function AppleDailyLoginRemover() {
  var _init = function _init() {
    console.log('%cDisable Apple Daily login message', 'color: red; font-size: 20px;');

    if (typeof window.confirmSubscriptionOn !== 'undefined') {
      confirmSubscriptionOn = function confirmSubscriptionOn() {
        return false;
      };
    }
  };

  return {
    init: _init
  };
};

// Init
var remover = new AppleDailyLoginRemover();
ready(remover.init);