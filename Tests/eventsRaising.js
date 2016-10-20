jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Events raising', function () {
    beforeEach(function () {
        jasmine.getFixtures().load('eventsRaising.html');
    });

    it("before-sort is raised on initialization", function () {
        var table = $('table.sortable');
        var wasRaised = false;
        table.on('before-sort', function() {
            wasRaised = true;
        });
        $.bootstrapSortable();
        expect(wasRaised).toBe(true);
    });

    it("sorted is raised on initialization", function () {
        var table = $('table.sortable');
        var wasRaised = false;
        table.on('sorted', function () {
            wasRaised = true;
        });
        $.bootstrapSortable();
        expect(wasRaised).toBe(true);
    });

    it("before-sort is raised on manual sorting", function () {
        var table = $('table.sortable');
        var wasRaised = false;
        $.bootstrapSortable();
        table.on('before-sort', function () {
            wasRaised = true;
        });
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        expect(wasRaised).toBe(true);
    });

    it("sorted is raised on manual sorting", function () {
        var table = $('table.sortable');
        var wasRaised = false;
        $.bootstrapSortable();
        table.on('sorted', function () {
            wasRaised = true;
        });
        $.bootstrapSortable({ sortingHeader: $('#h2') });
        expect(wasRaised).toBe(true);
    });
})