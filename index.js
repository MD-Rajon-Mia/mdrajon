// Typing Script JS
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Gripces Designer",],
  typeSpeed: 80,
  backSpeed: 80,
});

var typed = new Typed(".typing1", {
  strings: ["Web Designer", "Gripces Designer",],
  typeSpeed: 80,
  backSpeed: 80,
});

var read = document.querySelector('#read-more-btn');
var text = document.querySelector('.text');

read.addEventListener('click', (e) => {
  text.classList.toggle('show-more');
  if(read.innerHTML === 'Lren More'){
    read.innerHTML = 'Read Less'
  }else{
    read.innerHTML = 'Lren More'
  }
});

var read1 = document.querySelector('#read-more-btn1');
var text1 = document.querySelector('.texto');

read1.addEventListener('click', (e) => {
  text1.classList.toggle('show-more1');
  if(read1.innerHTML === 'Lren More'){
    read1.innerHTML = 'Read Less'
  }else{
    read1.innerHTML = 'Lren More'
  }
});
var read2 = document.querySelector('#read-more-btn2');
var text2 = document.querySelector('.tex');

read2.addEventListener('click', (e) => {
  text2.classList.toggle('show-more1');
  if(read2.innerHTML === 'Lren More'){
    read2.innerHTML = 'Read Less'
  }else{
    read2.innerHTML = 'Lren More'
  }
});

//Frequently Asked Question

const faqs = document.querySelectorAll('.faq');
const icon = document.querySelector('.faq_icon i');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
});

const red = document.getElementById('red');

 function rere() {
  if(red.className === 'fa-solid fa-plus'){
    red.className = 'fa-solid fa-minus'
  }
  else{
    red.className = 'fa-solid fa-plus'
  }
}
const red1 = document.getElementById('red1');
function rere1() {
  if(red1.className === 'fa-solid fa-plus'){
    red1.className = 'fa-solid fa-minus'
  }
  else{
    red1.className = 'fa-solid fa-plus'
  }
}
const red2 = document.getElementById('red2');
function rere2() {
  if(red2.className === 'fa-solid fa-plus'){
    red2.className = 'fa-solid fa-minus'
  }
  else{
    red2.className = 'fa-solid fa-plus'
  }
}
const red3 = document.getElementById('red3');
function rere3() {
  if(red3.className === 'fa-solid fa-plus'){
    red3.className = 'fa-solid fa-minus'
  }
  else{
    red3.className = 'fa-solid fa-plus'
  }
}
const red4 = document.getElementById('red4');
function rere4() {
  if(red4.className === 'fa-solid fa-plus'){
    red4.className = 'fa-solid fa-minus'
  }
  else{
    red4.className = 'fa-solid fa-plus'
  }
}
const red5 = document.getElementById('red5');
function rere5() {
  if(red5.className === 'fa-solid fa-plus'){
    red5.className = 'fa-solid fa-minus'
  }
  else{
    red5.className = 'fa-solid fa-plus'
  }
}
const red6 = document.getElementById('red6');
function rere6() {
  if(red6.className === 'fa-solid fa-plus'){
    red6.className = 'fa-solid fa-minus'
  }
  else{
    red6.className = 'fa-solid fa-plus'
  }
}
const red7 = document.getElementById('red7');
function rere7() {
  if(red7.className === 'fa-solid fa-plus'){
    red7.className = 'fa-solid fa-minus'
  }
  else{
    red7.className = 'fa-solid fa-plus'
  }
}
const red8 = document.getElementById('red8');
function rere8() {
  if(red8.className === 'fa-solid fa-plus'){
    red8.className = 'fa-solid fa-minus'
  }
  else{
    red8.className = 'fa-solid fa-plus'
  }
}
const red9 = document.getElementById('red9');
function rere9() {
  if(red9.className === 'fa-solid fa-plus'){
    red9.className = 'fa-solid fa-minus'
  }
  else{
    red9.className = 'fa-solid fa-plus'
  }
}

