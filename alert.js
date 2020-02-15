function pop(){
    let x = document.querySelector(".alert").style.display = "block";
    window.onload = x;
    let close = document.querySelector(".close");
    close.addEventListener("click", ()=>{
        document.querySelector(".alert").style.display = "none";
    })
}
pop();