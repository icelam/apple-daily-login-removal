//Load and inject script to page
function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}

// Load and inject css to page
function injectStyle (file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('link');
  script.setAttribute('type', 'text/css');
  script.setAttribute('rel', 'stylesheet');
  script.setAttribute('href', file_path);
  node.appendChild(script);
};

injectScript(chrome.extension.getURL('assets/js/paywall-removal.js'), 'body');
injectStyle(chrome.extension.getURL('assets/styles/paywall-removal.css'), 'head')