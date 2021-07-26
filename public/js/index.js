console.log("hello javascript");
let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let mainImg = document.querySelector(".main-img");




const imageSlider = document.querySelector(".image-slider-wrap");
const sliderWrap = document.querySelector(".slider-wrap");
const bottomIconBox = document.querySelector(".icon-box");
const bottomIconbackground = document.querySelector(".main-quick");
const icon = document.querySelector(".icon-main-float");
const text = document.querySelector(".main-quick-text");

const page = document.querySelector(".main");
let pressed = false;
let startx;
let x;

// 스크롤
let count = 0;
let prevState = 0;
let pagemargin = 0;
document.addEventListener("wheel", function (e) {
    let scrolly = e.deltaY;
    if (scrolly > 0) {
        console.log("스크롤 아래로");
        if (count < 2) {
            count++;
            pagemargin += mainImg.clientHeight - 134;
            page.style.marginTop = `-${pagemargin}px`;
        }


    } else {
        console.log("스크롤 위로");
        if (count > 0) {
            count--;
            pagemargin -= (mainImg.clientHeight - 134);
            page.style.marginTop = `-${pagemargin}px`;
        }

    }


});


bottomIconBox.addEventListener("mouseover", e => {
    bottomIconbackground.style.width = `300px`;
    icon.style.marginLeft = `70%`;
    text.style.display = `flex`
})

bottomIconBox.addEventListener("mouseout", e => {
    bottomIconbackground.style.width = `72px`;
    icon.style.marginLeft = `0%`;
    text.style.display = `none`
})
imageSlider.addEventListener("mousedown", e => {
    pressed = true
    startx = e.offsetX;
    imageSlider.style.cursor = "grabbing"
})
imageSlider.addEventListener("mouseenter", () => {

    imageSlider.style.cursor = "grab"
})

imageSlider.addEventListener("mouseup", () => {

    imageSlider.style.cursor = "grab"
})

window.addEventListener("mouseup", () => {
    pressed = false
})
imageSlider.addEventListener("mousemove", e => {
    if (!pressed) return
    e.preventDefault()
    x = e.offsetX

    sliderWrap.style.left = `${startx-x}px`

    checkboundary()
})


function checkboundary() {
    let outer = imageSlider.getBoundingClientRect()
    let inner = sliderWrap.getBoundingClientRect()
    // console.log(parseInt(sliderWrap.style.left));
    if (parseInt(sliderWrap.style.left) > 0) {
        sliderWrap.style.left = `-${imageSlider.clientWidth}px`

    } else {
        sliderWrap.style.left = "0px"
    }
}


rightIcon.onclick = function () {
    console.log("right");
    sliderWrap.style.marginLeft = `-${imageSlider.clientWidth}px`;

}

leftIcon.onclick = function () {
    console.log("left");
    sliderWrap.style.marginLeft = `0px`;

}