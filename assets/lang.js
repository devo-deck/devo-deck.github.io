/* Sprachwahl über ?lang=de|tr|en – ohne Cookies, ohne Speicher. */
(function () {
  var ok = { de: 1, tr: 1, en: 1 };
  var p = new URLSearchParams(location.search).get("lang");
  var lang = ok[p] ? p : "de";
  document.documentElement.lang = lang;
  document.body.classList.add("lang-" + lang);
  var t = document.querySelector('meta[name="title-' + lang + '"]');
  if (t) document.title = t.content;
  var d = document.querySelector('meta[name="desc-' + lang + '"]'), dm = document.querySelector('meta[name="description"]');
  if (d && dm) dm.setAttribute("content", d.content);
  document.querySelectorAll("nav.lang a").forEach(function (a) {
    a.setAttribute("aria-current", a.getAttribute("data-set") === lang ? "true" : "false");
  });
  if (lang !== "de") {
    document.querySelectorAll("a[data-in]").forEach(function (a) {
      var h = a.getAttribute("href");
      a.setAttribute("href", h + (h.indexOf("?") < 0 ? "?" : "&") + "lang=" + lang);
    });
  }
  /* Einladungscode anzeigen (nur Buchstaben und Ziffern, höchstens 16 Zeichen) */
  var box = document.querySelectorAll("[data-code]");
  if (box.length) {
    var c = (new URLSearchParams(location.search).get("code") || "").replace(/[^A-Za-z0-9]/g, "").slice(0, 16).toUpperCase();
    box.forEach(function (el) { el.textContent = c || "—"; });
    document.querySelectorAll("[data-has-code]").forEach(function (el) { el.hidden = !c; });
    document.querySelectorAll("[data-no-code]").forEach(function (el) { el.hidden = !!c; });
  }
  /* Sprachumschalter: aktuellen Code behalten */
  document.querySelectorAll("nav.lang a").forEach(function (a) {
    var q = new URLSearchParams(location.search);
    q.set("lang", a.getAttribute("data-set"));
    a.setAttribute("href", "?" + q.toString());
  });
})();
