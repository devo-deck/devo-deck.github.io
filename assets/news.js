/* Neuigkeiten aus neuigkeiten.json anzeigen (gleiche Website, keine externen Dienste). */
(function () {
  var box = document.getElementById("news");
  if (!box) return;
  var lang = document.documentElement.lang || "de";
  var msg = { de: "Neuigkeiten konnten nicht geladen werden.", tr: "Haberler yüklenemedi.", en: "News could not be loaded." };
  function t(o) { return o && typeof o === "object" ? (o[lang] || o.de || "") : (o || ""); }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function datum(d) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d || "")) return d || "";
    var p = d.split("-");
    return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }
  fetch("neuigkeiten.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      var list = (data && data.eintraege) || [];
      var iso = list.every(function (e) { return /^\d{4}-\d{2}-\d{2}$/.test(e.datum || ""); });
      if (iso) list = list.slice().sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
      box.textContent = "";
      list.forEach(function (e) {
        var art = el("article", "news-item");
        if (e.bild) {
          var img = el("img"); img.src = e.bild; img.alt = t(e.bild_alt); img.loading = "lazy"; img.width = 96; img.height = 96;
          art.appendChild(img);
        }
        var txt = el("div", "news-text");
        var time = el("time", "news-date", datum(e.datum));
        if (!/^\d{4}-\d{2}-\d{2}$/.test(e.datum || "")) time.className += " ph";
        if (/^\d{4}-\d{2}-\d{2}$/.test(e.datum || "")) time.setAttribute("datetime", e.datum);
        txt.appendChild(time);
        txt.appendChild(el("h2", null, t(e.titel)));
        txt.appendChild(el("p", null, t(e.text)));
        art.appendChild(txt);
        box.appendChild(art);
      });
    })
    .catch(function () { box.textContent = ""; box.appendChild(el("p", "muted", msg[lang] || msg.de)); });
})();
