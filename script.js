console.log("Javascript Running")

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  if (document.querySelector(selector)) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loader-wrapper', false);
});
