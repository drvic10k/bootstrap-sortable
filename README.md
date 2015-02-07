bootstrap-sortable
==================
adding sorting ability to bootstrap table  
Current version: 1.11.0

In fact, it can be used for any tables.

Sorting provided by [TinySort](https://github.com/Sjeiti/TinySort).
Date parsing provided by [moment.js](https://github.com/timrwood/moment/).

Available for download with NuGet, search for `bootstrap-sortable`.  
Working [demo](http://drvic10k.github.io/bootstrap-sortable/).

For compatibility issues with older browsers and possible workarounds, please look into the [issues list](https://github.com/drvic10k/bootstrap-sortable/issues?labels=compatibility&page=1&state=closed).

####Dependencies:
You should add the provided "moment.js" library, or get yourself a copy from http://momentjs.com.

####Basic usage:

Add references to bootstrap-sortable.css and bootstrap-sortable.js to your page. Add class "sortable" to your bootstrap table.
HTML table has to be properly formated, using `<thead>`, `<th>` and `<tbody>` elements.

You can disable sorting for a column by using `data-defaultsort='disabled'` attribute in the `<th>` element.

When you add table rows or whole table from client side, use `$.bootstrapSortable(applyLast)` function to add sortability to parts/tables that were not present at document.ready.
Use optional paramater `applyLast=true` if you want to preserve the last used sorting.

After sorting a column, the table triggers an event `sorted`.

####Cell with `colspan` and multiple header rows:
When you have multiple header rows, all header cells in the same column can be used to sort that column.

Cells with `colspan` can also be used for sorting. When not specified, the first column of the colspan will be used for sorting. You can override this by using `data-mainsort` attribute. (Use zero-based index as the value, `data-mainsort='1'` will sort the second column of the span.)

If this cell is in the last row of the header, the sorting will be done according to this cell. If there is another row below, the cell in this row will be used. (i.e. the sorting sign, default-sort setting...)

#####!BREAKING CHANGE!
This changes the previous behaviour, where it only worked if the `colspan` cell was not in the last row and the `mainsort` had to be set on the cell in the next row. Now the `mainsort` is set on the `colspan` cell.

####Sorting direction signs:
You can choose the sign that show the sort direcion. Default is the arrow pointing towards the heigher value.

This proved to be contra-intuitive for some, so you can change it to opposite using the second parameter: `$.bootstrapSortable(applyLast, 'reversed')`.

Other possible values are `'az'`, `'AZ'`, `'_19'`, `'month'`. (See [demo](http://htmlpreview.github.io/?https://github.com/drvic10k/bootstrap-sortable/blob/gh-pages/index.html) to see how it looks.)

You can set individual signs for each column using `data-defaultsign` attribute in the `<th>` element.

#####Alternative way of styling the sorting signs:
Set `data-defaultsign='nospan'` and set a `class` on `<th>` elements. Then the sorting signs will be shown using `:after` pseudoelement on `<th>`. This can be seen on the first column in the demo page.
For this purpose, sorted column headers have classes `up`, `down` and `nosort` respectively and all previous styles are supported.
You can also do your own styling in `css`.

####Optional attributes:

You can preset one column to be sorted when table is loaded using `data-defaultsort` attribute:
```html
<th> Column 1</th>
<th> Column 2</th>
<th data-defaultsort="desc"> Column 3</th>
```

To change the initial direction when sorting a column for the first time, use the `data-firstsort` attribute:
```html
<th> Column 1</th>
<th> Column 2</th>
<th data-firstsort="desc"> Column 3</th>
```

You can change the value that is used for sorting for each `<td>` using `data-value` attribute:
```html
<td data-value="5.45">5,45</td>
```

You can sort dates, even if they are in different formats. Specify date formats according to moment.js documentation. This only works if you include any version of Moment.js. If Moment.js is not found it will fallback to the usual sorting.
```html
<td data-dateformat="YYYY-MM-DD">2013-06-24</td>
<td data-dateformat="DD-MMM-YYYY">26 June 2013</td>
```
