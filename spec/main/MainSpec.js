describe("usenet-crawler-api", function () {
    var api = require("../../usenet-crawler-api.js");

    it("should be defined", function () {
        expect(api).not.toEqual(undefined);
    });

    it("should have a some ajax thing", function () {
        expect(api.ajax).not.toEqual(undefined);
    });

    it("should be possible to set the api key", function () {
        api.setting("apiKey", "dummyValue");
        expect(api.setting("apiKey")).toEqual("dummyValue");
    });
});
