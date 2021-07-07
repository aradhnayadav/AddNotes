// if user add a note add it to a local storeage
shownotes(); 

let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
let addtxt=document.getElementById('addtxt')
let notes=localStorage.getItem('notes')
if(notes==null){
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes)//parse is to take as an string and return an object i.e arrays
}
notesobj.push(addtxt.value);
localStorage.setItem("notes",JSON.stringify(notesobj));//to store the vaue or note permanently in LC in string format to stringify
addtxt.value="";//to blank after adding the note

console.log(notesobj);
shownotes();
})
// function to show added notes
function shownotes() {
    let notes=localStorage.getItem('notes')
    
if(notes==null){
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes)//parse is to take as an string and return an object i.e arrays
}
let html="";
notesobj.forEach(function(element,index){
    html+= `<div class="notecard my-2 mx-3 card" style="width: 18rem;">
        
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div>`
    
});
let notesele=document.getElementById('notes')
if(notesobj.length!=0){
    notesele.innerHTML=html;
}
 else{
     notesele.innerHTML= `Sorry! No notes are available to show`
    }   
}

// function to delete a note
function deletenote(index){
    console.log('i m deleting',index);
    let notes=localStorage.getItem('notes');
    
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)//parse is to take as an string and return an object i.e arrays
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));  //updating local storage
    shownotes();
}
let search=document.getElementById("searchtxt")
search.addEventListener("input",function(){
let inputval=search.value.toLowerCase();
console.log('fires',inputval)
let notecards=document.getElementsByClassName("notecard");
Array.from(notecards).forEach(function(element){
    let cardtxt=element.getElementsByTagName('p')[0].innerText;
    console.log(cardtxt)
    if(cardtxt.includes(inputval)){
        element.style.display='block';
    }
    else{
        element.style.display='none';
    }
    // console.log(cardtxt);
})


})