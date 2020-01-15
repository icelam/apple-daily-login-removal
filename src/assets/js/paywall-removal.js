// Main function - to remove login box
var AppleDailyLoginRemover = function AppleDailyLoginRemover() {
  var injectStyle = (file_path, tag) => {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('link');
    script.setAttribute('type', 'text/css');
    script.setAttribute('rel', 'stylesheet');
    script.setAttribute('href', file_path);
    node.appendChild(script);
  };

  var _init = function _init() {
    console.log('%cDisable Apple Daily login message', 'color: red; font-size: 20px;');

    injectStyle(chrome.extension.getURL('assets/styles/paywall-removal.css'), 'head');
  };

  return {
    init: _init
  };
};

// Init
var remover = new AppleDailyLoginRemover();
remover.init();