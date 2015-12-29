jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Avoid flipping order', function () {
    beforeEach(function () {
        jasmine.getFixtures().load('avoidFlippingOrder.html');
        $.bootstrapSortable();
    });

    it("Initially 'a' is first", function () {
        var index = $('#az').index('tbody tr');
        expect(index).toBe(0);
    });

    it("Click h2, 'w' is first", function () {
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        var index = $('#dw').index('tbody tr');
        expect(index).toBe(0);
    });

    it("Click h2 twice, 'a' is first", function () {
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        var index = $('#az').index('tbody tr');
        expect(index).toBe(0);
    });

    it("Click h2 and h1, 'a' is first", function () {
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        $.bootstrapSortable({ sortingHeader: $('#h1') });
        var index = $('#az').index('tbody tr');
        expect(index).toBe(0);
    });
})