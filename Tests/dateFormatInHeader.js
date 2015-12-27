jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Date format in header', function () {
    beforeEach(function () {
        jasmine.getFixtures().load('dateFormatInHeader.html');
        $.bootstrapSortable();
    });

    it("Correctly applied", function () {
        var cell = $('#date');
        expect(cell).toHaveData('value', '2012/03/22/00/00/00');
    });
})