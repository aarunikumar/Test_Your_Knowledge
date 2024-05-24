const login=()=>{
    let usrid=document.getElementById("id1").value;
    let usrpass=document.getElementById("pass1").value;
    let p=localStorage.getItem(usrid);
    if(p==usrpass){
        localStorage.setItem("temp",usrid);
            location.href="instruction.html";
     }
        else {alert("wrong userid or password ")}

}
const signup=()=>{
    let usrid=document.getElementById("id1").value;
    let usrpass=document.getElementById("pass1").value;
    let usrcpass=document.getElementById("cpass1").value;
    if(usrpass==usrcpass){
        localStorage.setItem(usrid,usrpass);
        alert("Congratulation!... You had successfully signup");
    }
    else{
        alert("Password and confirm password does not match");
    }
}



