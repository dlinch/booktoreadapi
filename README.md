## BookToRead API

## What Is It?
Book To Read is an api that returns award winning science fiction books.

## How Do I Use It?

Hit this url with GET requests at the endpoints listed below.
```
https://booktoread.herokuapp.com/
```

## The Endpoints

This will return all books in the database.
```js
/api
```

This will return a random book from the database.
```js
api/random
```

This will return a random book that won 2+ awards in one year.
```js
api/randommultiple
```

This will return all books that won a specific award, where 'parameter' is the award name being queried.
This can be either 'prometheus', 'locus', 'hugo', or 'nebula'. The endpoint is not case sensitive
for the first letter, but the rest are.
```js
api/award/parameter
```

This will return all books that won an award in a given year, where 'paramter' is the specified
year. The earliest available year is currently 1979. The latest available year is 2015.
```js
api/year/parameter
```


## Data Format

The book object is formatted like this:
```js
{
  id: 5,
  title: 'All Clear',
  winner: [
  "Hugo",
  "Nebula",
  "Locus"
  ],
  year: "2011",
  publisher: "Spectra Books",
  author_first: "Connie",
  author_last: "Willis"
}
```
Where book.year is the year the book won the awards. Usually this denotes the book was published the year prior, but not necessarily.

## Contributions
BookToRead api is open source. Contribute today at [https://github.com/dlinch/booktoreadapi](https://github.com/dlinch/booktoreadapi)!

## Data Irregularities
The following all appear in the first name key in the data:
```js
'Joan D.'
'L. Neil'
'J.K.'
```
There were no Prometheus awards for 1980, 1981, and 1985.

The first Prometheus award was given in 1979.

The first Locus award was given in 1980. Therefore there is no award for 1979.

The 1991 Prometheus Award for Fallen Angels has 3 authors, which broke my Data Model. The author is currently coded as Larry Niven, but the other authors are: Jerry Pournelle and Michael F. Flynn.

The Nebula award got off track somehow and gave a few awards out for books two year after they were published, and some of those books also received Hugo awards the year before. The current format is the year of the Hugo, and Nebula counted as the award winner. The following books won their Nebula in a year different than in the data:
```js
'Paladin of Souls': 'Hugo' - 2004
                : 'Nebula' - 2005

'American Gods': 'Hugo' - 2002
               'Nebula' - 2003

'Forever Peace': 'Hugo' - 1998
               'Nebula' - 1999
```
