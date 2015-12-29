jasmine.getFixtures().fixturesPath = 'base/Tests/';

describe('Empty rows sorting', function () {

    describe('Empty rows are sorted at the end { emptyEnd: true }', function () {
        beforeEach(function () {
            jasmine.getFixtures().load('emptyRowsSorting.html');
            $.bootstrapSortable({ emptyEnd: true });
        });

        it("Sort ascending", function () {
            var header = $('#header');
            $.bootstrapSortable({ sortingHeader: header });
            var indexA = $('#a').index('tbody tr td');
            var indexZ = $('#z').index('tbody tr td');
            expect(indexA).toBe(0);
            expect(indexZ).toBe(1);
        });

        it("Sort descending", function () {
            $.bootstrapSortable({ sortingHeader: header });
            $.bootstrapSortable({ sortingHeader: header });
            var indexZ = $('#z').index('tbody tr td');
            var indexA = $('#a').index('tbody tr td');
            expect(indexZ).toBe(0);
            expect(indexA).toBe(1);
        });
    });

    describe('Empty rows are sorted as default (beginning of the alphabet)', function () {
        beforeEach(function () {
            jasmine.getFixtures().load('emptyRowsSorting.html');
            $.bootstrapSortable();
        });

        it("Sort ascending", function () {
            var header = $('#header');
            $.bootstrapSortable({ sortingHeader: header });
            var indexA = $('#a').index('tbody tr td');
            var indexZ = $('#z').index('tbody tr td');
            expect(indexA).toBe(3);
            expect(indexZ).toBe(4);
        });

        it("Sort descending", function () {
            $.bootstrapSortable({ sortingHeader: header });
            $.bootstrapSortable({ sortingHeader: header });
            var indexA = $('#a').index('tbody tr td');
            var indexZ = $('#z').index('tbody tr td');
            expect(indexZ).toBe(0);
            expect(indexA).toBe(1);
        });
    });
});