###Use cases:

Invalid date format `2001-07-02 00:00:00.0` for FF and Safari.
```coffeescript
moment('2001-07-02 00:00:00.0', 'YYYY-MM-DD').toDate() -> Mon Jul 02 2001 00:00:00 GMT+0300 (EEST)


moment('2001-07-02 00:00:00.0').format('dddd') -> 'Tuesday'


moment('2022-07-02 00:00:00.0').fromNow() -> 'in 6 years'
```


###Tips & Read:

* [Quick Tip: Handle Date and Time Like a Boss with moment.js](http://tutorialzine.com/2012/08/quick-tip-handle-date-and-time-like-a-boss-with-moment-js/)
* [Managing Dates and Times Using Moment.js](https://www.sitepoint.com/managing-dates-times-using-moment-js/)