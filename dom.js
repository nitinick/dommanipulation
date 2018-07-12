//examine the document object
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//u can change the title
//document.title=123;
//not the text
//console.log(document.all);
//to get all forms
//console.log(document.forms);
//to get element 
//console.log(document.all[10]);
//console.log(document.links);

//GETELEMWNTBYID//



//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="hello";
//headerTitle.innerText='njke';
//headerTitle.innerHTML="<h3>Namskar</h3>"
//headerTitle.style.borderBottom='solid 3px black';
//header.style.borderBottom='solid 5px #345678';


//  GETELEMENTSBYCLASSNAME//

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);

// items[0].textContent="samosa";
// console.log(items[0]);
// items[1].style.fontWeight=500;
// items[2].style.backgroundColor='  #81d8d0';
// items[3].style.backgroundColor=' #B0DFE5';


// //gives error

// //items.style.backgroundColor='grey';


// //we have to do like this 
// for(var i=0;i<items.length;i++){
//   items[i].style.backgroundColor=' #0080FF';
// }


//  GETELEMENTBYTAGNAME//
// var li=document.getElementsByTagName('li');
// console.log(li);
// li[0].style.backgroundColor='black';
// li[0].style.color='white';

  //QUERYSELECTOR//
//can access any css property also
  // var header=document.querySelector('#main-header');

  // header.style.borderBottom='solid 7px red';


//  QUERYSLECTORALL//

// var titles=document.querySelectorAll('.title');

// console.log(titles);

//to access the child

// var odd =document.querySelectorAll('li:nth-child(odd)');
// console.log(odd);



    //traversing the DOM//

//var itemList=document.querySelector('#items');
//parent node,below line will provide the parent 
// console.log(itemList.parentNode);


//parent Elelment(same result)
//console.log(itemList.parentElement);


//childNodes(it also takes the text, do  not use it)

// console.log(itemList.childNodes);
//just the elements
// console.log(itemList.children);
// itemList.children[2].style.backgroundColor=' #FFD300';
// console.log(itemList.children);
// itemList.children[3].style.backgroundColor=' #FFC30B';
// console.log(itemList.children);
// itemList.children[0].style.backgroundColor=' #FDA50F';
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor=' #FFBF00';\

//firstChild

//firstElementChild

// console.log(itemList.firstElementChild);

//lastChild

//lastElementChild

// console.log(itemList.firstElementChild);


//nextSibling

//nextElementSibling

//previousSibling

//previousElementSibling

//createElement

//create DIV

// var newDiv=document.createElement('div');
// //add class
// newDiv.className='hello1';

// //add id
// newDiv.id='welcome';

// //new attr
// newDiv.setAttribute('title','hello Div');

// //create text node
// var newDivText=document.createTextNode('hello World');

// //add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');

// var h1=document.querySelector('header h1');



//  console.log(newDiv);
//  container.insertBefore(newDiv,h1);

/********event listener ************************/

//var button=document.getElementById('button').addEventListener('click',buttonClick); 

//function buttonClick(e){
  //console.log('buttton click');
  //alert('button click');

  //we can integrate the selectors

  // document.querySelector('#main').style.backgroundColor='#f4f466';
 // console.log(e);
  // console.log(e.target); //it gives the target element
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // console.log(e.type);
  // console.log(e.clientX);
  //console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.altKey);
  // console.log(e.ctrlKey);
 // console.log(e.shiftKey);
//}

//var button=document.getElementById('button');

//button.addEventListener('click',runEvent); 
//button.addEventListener('dblclick',runEvent); 
//button.addEventListener('mousedown',runEvent); 
//button.addEventListener('mouseup',runEvent); 
//var header=document.getElementById('box');
// header.addEventListener('mouseenter',runEvent);
// header.addEventListener('mouseleave',runEvent);
// header.addEventListener('mouseover',runEvent);//dealing  with inside the main element  like h1 inside div
//header.addEventListener('mouseout',runEvent);
// header.addEventListener('mousemove',runEvent)
// function runEvent(e){
//   console.log('event type:'+e.type);
//   document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}