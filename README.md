## BookToRead API

## What Is It?
Book To Read is an api that returns award winning science fiction books.

## How Do I Use It?

Hit the api with GET requests at the endpoints listed below.
```
https://booktoread.herokuapp.com/api/
```

## The Endpoints

This will return all books in the database.
```js
/api
```

This will return a random book from the database.
```js
/random
```

This will return a random book that won 2+ awards in one year.
```js
/randommultiple
```

This will return all books that won a specific award, where 'parameter' is the award name being queried.
This can be either 'prometheus', 'locus', 'hugo', or 'nebula'. The endpoint is not case sensitive
for the first letter, but the rest are.
```js
/award/parameter
```

This will return all books that won an award in a given year, where 'paramter' is the specified
year. The earliest available year is currently 2006. The latest available year is 2015.
```js
/year/parameter
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
