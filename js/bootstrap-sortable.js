$(function () {
	// set attributes needed for sorting
	var bsSort = [];
	$('table.sortable').each(function () {
		$(this).find('thead th').each(function (index) { $(this).attr('sortKey', index); });
		$(this).find('th,td').each(function () { $(this).attr('value', $(this).text()); });
	});

	// add click event to table header
	$(document).on('click', 'table.sortable thead th', function (e) {
		// update arrow icon
		$(this).parents('table.sortable').find('span.arrow').remove();
		$(this).append('<span class="arrow"></span>');

		// sort direction
		var nr = $(this).attr('sortKey');
		bsSort[nr] = bsSort[nr] == 'asc' ? 'desc' : 'asc';
		if (bsSort[nr] == 'desc') { $(this).find('span.arrow').addClass('up'); }

		// sort rows
		var rows = $(this).parents('table.sortable').find('tbody tr');
		rows.tsort('td:eq(' + nr + ')', { order: bsSort[nr], attr: 'value' });
	});
});

/* TINY SORT */
(function (e) { var a = false, g = null, f = parseFloat, b = /(\d+\.?\d*)$/g; e.tinysort = { id: "TinySort", version: "1.2.18", copyright: "Copyright (c) 2008-2012 Ron Valstar", uri: "http://tinysort.sjeiti.com/", licenced: { MIT: "http://www.opensource.org/licenses/mit-license.php", GPL: "http://www.gnu.org/licenses/gpl.html" }, defaults: { order: "asc", attr: g, data: g, useVal: a, place: "start", returns: a, cases: a, forceStrings: a, sortFunction: g } }; e.fn.extend({ tinysort: function (m, h) { if (m && typeof (m) != "string") { h = m; m = g } var n = e.extend({}, e.tinysort.defaults, h), s, B = this, x = e(this).length, C = {}, p = !(!m || m == ""), q = !(n.attr === g || n.attr == ""), w = n.data !== g, j = p && m[0] == ":", k = j ? B.filter(m) : B, r = n.sortFunction, v = n.order == "asc" ? 1 : -1, l = []; if (!r) { r = n.order == "rand" ? function () { return Math.random() < 0.5 ? 1 : -1 } : function (F, E) { var i = !n.cases ? d(F.s) : F.s, K = !n.cases ? d(E.s) : E.s; if (!n.forceStrings) { var H = i.match(b), G = K.match(b); if (H && G) { var J = i.substr(0, i.length - H[0].length), I = K.substr(0, K.length - G[0].length); if (J == I) { i = f(H[0]); K = f(G[0]) } } } return v * (i < K ? -1 : (i > K ? 1 : 0)) } } B.each(function (G, H) { var I = e(H), E = p ? (j ? k.filter(H) : I.find(m)) : I, J = w ? E.data(n.data) : (q ? E.attr(n.attr) : (n.useVal ? E.val() : E.text())), F = I.parent(); if (!C[F]) { C[F] = { s: [], n: [] } } if (E.length > 0) { C[F].s.push({ s: J, e: I, n: G }) } else { C[F].n.push({ e: I, n: G }) } }); for (s in C) { C[s].s.sort(r) } for (s in C) { var y = C[s], A = [], D = x, u = [0, 0], z; switch (n.place) { case "first": e.each(y.s, function (E, F) { D = Math.min(D, F.n) }); break; case "org": e.each(y.s, function (E, F) { A.push(F.n) }); break; case "end": D = y.n.length; break; default: D = 0 } for (z = 0; z < x; z++) { var o = c(A, z) ? !a : z >= D && z < D + y.s.length, t = (o ? y.s : y.n)[u[o ? 0 : 1]].e; t.parent().append(t); if (o || !n.returns) { l.push(t.get(0)) } u[o ? 0 : 1]++ } } return B.pushStack(l) } }); function d(h) { return h && h.toLowerCase ? h.toLowerCase() : h } function c(j, m) { for (var k = 0, h = j.length; k < h; k++) { if (j[k] == m) { return !a } } return a } e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort })(jQuery);

function ApplySortability() {
	// set attributes needed for sorting
	$('table.sortable').each(function () {
		$(this).find('thead th').each(function (index) { $(this).attr('sortKey', index); });
		$(this).find('th,td').each(function () { $(this).attr('value', $(this).text()); });
	});

	// add click event to table header
	$(document).on('click', 'table.sortable thead th', function (e) {
		// update arrow icon
		$(this).parents('table.sortable').find('span.arrow').remove();
		$(this).append('<span class="arrow"></span>');

		// sort direction
		var nr = $(this).attr('sortKey');
		bsSort[nr] = bsSort[nr] == 'asc' ? 'desc' : 'asc';
		if (bsSort[nr] == 'desc') { $(this).find('span.arrow').addClass('up'); }

		// sort rows
		var rows = $(this).parents('table.sortable').find('tbody tr');
		rows.tsort('td:eq(' + nr + ')', { order: bsSort[nr], attr: 'value' });
	});

};