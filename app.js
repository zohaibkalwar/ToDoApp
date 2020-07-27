var list = document.getElementById("list");



function addtodo(){
    var todoitem = document.getElementById("todo-item");
    var li = document.createElement("li")
    var litext = document.createTextNode(todoitem.value)
    li.appendChild(litext)
    li.setAttribute('class','litxt')
    

    var deletebtn = document.createElement("button");
    var deletetxt = document.createTextNode("Delete");
    li.appendChild(deletebtn)
    deletebtn.appendChild(deletetxt)
    deletebtn.setAttribute('class','inputbtn');
    deletebtn.setAttribute('onclick','deleteItem(this)');


    var editbtn = document.createElement('button');
    var edittxt = document.createTextNode('Edit') ;
    editbtn.appendChild(edittxt)
    editbtn.setAttribute('class','inputbtn');
    editbtn.setAttribute('onclick','editItem(this)')

    li.appendChild(editbtn)   

    list.appendChild(li)
    todoitem.value = "";
    console.log(li)
}





function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = prompt("Enter Next Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}