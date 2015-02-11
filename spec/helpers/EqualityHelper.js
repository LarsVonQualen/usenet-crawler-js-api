beforeEach(function () {
    jasmine.addMatchers({
        toBeGreaterThan: function () {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: actual > expected
                    }
                }
            };
        },
        toBeGreaterThanOrEqualTo: function () {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: actual >= expected
                    }
                }
            };
        },
        toBeLessThan: function () {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: actual < expected
                    }
                }
            }
        },
        toBeLessThanOrEqualTo: function () {
            return {
                compare: function (actual, expected) {
                    return {
                        pass: actual <= expected
                    }
                }
            }
        }
    });
});
