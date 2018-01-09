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
    /*
    Checks if URLs is not empty && Name
     */
    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('doesn\'t have empty URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toEqual(0);
            });
        });

        it('doesn\'t have an empty name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toEqual(0);
            });
        });
    });

    /*
    Checks if menubar is clickable & hidden when page has loaded.
     */
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

    /*
    Check if the feed content has loaded
     */
    describe("Initial Entries", function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('Feed is loaded', function () {
            expect($('.entry').length).not.toEqual(0);
        });
    });

    /*
    Check if the new feed content loads or not.
     */
    describe('New Feed Selection', function () {
        var initFeed = $('.feed').html();

        beforeEach(function (done) {
            loadFeed(0, function () {
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it('Feed content has changed', function () {
            var newFeed = $('.feed').html();
            expect(newFeed).not.toEqual(initFeed);
        });
    });
}());
