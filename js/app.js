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
    console.log('dratg', draggableElement)

    const dropzone = event.target;
    console.log('dropzoen', dropzone)
    let child = dropzone.lastElementChild;
    console.log('child', child)
    if (child && child.nodeName !== 'P') {
        alert('An Ingredient is already present here');
        return
    }
    if (!child) {
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData()
        return
    }
    if (child.nodeName === 'P') {
        dropzone.removeChild(child)
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData()
    }
}