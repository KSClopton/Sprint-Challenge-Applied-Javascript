// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
    function makeHeader() {

        // make variables
        const divHeader = document.createElement('div')
        const date = document.createElement('span')
        const mainHead = document.createElement('h1')
        const temp = document.createElement('span')
        // create structure
        divHeader.appendChild(date)
        divHeader.appendChild(mainHead)
        divHeader.appendChild(temp)
        // add classes
        divHeader.classList.add('header')
        date.classList.add('date')
        temp.classList.add('temp')
        // add text content
        date.textContent = 'March 28, 2019'
        temp.textContent = '98°'

        return divHeader
    }
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const heading = makeHeader()
    const headContainer = document.querySelector('.header-container')
    headContainer.appendChild(heading)
}
Header();