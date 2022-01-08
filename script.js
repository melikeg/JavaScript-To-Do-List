
let taskDOM = document.querySelector('#task')
let liveToastBtnDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector('#list')

liveToastBtnDOM.addEventListener("click", newElement)

//Bütün li etiketli elemanlara çarpı butonu oluşturma
let allLiDOM = document.getElementsByTagName('li')
for ( let index=0 ; index<allLiDOM.length ; index++){
    let closeBtn = document.createElement("span")
    closeBtn.innerHTML = "X"
    closeBtn.classList.add("close")
    closeBtn.onclick = removeElement
    allLiDOM[index].append(closeBtn)
    allLiDOM[index].onclick = checkElement
}


// listeye eleman ekleme
function newElement(){
    if(taskDOM.value == ""){
        $(".error").toast("show")
    }else{
        $(".success").toast("show")
        const liDOM = document.createElement('li')
        liDOM.innerHTML = taskDOM.value
        listDOM.appendChild(liDOM)
        taskDOM.value = ""

        liDOM.onclick = checkElement
        let closeBtn = document.createElement("span")
        closeBtn.innerHTML = "X"
        closeBtn.classList.add("close")
        closeBtn.onclick = removeElement
        liDOM.append(closeBtn)
        listDOM.append(liDOM)
        taskDOM.value = ("")

        
    }
}


//listeden eleman silme
function removeElement(){
    this.parentElement.remove()
}


//listedeki elemanları yapıldı işaretleme
function checkElement(){
    this.classList.toggle("checked")
}