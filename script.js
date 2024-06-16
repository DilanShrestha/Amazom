const books=document.getElementById("books");
const slideL=document.getElementById("slider-left");
slideL.addEventListener("click",function (){
  books.scrollBy(
    {
      left:-100,
      behavior: "smooth",     
    }
  )
}
);

const slideR=document.getElementById("slider-right");
slideR.addEventListener("click",function (){
books.scrollBy({
    left:100,
    behavior:"smooth"
  })
}
);







