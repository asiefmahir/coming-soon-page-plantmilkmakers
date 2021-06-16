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

// prevIcon.addEventListener('click', prevHandler)
// nextIcon.addEventListener('click', nextHandler)

// Hero Section Ends

// Quiz Section

let quizRatings = [];

const quizSection = document.getElementById('quiz');
const resultAndFormSection = document.getElementById('result-and-form-wrapper')
const backToQuizButton = document.getElementById('back-to-quiz-button');
const quizButton = document.getElementById('quiz-button');
const dropZone1 = document.getElementById('dropzone-1')
const dropZone2 = document.getElementById('dropzone-2')
const dropZone3 = document.getElementById('dropzone-3')
const homeSection = document.getElementById('home-section');
const storeSection = document.getElementById('store-section')
const storeButton = document.getElementById('store')
const homeButton = document.getElementById('home')

const heroEmail = document.getElementById('hero-email');
const heroSubmit = document.getElementById('hero-submit')

const progressReport = document.getElementById('progress-report');

homeButton.addEventListener('click', () => {
    homeSection.classList.remove('hidden');
    storeSection.classList.add('hidden');
    homeButton.classList.remove('secondary-button');
    homeButton.classList.add('active-button');

    storeButton.classList.remove('active-button');
    storeButton.classList.add('secondary-button');

})

storeButton.addEventListener('click', () => {
    storeSection.classList.remove('hidden');
    homeSection.classList.add('hidden')
    storeButton.classList.remove('secondary-button');
    storeButton.classList.add('active-button');

    homeButton.classList.remove('active-button');
    homeButton.classList.add('secondary-button');
})


const quizHandler = () => {

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


    let fetchData = {
        method: 'POST',
        body: JSON.stringify({ quizRatings }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors',
    }

    fetch('/changeRating', fetchData)
        .then(res => res.json())
        .then(res => {
            quizResults = res;
            let totalRatings = 0;

            for (let i = 0; i < quizResults.length; i++) {
                totalRatings += quizResults[i].rating;
            }

            for (let i = 0; i < quizResults.length - 2; i++) {
                progressReport.children[i].children[0].children[0].innerText = quizResults[i].name;
                progressReport.children[i].children[0].children[1].innerText = quizResults[i].rating;
                let progress = (quizResults[i].rating * 100) / totalRatings
                progressReport.children[i].children[1].children[0].style.width = progress + '%';
            }
            resultAndFormSection.classList.remove('hidden');
            console.log(resultAndFormSection)
            quizSection.classList.add('hidden')
        })
        .catch(e => console.log(e.message))
}

quizButton.addEventListener('click', quizHandler)

function onDragStart(event) {
    // event.prototype
    console.log(event.dataTransfer)
    // event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    // console.log(event.target)
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const dropzone = event.target;
    if (dropzone.nodeName === 'DIV' || dropzone.nodeName === 'LI') {
        const id = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        draggableElement.style.minHeight = '100%'
        draggableElement.style.minWidth = '100%'
        console.log(draggableElement)
        if (draggableElement.parentElement.nodeName === 'LI') {
            draggableElement.parentElement.style.border = '1px solid #80c627'
            draggableElement.parentElement.style.borderRadius = '5px'
        }
        if (draggableElement.parentElement.nodeName === 'DIV') {
            let children1 = document.createElement('p')
            children1.classList.add('rank-card-text')
            let textForChildren1 = document.createTextNode('Rank 1')
            children1.appendChild(textForChildren1)
            let children2 = document.createElement('p')
            children2.classList.add('rank-card-text')

            let textForChildren2 = document.createTextNode('Rank 2')
            children2.appendChild(textForChildren2)
            let children3 = document.createElement('p')
            children3.classList.add('rank-card-text')

            let textForChildren3 = document.createTextNode('Rank 3')
            children3.appendChild(textForChildren3)

            if (draggableElement.parentElement.getAttribute('id') === 'dropzone-1') {
                draggableElement.parentElement.appendChild(children1)
            } else if (draggableElement.parentElement.getAttribute('id') === 'dropzone-2') {
                draggableElement.parentElement.appendChild(children2)
            } else if (draggableElement.parentElement.getAttribute('id') === 'dropzone-3') {
                draggableElement.parentElement.appendChild(children3)

            }
        }

        console.log('dropzoen', dropzone)
        let child = dropzone.lastElementChild;
        console.log(child)

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
            if (dropzone.nodeName === 'LI') {
                dropzone.style.border = 'none'
                dropzone.style.borderRadius = '0'
            }
            event
                .dataTransfer
                .clearData()
        }
        if (!child) {
            dropzone.appendChild(draggableElement);
            if (dropzone.nodeName === 'LI') {
                dropzone.style.border = 'none'
                dropzone.style.borderRadius = '0'
            }
            event
                .dataTransfer
                .clearData()
        }
    }
}

document.getElementById('subscribe-form').addEventListener('submit', function (e) {

    e.preventDefault();
    let email = document.getElementById('hero-email').value;
    populateEmail = email;

    document.getElementById('emailField').value = email;

    document.getElementById('hero-email').value = ''
    document.getElementById('subscribe-form').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');

    let fetchData = {
        method: 'POST',
        body: JSON.stringify({ email, name, tags: ['blog', 'newsletter'] }),
        headers: { 'Content-Type': 'application/json' },
    }

    fetch('/subscribe', fetchData)
        .then(res => res.json())
        .then(res => {
            let data = res
            document.getElementById('subscribe-form').classList.remove('hidden');
            document.getElementById('loader').classList.add('hidden');
            document.getElementById('form-title').innerText = data.status.toUpperCase();
        })
        .catch(e => console.error(e));
})


document.getElementById('form-info').addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('emailField').value;
    let name = document.getElementById('nameField').value;

    let fetchData = {
        method: 'POST',
        body: JSON.stringify({ email, name }),
        headers: { 'Content-Type': 'application/json' },
    }

    fetch('/submit', fetchData)
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            document.getElementById('form-info').classList.add('hidden');
            document.getElementById('submission-response').classList.remove('hidden')
            document.getElementById('submission-response').innerText = data.message.toUpperCase()
        })
        .catch(e => {
            console.log(e.message)
        })
})

// Result Section



backToQuizButton.addEventListener('click', () => {
    resultAndFormSection.classList.add('hidden');
    console.log(resultAndFormSection)
    quizSection.classList.remove('hidden')
    console.log(quizSection)
})