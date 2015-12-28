jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Disable sorting on rows', function () {
    beforeEach(function () {
        jasmine.getFixtures().load('disableSortingOnRows.html');
        $.bootstrapSortable();
    });

    it("First row stays first", function () {
        var index = $('#first').index('tbody tr td');
        expect(index).toBe(0);
    });

    it("Last row stays last", function () {
        var index = $('#last').index('tbody tr td');
        expect(index).toBe(3);
    });

    it("Middle rows are ordered", function () {
        var index = $('#b').index('tbody tr td');
        expect(index).toBe(2);
    });
})