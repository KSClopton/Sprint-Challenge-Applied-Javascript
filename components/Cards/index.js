// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function makeCards(attrs){

    // create elements

    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    // add structure

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(image)

    // add classList

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    // add text content and srcs

    headLine.textContent = attrs.articles.headLine
    image.src = attrs.articles.authorPhoto
    authorName.textContent = `By ${attrs.articles.authorName}`  

    // return 
    return card

}

function getArticles(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            const cardsContainer = document.querySelector('.cards-container')
            cards = response.data
            const cardInfo = makeCards(cards)
            cardsContainer.appendChild(cardInfo)
        })
}

getArticles()