const signin=()=>{
location.href="select.html";
}

const user=()=>{
let id=localStorage.getItem("temp");
document.getElementById("id1").value=id;
}
function start(terms){
    if(terms.checked){
        document.getElementById("submit").disabled = false;

    }
else{
        document.getElementById("submit").disabled = true;
    }
}

