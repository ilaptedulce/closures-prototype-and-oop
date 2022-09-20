const Book = function (title, author, yearOfPublication) {
  this.title = title
  this.author = author
  this.yearOfPublication = yearOfPublication
}

Book.prototype.getSummary = function () {
  return `${this.title} was published in ${this.yearOfPublication}`
}

const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austin', '1813')
const theIdiot = new Book('The Idiot', 'Fyodor Dostoevsky', '1869')
console.log(prideAndPrejudice.getSummary())
console.log(theIdiot.getSummary())
console.log(prideAndPrejudice.author)

const Novel = function (title, yearOfPublication, novelType) {
  Book.call(this, title, yearOfPublication, novelType)
  this.novelType = novelType
}
Object.setPrototypeOf(Novel.prototype, Book.prototype)

const harryPotter = new Novel('Harry Potter and the Deathly Hallows', 'fiction', '2007')
const becoming = new Novel('Becoming', 'Michelle Obama', 'autobiography', '2018')
console.log(harryPotter.getSummary())
console.log(becoming.novelType)

const Comics = function (title, yearOfPublication, typeOfcomics) {
  Book.call(this, title, yearOfPublication, typeOfcomics)
  this.typeOfcomics = typeOfcomics
}

Object.setPrototypeOf(Comics.prototype, Book.prototype)

const janeFoster = new Comics('Jane Foster & the Mighty Thor', 'Torunn Grønbekk', '2022', 'Superhero')
console.log(janeFoster.getSummary())
