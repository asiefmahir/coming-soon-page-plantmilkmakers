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

let draggableItem = null;
let draggableItemParent = null;

const parent1 = document.getElementById('parent-1')
const parent2 = document.getElementById('parent-2')
const parent3 = document.getElementById('parent-3')
const parent4 = document.getElementById('parent-4')
const parent5 = document.getElementById('parent-5')
const parent6 = document.getElementById('parent-6')
const parent7 = document.getElementById('parent-7')
const parent8 = document.getElementById('parent-8')
const parent9 = document.getElementById('parent-9')
const parent10 = document.getElementById('parent-10')
const parent11 = document.getElementById('parent-11')
const parent12 = document.getElementById('parent-12')

const child1 = document.getElementById('almond')
const child2 = document.getElementById('chashew')
const child3 = document.getElementById('coconut')
const child4 = document.getElementById('flax')
const child5 = document.getElementById('hazelnut')
const child6 = document.getElementById('hemp')
const child7 = document.getElementById('oat')
const child8 = document.getElementById('pea')
const child9 = document.getElementById('quinoa')
const child10 = document.getElementById('rice')
const child11 = document.getElementById('soy')
const child12 = document.getElementById('walnut')
console.log(child1);

// window.addEventListener('load', () => {
//     if(dropZone1.getElementsByClassName('ingredients-section-card__image').length === 0 && dropZone2.getElementsByClassName('ingredients-section-card__image').length === 0 &&dropZone3.getElementsByClassName('ingredients-section-card__image').length === 0 ) {
//         console.log('dis');
//         quizButton.disabled = true; 
//         let nodes = quizButton.getElementsByTagName('*');
//         console.log('ewei', nodes);
//         for(let i = 0; i < nodes.length ; i++) {
//             nodes[i].disabled =  true;
//             console.log(nodes[i]);
//         }
//     }
// })

const disableSeeresultsButton = () => {
    if(dropZone1.getElementsByClassName('ingredients-section-card__image').length === 0 && dropZone2.getElementsByClassName('ingredients-section-card__image').length === 0 &&dropZone3.getElementsByClassName('ingredients-section-card__image').length === 0 ) {
        console.log('dis');
        quizButton.disabled = true; 
        let nodes = quizButton.getElementsByTagName('*');
        console.log('ewei', nodes);
        for(let i = 0; i < nodes.length ; i++) {
            nodes[i].disabled =  true;
            console.log(nodes[i]);
        }
    } else {
        quizButton.disabled = false;
        let nodes = quizButton.getElementsByTagName('*');
        console.log('ewei', nodes);
        for(let i = 0; i < nodes.length ; i++) {
            nodes[i].disabled =  true;
            console.log(nodes[i]);
        }
    }
}

window.addEventListener('load', disableSeeresultsButton)
// window.addEventListener('change', disableSeeresultsButton )

const parents = [parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, parent9, parent10, parent11, parent12];

const parentChilds = [
    {
        parent: parent1,
        child: child1
    },
    {
        parent: parent2,
        child: child2
    },
    {
        parent: parent3,
        child: child3
    },
    {
        parent: parent4,
        child: child4
    },
    {
        parent: parent5,
        child: child5
    },
    {
        parent: parent6,
        child: child6
    },
    {
        parent: parent7,
        child: child7
    },
    {
        parent: parent8,
        child: child8
    },
    {
        parent: parent9,
        child: child9
    },
    {
        parent: parent10,
        child: child10
    },
    {
        parent: parent11,
        child: child11
    },
    {
        parent: parent12,
        child: child12
    },
    
]


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
    if(dropZone1.getElementsByClassName('ingredients-section-card__image').length === 0 && dropZone2.getElementsByClassName('ingredients-section-card__image').length === 0 && dropZone3.getElementsByClassName('ingredients-section-card__image').length === 0 ) {
        console.log('dis');
        quizButton.disabled = true; 
        let nodes = quizButton.getElementsByTagName('*');
        console.log('ewei', nodes);
        for(let i = 0; i < nodes.length ; i++) {
            nodes[i].disabled =  true;
            console.log(nodes[i]);
        }
        alert('Please Play The Quiz to See The Results')
        return
    }

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



quizButton.addEventListener('click', quizHandler);
// function onDragStart(event) {
//     event.preventDefault()
//     draggableItem = event.target;
//     if(event.target.parentElement.nodeName === 'LI') {
//         draggableItemParent = event.target.parentElement;
//     }
//     console.log(draggableItemParent);
// }
// function onDragOver (e) {
//     e.preventDefault();
//     console.log(e.target);
// }

// function onDrop (e) {
//     e.preventDefault();
//     let dropzone = e.target;

//     if(dropzone.nodeName === 'DIV') {
//         let draggableElement = draggableItem
//         let child = dropzone.lastElementChild;

//         if(child.nodeName !== 'IMG') {
//             dropzone.removeChild(child)
//             dropzone.appendChild(draggableElement);
             
//         }

//     }
    
// }


function onDragStart(event) {
    // event.prototype
    // console.log(event.dataTransfer)
    // event.target.parentElement.style.transform = ''
    // event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    // console.log(event.target)
    // event.dataTransfer.setData('text/plain', event.target.id);
    draggableItem = event.target;
    // if(event.target.parentElement.nodeName === 'LI') {
    //    draggableItemParent = event.target.parentElement;
    // }
    draggableItemParent = parentChilds.find((pair) => pair.child.getAttribute('id') === draggableItem.getAttribute('id')).parent
    console.log(draggableItemParent);
}



function onDragOver(event) {
    // console.log(event.target);
    // console.log('Hllo');
    
    
    event.preventDefault();
    if(event.target.nodeName === 'DIV') {
        event.target.style.transform = 'scale(1.2)'
        event.target.style.border = '2px solid #80c627'
        event.target.style.borderRadius = '5px'
    }

}

function creatingParagraphDomNodes () {
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
            children3.appendChild(textForChildren3);
            return {children1, children2, children3}
}

// if (draggableElement.parentElement.nodeName === 'LI') {
        //     draggableElement.parentElement.style.border = '1px solid #80c627'
        //     draggableElement.parentElement.style.borderRadius = '5px'
        // }
        // if (draggableElement.parentElement.nodeName === 'DIV') {
        //     let {children1, children2, children3} = creatingParagraphDomNodes()

        //     if (draggableElement.parentElement.getAttribute('id') === 'dropzone-1') {
        //         draggableElement.parentElement.appendChild(children1)
        //     } else if (draggableElement.parentElement.getAttribute('id') === 'dropzone-2') {
        //         draggableElement.parentElement.appendChild(children2)
        //     } else if (draggableElement.parentElement.getAttribute('id') === 'dropzone-3') {
        //         draggableElement.parentElement.appendChild(children3)

        //     }
        // }

function onDrop(event) {
    const dropzone = event.target;
    if (dropzone.nodeName === 'DIV') {
        // const id = event.dataTransfer.getData('text/plain');
        // const draggableElement = document.getElementById(id);
        let draggableElement = draggableItem;
        // draggableElement.style.minHeight = '100%'
        // draggableElement.style.minWidth = '100%'
        console.log(draggableElement)
        

        console.log('dropzoen', dropzone)
        const child = dropzone.lastElementChild
        console.log(dropzone.childNodes);
        console.log(child)

        console.log(dropzone.getElementsByTagName('IMG'));
        if (child && child.nodeName === 'IMG') {
            alert('An Ingredient is already present here');
            return
        } else if (child && child.nodeName === 'P') {
            console.log(child);
            dropzone.removeChild(child)
      
            console.log(dropzone.childNodes);
        
            console.log(dropzone);
            dropzone.appendChild(draggableElement);
            disableSeeresultsButton()
            // draggableItem =  null;
            // draggableItemParent = null;
            // console.log(dropzone);
            dropzone.style.transform = 'scale(1)';
            event.target.style.border = '2px dashed #80c627'
            event.target.style.borderRadius = '5px'
            draggableItemParent.style.border = '1px solid #80c627'
            draggableItemParent.style.borderRadius = '5px'
            console.log(draggableItemParent);
            // if (dropzone.nodeName === 'LI') {
            //     dropzone.style.border = 'none'
            //     dropzone.style.borderRadius = '0'
            // }
            event
                .dataTransfer
                .clearData()
        }
        if (!child) {
            console.log(child);
            dropzone.appendChild(draggableElement);
            disableSeeresultsButton()
            // draggableItem =  null;
            // draggableItemParent = null;
            dropzone.style.transform = 'scale(1)';
            dropzone.style.border = '2px dashed #80c627'
            dropzone.style.borderRadius = '5px'
            draggableItemParent.style.border = '1px solid #80c627'
            draggableItemParent.style.borderRadius = '5px'
            console.log(draggableItemParent);
            // if (dropzone.nodeName === 'LI') {
            //     dropzone.style.border = 'none'
            //     dropzone.style.borderRadius = '0'
            // }
            event
                .dataTransfer
                .clearData()
        }
    }
}

[dropZone1, dropZone2, dropZone3].forEach((element) => {
    element.addEventListener('dragleave', () => {
        disableSeeresultsButton()
        console.log(element.getElementsByTagName('IMG'));
        let {children1, children2, children3} = creatingParagraphDomNodes()
        // console.log(element.contains('P'));
        if(element.getElementsByTagName('IMG').length === 0  && element.getElementsByTagName('P').length === 0) {
            console.log(element.lastElementChild);
            if(element.getAttribute('id') === 'dropzone-1' ) {
                element.appendChild(children1)
            } else if(element.getAttribute('id') === 'dropzone-2' ) {
                element.appendChild(children2)
            } else if(element.getAttribute('id') === 'dropzone-3' ) {
                element.appendChild(children3)
            }
        }
        console.log(draggableItemParent);
        console.log(draggableItem);
        // console.log(draggableItemParent);
        // draggableItemParent.style.border = ''
        draggableItemParent.appendChild(draggableItem);
        draggableItemParent.style.border = ''
        // draggableItem = null;
        // draggableItemParent = null
        element.style.transform = 'scale(1)';
        element.style.border = '2px dashed #80c627';
        
    })
})

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