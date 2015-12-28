jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Initializing sorting values', function () {
    beforeEach(function () {
        jasmine.getFixtures().load('initializeSortingValues.html');
        $.bootstrapSortable();
    });

    it("Date value", function () {
        var cell = $('#date');
        expect(cell).toHaveData('value', '2012/03/22/00/00/00');
    });

    it("Automatic value", function () {
        var cell = $('#auto');
        expect(cell).toHaveData('value', 'direct value');
    });

    it("Specified value", function () {
        var cell = $('#specified');
        expect(cell).toHaveData('value', 'specified value');
    });

    it("Regex value", function () {
        var cell = $('#regex');
        expect(cell).toHaveData('value', 10);
    });

    describe('Format in header', function() {
        it("Correctly applied date format", function () {
            var cell = $('#dateHeader');
            expect(cell).toHaveData('value', '2012/03/22/00/00/00');
        });

        it("Correctly applied regex value", function () {
            var cell = $('#regexHeader');
            expect(cell).toHaveData('value', 10);
        });
    });
})