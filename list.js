var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form Submit event

form.addEventListener('submit',addItem);

//Add item
function addItem(e){
  e.preventDefault();//to prevent the dafault submision of the form
  //get input value
  var newItem=document.getElementById('item').value;

  //create li element
  var li=document.createElement('li');
  //add class
  li.className='list-group-item';
  //add text node with input value

  li.appendChild(document.createTextNode(newItem));

  //create del buttin
  var deleteBtn =document.createElement('button')
 //add classes to del button
 deleteBtn.className='btn btn-danger btn-sm float-right delete';

 //append text node
 deleteBtn.appendChild(document.createTextNode('X'));

 //append button to li
 li.appendChild(deleteBtn);

 //append li to list
itemList.appendChild(li);

}