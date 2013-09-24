bootstrap-sortable
==================
adding sorting ability to bootstrap table  
Current version: 1.6.0

In fact, it can be used for any tables.

Sorting provided by [TinySort](https://github.com/Sjeiti/TinySort).
Date parsing provided by [moment.js](https://github.com/timrwood/moment/).

Available for download with NuGet, search for `bootstrap-sortable`.  
Working [demo](http://htmlpreview.github.io/?https://github.com/drvic10k/bootstrap-sortable/blob/gh-pages/index.html).

####Basic usage:

Add references to bootstrap-sortable.css and bootstrap-sortable.js to your page. Add class "sortable" to your bootstrap table.
HTML table has to be properly formated, using `<thead>`, `<th>` and `<tbody>` elements.

You can disable sorting for a column by using `data-defaultsort='disabled'` attribute in the `<th>` element.

When you add table rows or whole table from client side, use `$.bootstrapSortable(applyLast)` function to add sortability to parts/tables that were not present at document.ready.
Use optional paramater `applyLast=true` if you want to preserve the last used sorting.

After sorting a column, the table triggers an event `sorted`.

####Sorting direction signs:
You can choose the sign that show the sort direcion. Default is the arrow pointing towards the heigher value.

This proved to be contra-intuitive for some, so you can change it to opposite using the second parameter: `$.bootstrapSortable(applyLast, 'reversed')`.

Other possible values are `'az'`, `'AZ'`, `'_19'`, `'month'`. (See [demo](http://htmlpreview.github.io/?https://github.com/drvic10k/bootstrap-sortable/blob/gh-pages/index.html) to see how it looks.)

####Optional attributes:

You can preset one column to be sorted when table is loaded using `data-defaultsort` attribute:
```html
<th> Column 1</th>
<th> Column 2</th>
<th data-defaultsort="desc"> Column 3</th>
```

You can change the value that is used for sorting for each `<td>` using `data-value` attribute:
```html
<td data-value="5.45">5,45</td>
```

You can sort dates, even if they are in different formats. Specify date formats according to moment.js documentation.
```html
<td data-dateformat="YYYY-MM-DD">2013-06-24</td>
<td data-dateformat="DD-MMM-YYYY">26 June 2013</td>
```
