document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const inputSubmit= document.querySelector("input[type=submit");
 inputSubmit.addEventListener("click",(e)=>{
  e.preventDefault();
  let value=e.target.previousElementSibling.value;
  task(value);
  clearinput();
 })
 ;
});

function task(task){
  if(task.length!==0 && task!==" "){
    let li= document.createElement('li');
    li.innerHTML=task;
    let btn=document.createElement('button');
    btn.addEventListener("click",handleDelete)
    btn.style.marginLeft="16px";
    btn.style.fontSize="10px"
    btn.innerHTML='x'; 
    li.appendChild(btn);
    let ul=document.querySelector('#tasks');
    ul.style.listStyle="number";
    ul.appendChild(li);
  }else{
    return alert('Hi dummy,input field required');
  }

  }

  

function clearinput(){
 document.querySelector("#new-task-description").value=" ";
}
function handleDelete(e){
   return e.target.parentNode.remove();

}