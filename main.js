/* ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES 
//Single Element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));
//multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('Item'));
//console.log(document.getElementsByTagName('li'));
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElement.textontent = 'Hello';
//ul.lastElementChild.innerHTML  = '<h1>Hello</h1>';
//const btn =document.querySelector('.btn');
//btn.style.background = red
//btn.addEventListener('click, (e) => {
    //e.preventDefault();
//console.log(e.target.id);
//})

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
e.preventDefault();

if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields''

    setTimeout(() => msg.remove(), 3000);
    alert('Please enter fields');
} else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`$
    {nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    //clear fields

    nameInput.value - '';
    emailInput.value = '';
}
}



Video by Brad Traversy
JavaScript Crash Course For Beginners
https://youtu.be/hdI2bqOjy3c?t=4228 

Start at 1:10:29
 */
