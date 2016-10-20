jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Table inside table sorting', function() {
    beforeEach(function() {
        jasmine.getFixtures().load('tableInsideTable.html');
        $.bootstrapSortable();
    });

    it("Outer table has correct order of rows", function() {
        var index = $('#outerFirst').index('#outer > tr');
        expect(index).toBe(1);
    });

    it("Inner table has correct order of rows", function() {
        var index = $('#innerFirst').index('#inner > tr');
        expect(index).toBe(0);
    });

    it("Inner table header keeps sorted class after outer sorting", function() {
        var innerHeader = $('#innerh1');
        expect(innerHeader.hasClass('sorted')).toBe(true);

        $.bootstrapSortable({ sortingHeader: $('#outerh2') });
        expect(innerHeader.hasClass('sorted')).toBe(true);
    });

    it("Inner table header keeps sorted icon after outer sorting", function() {
        var innerHeader = $('#innerh1');
        expect(innerHeader.children('.sign').length).toBe(1);

        $.bootstrapSortable({ sortingHeader: $('#outerh2') });
        expect(innerHeader.children('.sign').length).toBe(1);
    });
});
