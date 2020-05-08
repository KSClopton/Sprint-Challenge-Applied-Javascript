// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function makeTabs(attrs){

// create elements
const topicTitle = document.querySelector('.title')
const divTab1 = document.createElement('div')
const divTab2 = document.createElement('div')
const divTab3 = document.createElement('div')
const divTab4 = document.createElement('div')
const divTab5 = document.createElement('div')

// append to the existing title class
topicTitle.appendChild(divTab1)
topicTitle.appendChild(divTab2)
topicTitle.appendChild(divTab3)
topicTitle.appendChild(divTab4)
topicTitle.appendChild(divTab5)
// add classes
divTab1.classList.add('tabs')
divTab2.classList.add('tabs')
divTab3.classList.add('tabs')
divTab4.classList.add('tabs')
divTab5.classList.add('tabs')

// add text content
divTab1.textContent = attrs
divTab2.textContent = attrs
divTab3.textContent = attrs
divTab4.textContent = attrs
divTab5.textContent = attrs

return topicTitle
}

function getLambdaTimes(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            const divTopics = document.querySelector('.topics')
            topics = response.data
            lambdaTimes = makeTabs(topics)
            console.log(lambdaTimes)
            divTopics.appendChild(lambdaTimes)
            
        })
}
getLambdaTimes()