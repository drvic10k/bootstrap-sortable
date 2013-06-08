bootstrap-sortable
==================
Current version: 1.2.2

adding sorting ability to bootstrap table

In fact, it can be used for any tables.

Available for download with NuGet, search for `bootstrap-sortable`.

Usage:

Add references to bootstrap-sortable.css and bootstrap-sortable.js to your page. Add class "sortable" to your bootstrap table.
HTML table has to be properly formated, using `<thead>`, `<th>` and `<tbody>` elements. You can disable sorting for a column by using `<td>` instead of `<th>` in header.

When you add table rows or whole table from client side, use `$.bootstrapSortable()` function to add sortability to parts/tables that were not present at document.ready

You can preset one column to be sorted when table is loaded this way:
```html
<th> Column 1</th>
<th> Column 2</th>
<th data-defaultsort="desc"> Column 3</th>
```
