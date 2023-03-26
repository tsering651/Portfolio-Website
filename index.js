console.log("HI")
document.querySelector(".cross").style.display='none';
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".navbar").classList.toggle("navBarGo");
    if(document.querySelector(".navbar").classList.contains("navBarGo")){
        document.querySelector(".ham").style.display='inline';
        document.querySelector(".cross").style.display='none';
    }
    else{
        document.querySelector(".ham").style.display='none';
        setTimeout(()=>{
            document.querySelector(".cross").style.display='inline';
        },350);
       
    }

})