class Book {
  constructor (title, author, yearOfPublication) {
    this.title = title
    this.author = author
    this.yearOfPublication = yearOfPublication
  }

  getSummary () {
    return `${this.title} was published in ${this.yearOfPublication}`
  }
}
const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austin', '1813')
const theIdiot = new Book('The Idiot', 'Fyodor Dostoevsky', '1869')
console.log(prideAndPrejudice.getSummary())
console.log(theIdiot.getSummary())
console.log(theIdiot.author)

class Novel extends Book {
  constructor (title, author, yearOfPublication, novelType) {
    super(title, author, yearOfPublication)
    this.novelType = novelType
  }
}

const harryPotter = new Novel('Harry Potter and the Deathly Hallows', 'J. K. Rowling', '2007', 'fiction')
const becoming = new Novel('Becoming', 'Michelle Obama', '2018', 'autobiography')
console.log(harryPotter.getSummary())
console.log(becoming.author)

class Comics extends Book {
  constructor (title, author, yearOfPublication, typeOfcomics) {
    super(title, author, yearOfPublication)
    this.typeOfcomics = typeOfcomics
  }
}

const janeFoster = new Comics('Jane Foster & the Mighty Thor', 'Torunn Grønbekk', '2022', 'Superhero')
console.log(janeFoster.getSummary())
