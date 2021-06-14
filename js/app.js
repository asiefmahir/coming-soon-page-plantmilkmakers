// Hero Section Starts

const nextIcon = document.getElementById('next-icon');
const prevIcon = document.getElementById('prev-icon');
const firstSliderSection = document.getElementById('first')
const secondSliderSection = document.getElementById('second')
const thirdSliderSection = document.getElementById('third')

let clickCount = 0;

const carouselHandler = () => {
    if (((clickCount % 3) + 3) % 3 === 0) { // clickCount % 3 === 0
        firstSliderSection.classList.add('active');
        firstSliderSection.classList.remove('hidden');
        secondSliderSection.classList.remove('active');
        secondSliderSection.classList.add('hidden')
        thirdSliderSection.classList.remove('active')
        thirdSliderSection.classList.add('hidden')
    } else if (((clickCount % 3) + 3) % 3 === 2) {
        thirdSliderSection.classList.add('active');
        thirdSliderSection.classList.remove('hidden');
        firstSliderSection.classList.add('hidden')
        firstSliderSection.classList.remove('active');
        secondSliderSection.classList.add('hidden');
        secondSliderSection.classList.remove('active')
    } else {
        secondSliderSection.classList.add('active');
        secondSliderSection.classList.remove('hidden');
        firstSliderSection.classList.add('hidden')
        firstSliderSection.classList.remove('active');
        thirdSliderSection.classList.add('hidden');
        thirdSliderSection.classList.remove('active');
    }
}

const prevHandler = () => {
    clickCount--;
    carouselHandler()
    console.log(clickCount)
}

const nextHandler = () => {
    clickCount++;
    carouselHandler()
    console.log(clickCount)
}

prevIcon.addEventListener('click', prevHandler)
nextIcon.addEventListener('click', nextHandler)

// Hero Section Ends

// Quiz Section

let quizRatings = [];

let quizSection = document.getElementById('quiz');
let resultAndFormSection = document.getElementById('result-and-form-wrapper')
let backToQuizButton = document.getElementById('back-to-quiz-button');
let quizButton = document.getElementById('quiz-button');
let dropZone1 = document.getElementById('dropzone-1')
let dropZone2 = document.getElementById('dropzone-2')
let dropZone3 = document.getElementById('dropzone-3')
let storeButton = document.getElementById('store')
let homeButton = document.getElementById('store')



const quizHandler = () => {
    // fetch()
    //     .then(() =>)
    //     .then(()=>)

    quizRatings = []
    let firstRankedElement = dropZone1.lastElementChild;
    if (firstRankedElement) {
        quizRatings.push({
            id: [firstRankedElement.getAttribute('id')][0],
            name: [firstRankedElement.getAttribute('id')][0],
            rating: 5
        })
    }
    let secondRankedElement = dropZone2.lastElementChild;
    if (secondRankedElement) {
        quizRatings.push({
            id: [secondRankedElement.getAttribute('id')][0],
            name: [secondRankedElement.getAttribute('id')][0],
            rating: 3
        })
    }
    let thirdRankedElement = dropZone3.lastElementChild;
    if (thirdRankedElement) {
        quizRatings.push({
            id: [thirdRankedElement.getAttribute('id')][0],
            name: [thirdRankedElement.getAttribute('id')][0],
            rating: 1
        })
    }

    console.log(quizRatings);
    resultAndFormSection.classList.remove('hidden');
    console.log(resultAndFormSection)
    quizSection.classList.add('hidden')
}

quizButton.addEventListener('click', quizHandler)

// let topTenIngredients = [
//     {
//         id: 'almond',
//         name: 'almond',
//         ratings: 50,
//     },
//     {
//         id: 'bcd',
//         name: 'bcd',
//         ratings: 70,
//     },
//     {
//         id: 'efg',
//         name: 'efg',
//         ratings: 20,
//     },
//     {
//         id: 'xyz',
//         name: 'xyz',
//         ratings: 30,
//     },
//     {
//         id: 'mno',
//         name: 'mno',
//         ratings: 14,
//     },
// ];

// topTenIngredients.sort((ingredientA, ingredientB) => ingredientB.ratings - ingredientA.ratings)
// const progressSection = document.getElementById('progress-report');

// let childCount = 0

// for (let i = 0; i < topTenIngredients.length; i++) {
//     progressSection.children[i].children[0].innerText = topTenIngredients[i].name;
//     progressSection.children[i].children[1].setAttribute('value', topTenIngredients[i].ratings.toString());
//     progressSection.children[i].children[1].innerText = topTenIngredients[i].ratings
// }

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);

    const dropzone = event.target;
    console.log('dropzoen', dropzone)
    let child = dropzone.lastElementChild;

    if (dropzone.nodeName === 'IMG') {
        alert('An Ingredient is already present here');
        return
    }
    if (child && child.nodeName === 'IMG') {
        alert('An Ingredient is already present here');
        return
    } else if (child && child.nodeName === 'P') {
        dropzone.removeChild(child)
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData()
    }
    if (!child) {
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData()
    }
}

// Result Section



backToQuizButton.addEventListener('click', () => {
    resultAndFormSection.classList.add('hidden');
    console.log(resultAndFormSection)
    quizSection.classList.remove('hidden')
    console.log(quizSection)
})