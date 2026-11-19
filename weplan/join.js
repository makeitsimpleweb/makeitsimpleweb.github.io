// Sends the person on from an invite link (https://makeitsimpleweb.github.io/weplan/join#CODE).
//
// If WePlan is installed, the button opens it with the code; if not, it goes
// to Google Play with the code attached, and WePlan reads it after the install.
// The code is only ever taken from the fragment, checked against the shape of
// a real code, and put into the two addresses below. It is never shown, stored
// or sent anywhere by this page.
(function () {
  speak();

  var PACKAGE = 'com.makeitsimple.we_plan';
  var PLAY = 'https://play.google.com/store/apps/details?id=' + PACKAGE;

  var android = /Android/i.test(navigator.userAgent);
  document.getElementById('android').hidden = !android;
  document.getElementById('other').hidden = android;
  if (!android) return;

  // A calendar's share code: letters and digits (today a run of digits).
  var match = /^#([A-Za-z0-9]{4,40})$/.exec(location.hash);
  if (!match) return; // no (valid) code: the button is just the Play page
  var code = match[1];

  var store = PLAY + '&referrer=' + encodeURIComponent('invite=' + code);
  // An Android intent: opens the app if it is installed, otherwise goes to the
  // fallback. The code rides as ?c= since an intent cannot carry a fragment.
  document.getElementById('open').href =
    'intent://makeitsimpleweb.github.io/weplan/join?c=' + code +
    '#Intent;scheme=https;package=' + PACKAGE +
    ';S.browser_fallback_url=' + encodeURIComponent(store) + ';end';

  // Shows the page in the visitor's language (the words are in join-text.js).
  // Chooses the way the app does: the first language of the phone's list that
  // WePlan speaks, English when none, and Hong Kong, Macau and traditional
  // Chinese get zh-TW.
  function speak() {
    var text = window.JOIN_TEXT;
    if (!text) return; // the English in the page stays
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'en'];
    var chosen = 'en';
    for (var i = 0; i < languages.length; i++) {
      var tag = String(languages[i]).toLowerCase();
      var base = tag.split('-')[0];
      var found = null;
      if (base === 'zh') {
        found = /^zh-(tw|hk|mo|hant)/.test(tag) ? 'zh-TW' : 'zh';
      } else if (Object.prototype.hasOwnProperty.call(text, base)) {
        found = base;
      }
      if (found) { chosen = found; break; }
    }
    var words = text[chosen];
    var elements = document.querySelectorAll('[data-i18n]');
    for (var j = 0; j < elements.length; j++) {
      var word = words[elements[j].getAttribute('data-i18n')];
      if (word) elements[j].textContent = word;
    }
    document.title = words.title;
    document.documentElement.lang = chosen;
    document.documentElement.dir = chosen === 'ar' ? 'rtl' : 'ltr';
  }
})();
