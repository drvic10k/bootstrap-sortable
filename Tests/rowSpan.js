jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Sorting cells with rowspan', function() {
    beforeEach(function() {
        jasmine.getFixtures().load('rowSpan.html');
        $.bootstrapSortable();
    });

    it("Sort 1st column, cells are correct in first row", function() {
        $.bootstrapSortable({ sortingHeader: $('#ha') });
        $.bootstrapSortable({ sortingHeader: $('#ha') });

        expect($('#a1').index('#row1 td')).toBe(0);
        expect($('#b1').index('#row1 td')).toBe(1);
        expect($('#c1').index('#row1 td')).toBe(2);
    });

    it("Sort 1st column, cells are correct in second row", function () {
        $.bootstrapSortable({ sortingHeader: $('#ha') });
        $.bootstrapSortable({ sortingHeader: $('#ha') });

        expect($('#b2').index('#row2 td')).toBe(0);
        expect($('#c2').index('#row2 td')).toBe(1);
    });
});
