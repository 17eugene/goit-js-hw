const fontControl = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

const fontChanger = function () {
    text.style.fontSize = fontControl.value + 'px'
}

fontControl.addEventListener('input', fontChanger)


