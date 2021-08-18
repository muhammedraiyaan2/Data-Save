let post=document.getElementById('postbtn')
let get=document.getElementById('getbtn')
let DataName=document.getElementById('DataName')
let DataValue=document.getElementById('DataValue')
let DataGet=document.getElementById('DataGet')
let output=document.getElementById('output')
let output2=document.getElementById('output2')
let remove=document.getElementById('rembtn')
let DataRem=document.getElementById('DataRem')
let remall=document.getElementById('remall')
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
remove.addEventListener("click",function(){
    localStorage.removeItem(DataRem)
    DataRem.value=""
})
remall.addEventListener("click",function(){
    localStorage.clear()
})
