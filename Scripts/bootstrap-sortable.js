/* TINY SORT modified according to this https://github.com/Sjeiti/TinySort/pull/51*/
(function (e, t) { function h(e) { return e && e.toLowerCase ? e.toLowerCase() : e } function p(e, t) { for (var r = 0, i = e.length; r < i; r++) if (e[r] == t) return !n; return n } var n = !1, r = null, i = parseFloat, s = Math.min, o = /(-?\d+\.?\d*)$/g, u = /(\d+\.?\d*)$/g, a = [], f = [], l = function (e) { return typeof e == "string" }, c = Array.prototype.indexOf || function (e) { var t = this.length, n = Number(arguments[1]) || 0; n = n < 0 ? Math.ceil(n) : Math.floor(n); if (n < 0) n += t; for (; n < t; n++) { if (n in this && this[n] === e) return n } return -1 }; e.tinysort = { id: "TinySort", version: "1.5.2", copyright: "Copyright (c) 2008-2013 Ron Valstar", uri: "http://tinysort.sjeiti.com/", licensed: { MIT: "http://www.opensource.org/licenses/mit-license.php", GPL: "http://www.gnu.org/licenses/gpl.html" }, plugin: function () { var e = function (e, t) { a.push(e); f.push(t) }; e.indexOf = c; return e }(), defaults: { order: "asc", attr: r, data: r, useVal: n, place: "start", returns: n, cases: n, forceStrings: n, ignoreDashes: n, sortFunction: r } }; e.fn.extend({ tinysort: function () { var d, v, m = this, g = [], y = [], b = [], w = [], E = 0, S, x = [], T = [], N = function (t) { e.each(a, function (e, n) { n.call(n, t) }) }, C = function (t, r) { var s = 0; if (E !== 0) E = 0; while (s === 0 && E < S) { var a = w[E], c = a.oSettings, p = c.ignoreDashes ? u : o; N(c); if (c.sortFunction) { s = c.sortFunction(t, r) } else if (c.order == "rand") { s = Math.random() < .5 ? 1 : -1 } else { var d = n, v = !c.cases ? h(t.s[E]) : t.s[E], m = !c.cases ? h(r.s[E]) : r.s[E]; v = v.replace(/^\s*/i, "").replace(/\s*$/i, ""); m = m.replace(/^\s*/i, "").replace(/\s*$/i, ""); if (!A.forceStrings) { var g = l(v) ? v && v.match(p) : n, y = l(m) ? m && m.match(p) : n; if (g && y) { var b = v.substr(0, v.length - g[0].length), x = m.substr(0, m.length - y[0].length); if (b == x) { d = !n; v = i(g[0]); m = i(y[0]) } } } s = a.iAsc * (v < m ? -1 : v > m ? 1 : 0) } e.each(f, function (e, t) { s = t.call(t, d, v, m, s) }); if (s === 0) E++ } return s }; for (d = 0, v = arguments.length; d < v; d++) { var k = arguments[d]; if (l(k)) { if (x.push(k) - 1 > T.length) T.length = x.length - 1 } else { if (T.push(k) > x.length) x.length = T.length } } if (x.length > T.length) T.length = x.length; S = x.length; if (S === 0) { S = x.length = 1; T.push({}) } for (d = 0, v = S; d < v; d++) { var L = x[d], A = e.extend({}, e.tinysort.defaults, T[d]), O = !(!L || L == ""), M = O && L[0] == ":"; w.push({ sFind: L, oSettings: A, bFind: O, bAttr: !(A.attr === r || A.attr == ""), bData: A.data !== r, bFilter: M, $Filter: M ? m.filter(L) : m, fnSort: A.sortFunction, iAsc: A.order == "asc" ? 1 : -1 }) } m.each(function (n, r) { var i = e(r), s = i.parent().get(0), o, u = []; for (j = 0; j < S; j++) { var a = w[j], f = a.bFind ? a.bFilter ? a.$Filter.filter(r) : i.find(a.sFind) : i; u.push(a.bData ? f.data(a.oSettings.data) : a.bAttr ? f.attr(a.oSettings.attr) : a.oSettings.useVal ? f.val() : f.text()); if (o === t) o = f } var l = c.call(b, s); if (l < 0) { l = b.push(s) - 1; y[l] = { s: [], n: [] } } if (o.length > 0) y[l].s.push({ s: u, e: i, n: n }); else y[l].n.push({ e: i, n: n }) }); e.each(y, function (e, t) { t.s.sort(C) }); e.each(y, function (t, r) { var i = r.s.length, o = [], u = i, a = [0, 0]; switch (A.place) { case "first": e.each(r.s, function (e, t) { u = s(u, t.n) }); break; case "org": e.each(r.s, function (e, t) { o.push(t.n) }); break; case "end": u = r.n.length; break; default: u = 0 } for (d = 0; d < i; d++) { var f = p(o, d) ? !n : d >= u && d < u + r.s.length, l = (f ? r.s : r.n)[a[f ? 0 : 1]].e; l.parent().append(l); if (f || !A.returns) g.push(l.get(0)); a[f ? 0 : 1]++ } }); m.length = 0; Array.prototype.push.apply(m, g); return m } }); e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort })(jQuery);

(function ($) {

    var $document = $(document),
        bsSort = [],
    	lastSort,
        signClass;

    $.bootstrapSortable = function (applyLast, sign) {

	// check if moment.js is available
	var momentJsAvailable = (typeof moment !== 'undefined')

        //Set class based on sign parameter
        if (!sign) {
            signClass = "arrow";
        }
        else {
            signClass = sign
        }

        // set attributes needed for sorting
        $('table.sortable').each(function () {
            var $this = $(this);
            applyLast = (applyLast === true);
            $this.find('span.sign').remove();
            $this.find('thead th').each(function (index) {
                $(this).attr('data-sortkey', index);
            });
            $this.find('td').each(function () {
                var $this = $(this);
                if ($this.attr('data-dateformat') != undefined && momentJsAvailable) {
                    $this.attr('data-value', moment($this.text(), $this.attr('data-dateformat')).format('YYYY/MM/DD/HH/mm/ss'));
                }
                else {
                    $this.attr('data-value') === undefined && $this.attr('data-value', $this.text());
                }
            });
            $this.find('thead th').each(function (index) {
                var $this = $(this);
                if ($this.attr('data-defaultsort') == "disabled") { return; }
                lastSort = applyLast ? lastSort : -1;
                bsSort[index] = applyLast ? bsSort[index] : $this.attr('data-defaultsort');
                if (bsSort[index] != null && (applyLast == (index == lastSort))) {
                    bsSort[index] = bsSort[index] == 'asc' ? 'desc' : 'asc';
                    doSort($this, $this.parents('table.sortable'))
                }
            });
            $this.trigger('sorted');
        });
    };

    // add click event to table header
    $document.on('click', 'table.sortable thead th', function (e) {
        var $this = $(this), $table = $this.parents('table.sortable');
        doSort($this, $table);
        $table.trigger('sorted');
    });

    //Sorting mechanism separated
    function doSort($this, $table) {
        if ($this.attr('data-defaultsort') == "disabled") { return; }

        // update arrow icon
        if ($.browser.mozilla) {
            var moz_arrow = $table.find('div.mozilla');
            if (moz_arrow != null) {
                moz_arrow.parent().html(moz_arrow.text());
            }
            $this.wrapInner('<div class="mozilla"></div>');
            $this.children().eq(0).append('<span class="sign ' + signClass + '"></span>');
        }
        else {
            $table.find('span.sign').remove();
            $this.append('<span class="sign ' + signClass + '"></span>');
        }

        // sort direction
        var nr = $this.attr('data-sortkey');
        lastSort = nr;
        bsSort[nr] = bsSort[nr] == 'asc' ? 'desc' : 'asc';
        if (bsSort[nr] == 'desc') { $this.find('span.sign').addClass('up'); }

        // sort rows
        var rows = $table.find('tbody tr');
        rows.tsort('td:eq(' + nr + ')', { order: bsSort[nr], attr: 'data-value' });
    };

    // jQuery 1.9 removed this object
    if (!$.browser) {
        $.browser = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };
        var ua = navigator.userAgent;
        $.each($.browser, function (c, a) {
            $.browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;
            if ($.browser.mozilla && c == 'mozilla') { $.browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false; };
            if ($.browser.chrome && c == 'safari') { $.browser.safari = false; };
        });
    };

    // Initialise on DOM ready
    $($.bootstrapSortable);

}(jQuery));
