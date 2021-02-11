let txtCat=document.getElementById("txtCat"),
    combo=document.getElementById("cat");

function ajouterCat(){
    option=document.createElement("option");
    option.text=txtCat.value;
    option.id=txtCat.value;
    combo.add(option);
}

let option=document.getElementById(txtCat.value);
function supprimerCat(){
    
    if(option==null){
        alert("Catégorie introuvable");
    }
    else{
        option.remove();
        alert("Catégorie supprimé");
    }
}

function afficherCat(){
    let s=combo.options[combo.selectedIndex].text;
    txtCat.value=s;
}

let taches=document.querySelector(".taches"),
    txt2=document.getElementById("txtL2");
let i=0
function ajouterTache(){
    let div=document.createElement("div");
    div.className="divL3";
    div.id="d" + i;
    div.innerHTML=`<input type="text" id="t${i}" disabled value="${txt2.value}" class="txtL3">
                    <div class="divBTN"><input type="button" id="${i}" value="Edit" onclick="edit(this.id)">
                    <input type="button"  id="${i}" value="Remove" onclick="supprimer(this.id)"></div>
                    <div class="divCHECK">
                    <input type="checkbox" name="cb" value="a${i}" checked onclick="isChecked(this.value)">
                    <input type="checkbox" name="cb" value="b${i}" onclick="isChecked(this.value)">`;
    taches.appendChild(div);
    i++;
}

function supprimerTaches(){
    taches.innerHTML="";
}

let check=document.getElementsByName("cb");
function isChecked(v){
    for(i=0;i<check.length;i++){
        check[i].checked=false;
        if(check[i].value==v)check[i].checked=true;
    }
}

function supprimer(v){
    let div=document.getElementById("d"+v);
    div.parentNode.removeChild(div);
}

function edit(v){
    let t=document.getElementById("t"+v);
    t.disabled="";
    t.classList="edit";
}

function save(){
    var b=document.getElementsByTagName("body")[0];
    localStorage.setItem("controle2",b.innerHTML);
    console.log(b.innerHTML);
}

window.onload=function(){
    var b=window.document.getElementsByTagName("body")[0];
    var myStorage=localStorage.getItem("controle2");
    if(myStorage!=null){
        b.innerHTML=myStorage;
    }
}
