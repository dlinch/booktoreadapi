## BookToRead API

## What Is It?
Book To Read is an api that returns award winning science fiction books.

## How Do I Use It?

Hit the api url utilizing the various RESTful methods.
```
https://booktoread.herokuapp.com/api/
```

## The Endpoints

```js
/api
```

This will return all books in the database.

```js
/random
```

This will return a random book from the database.

```js
/randommultiple
```

This will return a random book that won 2+ awards in one year.

```js
/award/awardParam
```

This will return all books that won a specific award, where awardParam is the award parameter.
This can be either 'prometheus', 'locus', 'hugo', or 'nebula'. The endpoint is not case sensitive
for the first letter, but the rest are.

```js
/year/yearParam
```

This will return all books that won an award in a given year, where yearParam is the specified
year. The earliest available year is currently 2006. The latest available year is 2015.


## Data Format

The book object is formatted like so:
It will return book objects in this format:
```
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
Where book.year is the year the book won the awards. Usually this denotes the book was published the year prior.

## Contributions
BookToRead api is open source. Contribute today at [https://github.com/dlinch/booktoreadapi](https://github.com/dlinch/booktoreadapi)!
