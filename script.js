// 1)-Get ELEMEMENT BY ID
// const heading=document.getElementById('heading');
// console.log(heading);
//2)-Get ELEMENT BY TAGNAME
// const heading=document.getElementByTagName('h1');
// console.log(heading);
// 3) Get ELEMENT BY CLASS NAME
// const heading=document.getElementsByClassName('heading');
// console.log(heading);
// 4)QUERY SELECTION
// const heading=document.querySelector('heading');
// const heading=document.querySelector('.heading');//FOR CLASS METHOD
// console.log(heading);

// TRAVERSE DOM
// 1) PARENT NODE
// const heading=document.querySelector('heading');
// const parent=heading.parentNode;
// console.log(parent);

// 2) CHILDREN NODE

// const parent=document.querySelector('parent');
// console.log(parent.childNodes);

// 3) nextElementSibling
// const heading=document.querySelector('parent');
// console.log(heading.nextElementSibling);

// 4) prevElementSibling
// const subheading=document.querySelector('parent');
// console.log(subheading.prevElementSibling);


// MANIPULATION
// const heading=document.querySelector('.heading');
// heading.innerHTML='WEB DEV IS AWESOOME';
// heading.style.color='red';
// heading.style.fontsize='180px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// CREATE ELEMENTS
// const heading=document.createElement('h1');
// heading.innerHTML='Javascript is Aweseome';
// const parent=document.querySelector('.parent');
// parent.appendChild(heading);//-->PUTS IN LAST ELEMENT WHILE APPEND

//IF NOT APPEND AND PUT ELEMNT BEFORE THAN
//heading.insertAdjacentElement('beforebegin',subHeading);

// console.log(heading);


// DOM EVENTS
// const button=document.querySelector('#btn');
// const heading=document.querySelector('#heading');
// button.addEventListener('click',function(event){
    // heading.style.color="purple ";
    // heading.style.fontsize='60px';
//     console.log('button clicked',event);
// });

