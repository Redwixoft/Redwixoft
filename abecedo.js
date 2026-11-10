// Abecedo — a playable copy of the app's tape board, for the web page.
//
// Ordering follows the app (src/game/tape.ts): the Slovak primary units, with ch as one
// letter after h, and á ä é í ó ô ú ý ĺ ŕ folded onto their base letter as a tiebreak only.
// There is no dictionary here: any word made of Slovak letters counts, and the page says so.
(function () {
  'use strict';

  var UNITS = ['a', 'b', 'c', 'č', 'd', 'ď', 'e', 'f', 'g', 'h', 'ch', 'i', 'j', 'k', 'l', 'ľ', 'm',
    'n', 'ň', 'o', 'p', 'q', 'r', 's', 'š', 't', 'ť', 'u', 'v', 'w', 'x', 'y', 'z', 'ž'];
  var SECONDARY = { 'á': 'a', 'ä': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ô': 'o', 'ú': 'u', 'ý': 'y', 'ĺ': 'l', 'ŕ': 'r' };
  var WORDS = ['jazero', 'chlieb', 'kniha', 'slnko', 'mačka', 'škola', 'večer', 'ruža', 'lopta', 'rieka', 'orech', 'hrad', 'dážď', 'ľalia'];
  var VALID = /^[a-záäčďéíĺľňóôŕšťúýžqwx]{2,}$/;

  var board = document.getElementById('board');
  var count = document.getElementById('demoCount');
  if (!board) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function units(word) {
    var out = [];
    for (var i = 0; i < word.length; i++) {
      var c = SECONDARY[word[i]] || word[i];
      if (c === 'c' && word[i + 1] === 'h') { out.push('ch'); i++; }
      else if (UNITS.indexOf(c) >= 0) out.push(c);
    }
    return out;
  }
  function compare(a, b) {
    var ua = units(a), ub = units(b);
    for (var i = 0; i < Math.min(ua.length, ub.length); i++) {
      var d = UNITS.indexOf(ua[i]) - UNITS.indexOf(ub[i]);
      if (d) return d;
    }
    if (ua.length !== ub.length) return ua.length - ub.length;
    return a < b ? -1 : a > b ? 1 : 0; // accents break the tie
  }
  function tapeIndex(word) { var u = units(word)[0]; return u ? Math.max(0, UNITS.indexOf(u)) : 0; }

  var round = Math.floor(Date.now() / 864e5) % WORDS.length;
  var target, guesses, latest, won, lastBounds;

  function start() {
    target = WORDS[round % WORDS.length];
    guesses = []; latest = null; won = false; lastBounds = '-:-';
    render(false);
  }

  function bounds() {
    var lower = null, upper = null;
    guesses.forEach(function (g) {
      var d = compare(g, target);
      if (d < 0 && (!lower || compare(g, lower) > 0)) lower = g;
      if (d > 0 && (!upper || compare(g, upper) < 0)) upper = g;
    });
    return { lower: lower, upper: upper };
  }

  // The tape draws your letters, not the alphabet: a run of letters with no guess folds to one tick.
  function lines(from, to, words, boundIndex) {
    var out = [];
    for (var i = from; i <= to; i++) {
      var here = words.filter(function (w) { return tapeIndex(w) === i; });
      if (!here.length) { if (i !== boundIndex) out.push({ tick: true }); continue; }
      here.forEach(function (w, n) { out.push({ word: w, letter: n === 0 ? UNITS[i] : '' }); });
    }
    return out.filter(function (l, n) { return !l.tick || !(out[n - 1] && out[n - 1].tick); });
  }

  function lineHtml(l) {
    if (l.tick) return '<div class="line line--tick" aria-hidden="true"><span class="cell"></span></div>';
    var isLatest = l.word === latest;
    return '<div class="line"><span class="cell" aria-hidden="true">' + l.letter + '</span>' +
      '<span class="line__word' + (isLatest ? ' is-latest' : '') + '">' + l.word + '</span>' +
      (isLatest ? '<span class="dot" aria-hidden="true"></span>' : '') + '</div>';
  }

  function marks(lower, upper) {
    var from = lower ? tapeIndex(lower) : 0, to = upper ? tapeIndex(upper) : UNITS.length - 1;
    var span = UNITS.slice(from, to + 1);
    if (span.length <= 4) return span;
    return [0, 1, 2, 3].map(function (k) { return span[Math.round(k * (span.length - 1) / 3)]; });
  }

  function render(animate) {
    var b = bounds();
    var sorted = guesses.slice().sort(compare);
    var before = sorted.filter(function (g) { return compare(g, target) < 0 && g !== b.lower; });
    var after = sorted.filter(function (g) { return compare(g, target) > 0 && g !== b.upper; });
    if (won) { before = sorted.filter(function (g) { return compare(g, target) < 0; }); after = sorted.filter(function (g) { return compare(g, target) > 0; }); }

    var html = '';
    if (b.lower || (won && before.length)) {
      var li = won ? tapeIndex(before[before.length - 1]) : tapeIndex(b.lower);
      html += lines(0, li, before, li).map(lineHtml).join('');
    }

    if (won) {
      html += '<div class="window"><span class="zoom" aria-hidden="true"></span><div class="window__body result" role="status">' +
        '<span class="result__word">' + target + '</span>' +
        '<p>Uhádnuté na ' + guesses.length + '. pokus. V hre ťa každý deň čaká nové slovo.</p>' +
        '<button class="btn" type="button" id="again">Skúsiť iné slovo</button></div></div>';
    } else {
      var m = marks(b.lower, b.upper);
      html += '<div class="window"><span class="zoom" id="zoom" aria-hidden="true">' +
        m.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</span><div class="window__body">' +
        boundHtml(b.lower, 'lower') +
        '<form class="guess" id="guess" autocomplete="off"><label class="sr" for="word" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Tvoj tip</label>' +
        '<input id="word" name="word" placeholder="Napíš slovo…" autocapitalize="off" spellcheck="false" enterkeyhint="go" maxlength="24" />' +
        '<button class="btn" type="submit">Hádaj</button></form>' +
        '<p class="guess__error" id="err" aria-live="polite"></p>' +
        boundHtml(b.upper, 'upper') + '</div></div>';
    }

    if (b.upper || (won && after.length)) {
      var ui = won ? tapeIndex(after[0]) : tapeIndex(b.upper);
      html += lines(ui, UNITS.length - 1, after, ui).map(lineHtml).join('');
    }

    board.innerHTML = html;
    count.textContent = 'Pokusy: ' + guesses.length;

    var key = (b.lower || '-') + ':' + (b.upper || '-');
    if (animate && key !== lastBounds && !reduceMotion) {
      var z = document.getElementById('zoom');
      if (z) z.classList.add('is-squeezing');
    }
    lastBounds = key;

    var form = document.getElementById('guess');
    if (form) {
      form.addEventListener('submit', onGuess);
      if (animate) document.getElementById('word').focus({ preventScroll: true });
    }
    var again = document.getElementById('again');
    if (again) again.addEventListener('click', function () { round++; start(); document.getElementById('word').focus({ preventScroll: true }); });
  }

  function boundHtml(word, side) {
    if (!word) return '<span class="bound__missing">' + (side === 'lower' ? 'začiatok abecedy' : 'koniec abecedy') + '</span>';
    var landed = word === latest;
    return '<div class="bound' + (landed && !reduceMotion ? ' is-landed' : '') + '"><span class="bound__word">' + word + '</span>' +
      (landed ? '<span class="dot" aria-hidden="true"></span>' : '') +
      '<span class="bound__label">' + (side === 'lower' ? 'za ním ▾' : 'pred ním ▴') + '</span></div>';
  }

  function onGuess(e) {
    e.preventDefault();
    var input = document.getElementById('word');
    var err = document.getElementById('err');
    var w = input.value.trim().toLowerCase();
    if (!w) { err.textContent = 'Najprv napíš slovo.'; return; }
    if (!VALID.test(w)) { err.textContent = 'Len slovenské písmená, aspoň dve.'; return; }
    if (guesses.indexOf(w) >= 0) { err.textContent = '„' + w + '“ už na páske visí.'; input.select(); return; }
    guesses.push(w); latest = w;
    if (w === target) won = true;
    render(true);
  }

  start();
})();
