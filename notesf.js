console.log('favourite notes')

function shownotes() {
    var html="";
    let favsn=localStorage.getItem('favsn')
    let favst=localStorage.getItem('favst')
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
    favsno.forEach(function (element,index) {
        html += `
        <div id="${index}" ondblclick="favourite(this.id)" class="d1">
        <h3 class='titls' id='titl'>${favsto[index]}</h3>
        <p class="not" style="margin:7px 0px">${element}</p>
        <button  id="${index}" onclick="deleteNode(this.id)" class="button">Delete Node</button>
        </div>`   
    });
    let s3=document.getElementById('s3')
    s3.innerHTML=html 
}
function deleteNode(index) {
    let favsn=localStorage.getItem('favsn')
    let favst=localStorage.getItem('favst')
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
    favsto.splice(index,1)
    favsno.splice(index,1)
    localStorage.setItem('favsn',JSON.stringify(favsno))
    localStorage.setItem('favst',JSON.stringify(favsto))
    shownotes();
}
shownotes();