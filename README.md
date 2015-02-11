# Usenet-Crawler JS API

Behold the glorious JS API for working with the usenet-crawler.com api!

I'm in the business of fixing issues, so if you find anything, let me know!

### Install
`npm install usenet-crawler-js-api`

### Usage
`var api = require("usenet-crawler-js-api");`

### Testing
Place a file text file called `api.key` in the spec folder containing just your API key.


### API Interface
```javascript
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
