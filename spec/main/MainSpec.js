var fs = require("fs");

describe("usenet-crawler-api", function () {
    var api = require("../../usenet-crawler-api.js");

    it("should be defined", function () {
        expect(api).not.toEqual(undefined);
    });

    it("should be possible to set the api key", function () {
        var apiKeyFileExists = fs.existsSync(__dirname + "/../api.key");

        expect(apiKeyFileExists).toEqual(true);

        var key = fs.readFileSync(__dirname + "/../api.key", { encoding: "utf-8" }).trim("\r\n");

        api.setting("apiKey", key);
    });

    it("should be possible to retrieve the api key", function () {
        expect(api.setting("apiKey")).not.toEqual(undefined);
    });

    it("should be possible to query usenet-crawler.com arbitrarily", function (done) {
        api.searchFor.query("random").then(function (data) {
            expect(data.length).toBeGreaterThan(0);
            done();
        });
    });

    it("should be possible to fetch some nfo file", function (done) {
        api.getNfo("cb4436f7ac2b72908837b0bc3a20bef3").then(function (data) {
            expect(data.notJson).toBeTruthy();
            expect(data.data.length).toBeGreaterThan(0);
            done();
        });
    });
});
