var done = false;

const images = [
    'src/galaxy.jpg',
    'src/atom.png',
    'src/mountain.jpg',
    'src/valley.jpg',
    'src/meadow.jpg',
    'src/island.jpg',
    'src/clouds.jpg',
    'src/stars.jpg',
    'src/ocean.jpg',
    'src/river.jpg',
    'src/bridge.jpg',
    'src/bridge2.jpg',
    'src/seven.jpg',
    'src/seven.jpg'
];

const preloadedImages = [];

function preloadImages() {
    images.forEach((imageSrc, index) => {
        const img = new Image();
        img.src = imageSrc;
        preloadedImages[index] = img;
    });
}

const texts = [
    {
        content: `Mi se dugo znamo<br>Dobro poznajemo<br>Puno poštujemo<br>Neopisivo volimo`,
        color: 'white'
    },
    {
        content: `Izgradili smo to što imamo zajedno`,
        color: '#c72525'
    },
    {
        content: `Namestili planine`,
        color: '#20ff00'
    },
    {
        content: `Namestili doline`,
        color: 'white'
    },
    {
        content: `Namestili livade`,
        color: 'white'
    },
    {
        content: `Namestili ostrva`,
        color: '#000000'
    },
    {
        content: `Namestili oblake`,
        color: 'white'
    },
    {
        content: `Namestili zvezde`,
        color: 'white'
    },
    {
        content: `Namestili okeane`,
        color: '#20ff00'
    },
    {
        content: `Namestili reke`,
        color: '#00fff1'
    },
    {
        content: `Namestili mostove`,
        color: 'white'
    },
    {
        content: `Neki bili rušeni<br>Neki bili privremeni<br>Neki široki<br>Neki mali<br>Jedan gradili po pola svako<br>Al ni jedan nezavršen`,
        color: '#00fff1'
    },
    {
        content: `Gradili smo sedam<br>Gradićemo još sedam miliona`,
        color: '#000000'
    },
    {
        content: `Srećna nam 5+9<br>i svakom po pola<br>godišnjica`,
        color: '#000000'
    }
];

let currentImageIndex = 0;

function changeContentAndImage() {
    const currentImageElement = document.getElementById('current-image');
    const nextImageElement = document.getElementById('next-image');
    const textElement = document.getElementById('text-overlay');

    textElement.classList.add('hide-text');
    textElement.classList.remove('show-text');

    nextImageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;

    if(currentImageIndex != images.length -1) {
        currentImageElement.style.opacity = 0;
        setTimeout(() => {
            nextImageElement.style.opacity = 1;
        }, 100);
    }

    const newText = texts[currentImageIndex];
    if(!done) {
        textElement.innerHTML = newText.content;
    } else {
        textElement.innerHTML = "";
    }
    textElement.style.color = newText.color;

    setTimeout(() => {
        const temp = currentImageElement.id;
        currentImageElement.id = nextImageElement.id;
        nextImageElement.id = temp;

        textElement.classList.remove('hide-text');
        textElement.classList.add('show-text');
        if(currentImageIndex == images.length - 1) {
            done = true;
        }
        currentImageIndex = (currentImageIndex + 1) % images.length;

    }, 500);
}

// Attach the function to a click event
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    document.querySelector('.image-container').addEventListener('click', changeContentAndImage);
});
