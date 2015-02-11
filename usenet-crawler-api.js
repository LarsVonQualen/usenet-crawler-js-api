/**
 * usenet-crawler-api.js
 *
 * MIT License
 *
 * @author Lars von Qualen <larsvonqualen@gmail.com>
 */
var djax = require("djax");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

djax.xhr = XMLHttpRequest;

defer = require("q").defer;

var settings = {
    apiKey: undefined,
    secure: true
};

var apiCall = function apiCall(options) {
    if (settings.apiKey === undefined) throw new Error("Missing api key! Find it at https://www.usenet-crawler.com/profile");

    options.url = buildUrl((settings.secure ? "https:" : "http:"), "//www.usenet-crawler.com/api/?apikey=", settings.apiKey, "&o=json&", encodeURI(options.url));

    console.log("CALLING: " + options.url);

    options.contentType = options.contentType || "application/json";

    var d = defer();

    if (options.returnsXml) { console.log(options) }

    djax(options).done(function (data) {
        d.resolve(data.channel.item);
    }).fail(function (xhr) {
        if (xhr.status === 200) {
            d.resolve({
                notJson: true,
                data: xhr.responseText
            });
        } else {
            d.reject(xhr);
        }
    });

    return d.promise;
};

var buildUrl = function buildUrl() {
    var asArray = Array.prototype.slice.call(arguments, 0);

    return asArray.join("");
};

module.exports.setting = function setting(key, value) {
    if (value === undefined) {
        return settings[key];
    } else {
        settings[key] = value;
    }
};

module.exports.getCapabilities = function capabilities() {
    return apiCall({
        url: buildUrl("t=caps")
    });
};

module.exports.user = {
    register: function register(email) {
        return apiCall({
            url: buildUrl("t=register&email=", email)
        });
    },
    profile: function profile(username) {
        return apiCall({
            url: buildUrl("t=user&username=", username)
        });
    },
    addNzbToCart: function addNzbToCart(nzbId) {
        return apiCall({
            url: buildUrl("t=cartadd&id=", nzbId)
        });
    },
    deleteNzbFromCart: function deleteNzbFromCart(nzbId) {
        return apiCall({
            url: buildUrl("t=cartdel&id=", nzbId)
        });
    }
};

module.exports.searchFor = {
    query: function query(q, asc) {
        return apiCall({
            url: buildUrl("t=search&q=", q, "&sort=pubDate_", (asc === true ? "asc" : "desc"))
        });
    },
    tv: function tv(q, season, episode) {
        return apiCall({
            url: buildUrl("t=tv&q=", q, "&season=", season, "&ep=", episode)
        });
    },
    movie: function movies(imdbId, asc) {
        return apiCall({
            url: buildUrl("t=movie&imdbid=", q, "&sort=pubDate_", (asc === true ? "asc" : "desc"))
        });
    },
    musicBy: {
        artist: function artist(artist) {
            return apiCall({
                url: buildUrl("t=music&artist=", artist)
            });
        },
        album: function album(album) {
            return apiCall({
                url: buildUrl("t=music&album=", album)
            });
        },
        year: function year(year) {
            return apiCall({
                url: buildUrl("t=music&year=", year)
            });
        },
        label: function label(label) {
            return apiCall({
                url: buildUrl("t=music&label=", label)
            });
        },
        genre: function genre(genre) {
            return apiCall({
                url: buildUrl("t=music&genre=", genre)
            });
        }
    },
    bookBy: {
        title: function title(title) {
            return apiCall({
                url: buildUrl("t=book&title=", title)
            });
        },
        author: function author(author) {
            return apiCall({
                url: buildUrl("t=book&author=", author)
            });
        }
    },
    byNzbId: function byNzbId(nzbId) {
        return apiCall({
            url: buildUrl("t=details&id=", nzbId)
        });
    }
};

module.exports.getNfo = function getNfo(nzbId) {
    return apiCall({
        url: buildUrl("t=getnfo&raw=1&id=", nzbId)
    });
};

module.exports.getNzb = function getNfo(nzbId) {
    return apiCall({
        url: buildUrl("t=get&id=", nzbId)
    });
};

module.exports.comments = {
    get: function get(nzbId) {
        return apiCall({
            url: buildUrl("t=comments&id=", nzbId)
        });
    },
    add: function add(nzbId, comment) {
        return apiCall({
            url: buildUrl("t=comments&id=", nzbId, "&text=", comment)
        });
    }
};
