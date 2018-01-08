/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('doesn\'t have empty URL', function () {
            for (x in allFeeds) {
                expect(allFeeds[x]).toBeDefined();
                expect(allFeeds[x].url.length).not.toEqual(0);
            }
        });

        it('doesn\'t have an empty name', function () {
            for (x in allFeeds) {
                expect(allFeeds[x]).toBeDefined();
                expect(allFeeds[x].url.length).not.toEqual(0);
            }
        });
    });

    describe('The menu', function () {
        it('Menubar is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('Menubar displays if the user click the icon', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe("Initial Entries", function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        });

        it('Feed is loaded', function () {
            expect($('.entry').length).not.toEqual(0);
        });
    });

    describe('New Feed Selection', function () {
        var initFeed = $('.feed').html();

        beforeEach(function (done) {
            loadFeed(0, function () {
                loadFeed(1, function () {
                    done();
                });
            });
        })

        it('Feed content has changed', function () {
            var newFeed = $('.feed').html();
            expect(newFeed).not.toEqual(initFeed);
        });
    });
}());
