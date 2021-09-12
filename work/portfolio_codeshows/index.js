window.addEventListener("scroll",function(event){
  var scroll=this.scrollY;
  console.log("scroll value: ",scroll);

  if(scroll>=0 && scroll<400){
    var c=document.querySelectorAll(".demo2").length;

    for(var i=0;i<c;i++){
       var s1=document.querySelectorAll(".demo2")[i].style.display="none";
    }
    // var s1=document.querySelector(".demo2");
    // s1.classList.add("visibleOff");
    //document.getElementById("features").style.display="none";


  }
  else if(scroll<1300 && scroll>=400){
    // var s1=document.querySelector("#features");
    // s1.classList.remove("visibleOff");
    var d=document.querySelectorAll(".demo2").length;

    for(var i=0;i<d;i++){
       var s1=document.querySelectorAll(".demo2")[i].style.display="block";
    }
    var c=document.querySelectorAll(".demo").length;
    for(var i=0;i<c;i++){
      var s2=document.querySelectorAll(".demo")[i].style.visibility="hidden";

    }


  // document.getElementById("features").style.display="block";
  // document.getElementById("Project").style.display="none";


  }
else if(scroll>=1300){
  var c=document.querySelectorAll(".demo").length;
  for(var i=0;i<c;i++){
    var s2=document.querySelectorAll(".demo")[i].style.visibility="visible";

  }
  //document.getElementById("Project").style.display="block";
}
});
