window.addEventListener('scroll',function(){
  let header2=document.querySelector('header2');
  header2.classList.toggle("sticky",window.scrollY>0 );
  
})
window.addEventListener('scroll',function(){
  let menu=document.querySelector('menu');
  menu.classList.toggle("sticky1",window.scrollY>690 )
})
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtnrm");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Coi thêm";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Rút gọn";
      moreText.style.display = "inline";
    }
}
var menuitems=document.getElementById("menuitems");
menuitems.style.maxHeight="0px"
function menutoggle(){
  if(menuitems.style.maxHeight=="0px"){
    menuitems.style.maxHeight="300px";
  }else{
    menuitems.style.maxHeight="0px";
  }
}
