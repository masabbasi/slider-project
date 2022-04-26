const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderImage = document.querySelector('.slider-image');
const sliderLink = document.querySelector('.slider-link');
const sliderTitle = document.querySelector('.slider-title');
let imageIndex = 0;
let allImage = [
    {
        imagePath:'images/1.png',
        imageLink:'https://1.com',
        imageTitle:'Image 01'
    },
    {
        imagePath:'images/2.png',
        imageLink:'https://2.com',
        imageTitle:'Image 02'
    },
    {
        imagePath:'images/3.png',
        imageLink:'https://3.com',
        imageTitle:'Image 03'
    },
    {
        imagePath:'images/4.png',
        imageLink:'https://4.com',
        imageTitle:'Image 04'
    }
]
prev.addEventListener('click',prevImage)
next.addEventListener('click',nextImage)

function prevImage () {
    imageIndex--
    if (imageIndex<0) {
        imageIndex = allImage.length
    }
    sliderImage.src=allImage[imageIndex].imagePath;
    sliderLink.href=allImage[imageIndex].imageLink;
    sliderTitle.innerHTML=allImage[imageIndex].imageTitle;
}

function nextImage () {
    imageIndex++
    if (imageIndex>allImage.length-1) {
        imageIndex = 0;
    }
    sliderImage.src=allImage[imageIndex].imagePath;
    sliderLink.href=allImage[imageIndex].imageLink;
    sliderTitle.innerHTML=allImage[imageIndex].imageTitle;
}
setInterval(nextImage,3000)