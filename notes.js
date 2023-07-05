console.log('js logic')
showNotes();
let b1=document.getElementById('b1')
// let b2=document.getElementById('b2')

let ta=document.getElementById('texta')
var tia=document.getElementById('titlesa')
// let div=document.createElement('div')
// let x1=document.createElement('h3')
// let x2=document.createElement('p')
b1.addEventListener('click',function (e) {
    console.log('clicked')
    let notes=localStorage.getItem('notes')
    let titles=localStorage.getItem('titles')
    if(titles== null){
        titleso=[]
    }
    else{
        titleso=JSON.parse(titles)
    }
    if(notes== null){
        noteso=[]
    }
    else{
        noteso=JSON.parse(notes)
    }
    noteso.push(ta.value);
    titleso.push(tia.value);
    ta.value=''
    tia.value=''
    localStorage.setItem('notes',JSON.stringify(noteso))
    localStorage.setItem('titles',JSON.stringify(titleso))
    showNotes();
})
function showNotes() {
    let notes=localStorage.getItem('notes')
    let titles=localStorage.getItem('titles')
    if(notes== null){
        noteso=[]
        titleso=[]
    }
    else{
        noteso=JSON.parse(notes)
        tiltleso=JSON.parse(titles)
    }
    console.log(notes)
    console.log(titles)
    let html="";
    noteso.forEach(function (element,index) {
        
        html += `
        <div id="${index}" ondblclick="favourite(this.id)" class="d1">
        <h3 class='titls' id='titl'>${tiltleso[index]}</h3>
        <p class="not" style="margin:7px 0px">${element}</p>
        <button  id="${index}" onclick="deleteNode(this.id)" class="button">Delete Node</button>
        </div>`   
    });
    let s2=document.getElementById('s2')
    s2.innerHTML=html 
}
function deleteNode(index) {
    let notes=localStorage.getItem('notes')
    let titles=localStorage.getItem('titles')
    if(titles== null){
        titleso=[]
    }
    else{
        titleso=JSON.parse(titles)
    }
    if(notes== null){
        noteso=[]
    }
    else{
        noteso=JSON.parse(notes)
    }
    noteso.splice(index,1)
    titleso.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(noteso))
    localStorage.setItem('titles',JSON.stringify(titleso))
    showNotes();
}
let search=document.getElementById('search')
search.addEventListener('input',function(e){
 let avails=document.getElementsByClassName('titls')
 let searchtext=search.value
 console.log(avails)
 Array.from(avails).forEach(function (element) {
    let text=element.innerText
    if(text.includes(searchtext)){
        console.log(text)
        console.log(element.parentNode)
        element.parentNode.style.display='block'
    }
    else{
        element.parentNode.style.display='none'
    }
 })
})
function favourite(index) {
    let notes=localStorage.getItem('notes')
    let titles=localStorage.getItem('titles')
    let favsn=localStorage.getItem('favsn')
    let favst=localStorage.getItem('favst')
    if(titles== null){
        titleso=[]
    }
    else{
        titleso=JSON.parse(titles)
    }
    if(notes== null){
        noteso=[]
    }
    else{
        noteso=JSON.parse(notes)
    }
    if(favsn== null){
        favsno=[]
    }
    else{
        favsno=JSON.parse(favsn)
    }
    if(favst== null){
        favsto=[]
    }
    else{
        favsto=JSON.parse(favst)
    }
    console.log('double clicked')
    favsno.push(noteso[index])
    favsto.push(titleso[index])
    localStorage.setItem('favsn',JSON.stringify(favsno))
    localStorage.setItem('favst',JSON.stringify(favsto))
    console.log(favsno)
    console.log(favsto)
}