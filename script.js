let winBtn=document.getElementById('win-icon')
let taskItem=document.getElementById('task-items')
let bg=document.getElementById('back')
bg.addEventListener("click",hide())
winBtn.addEventListener("click",show())
winBtn.addEventListener("dblclick",hide())
function show(){
    taskItem.style.visibility="visible"
}
function hide(){
taskItem.style.visibility="hidden"
}
let file=document.getElementById('file')
file=file.style.visibility="hidden"
let fileIcon=document.getElementById('file-manager')
fileIcon.addEventListener("click",show2())
function show2(){
    file=file.style.visibility="visible"
}