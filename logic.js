let post=document.getElementById('postbtn')
let get=document.getElementById('getbtn')
let DataName=document.getElementById('DataName')
let DataValue=document.getElementById('DataValue')
let DataGet=document.getElementById('DataGet')
let output=document.getElementById('output')
let remove=document.getElementById('rembtn')
let DataRemove=document.getElementById('DataRemove')
let remall=document.getElementById('remall')
let dark=document.getElementById('dark')
let body=document.getElementById('body')
let nav=document.getElementById('nav')
let alert_show=document.getElementById('alert')
// let close=document.getElementById('close')
nav.style.background="#f8f9fa"
nav.style.color="#212529"
remove.addEventListener("click",function(){
    localStorage.removeItem(DataRemove.value)
    DataRemove.value=""
    alert_show.style.visibility="visible"
})
// close.addEventListener("click",function(){
//     alert_show.style.visibility="hidden"
// })
    setTimeout(() => {
        alert_show.style.visibility="hidden"
        }, 6000);
post.addEventListener("click",function(){
    //store
   localStorage.setItem(DataName.value,DataValue.value)
   DataName.value=""
   DataValue.value=""
})
get.addEventListener("click",function(){
    output.innerText=`${localStorage.getItem(DataGet.value)}`
    DataGet.value=""
})
remall.addEventListener("click",function(){
    let con=confirm("Are you sure you want to delete all of your data's")
    if(con==true){
        localStorage.clear()
    }
})
dark.addEventListener("click",function(){
    body.style.backgroundColor="#212529"
    body.style.color="#f8f9fa"
    nav.style.backgroundColor="#1c1c1c"
})
dark.addEventListener("dblclick",function(){
    body.style.color="#212529"
    body.style.backgroundColor="#fff"
    nav.style.backgroundColor="#f8f9fa"
})