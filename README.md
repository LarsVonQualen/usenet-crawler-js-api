# Usenet-Crawler JS API

Behold the glorious JS API for working with the usenet-crawler.com api!

### Install
`npm install usenet-crawler-js-api`

### Usage
`var api = require("usenet-crawler-js-api");`

### API Interface
```json
{
    searchFor: {
        query: function query(q, asc) {},
        tv: function tv(q, season, episode) {},
        movie: function movies(imdbId, asc) {},
        musicBy: {
            artist: function artist(artist) {},
            album: function album(album) {},
            year: function year(year) {},
            label: function label(label) {},
            genre: function genre(genre) {}
        },
        bookBy: {
            title: function title(title) {},
            author: function author(author) {}
        },
        byNzbId: function byNzbId(nzbId) {}
    },
    getNfo: function getNfo(nzbId) {},
    getNzb: function getNfo(nzbId) {},
    comments: {
        get: function get(nzbId) {},
        add: function add(nzbId, comment) {}
    }
}
```
