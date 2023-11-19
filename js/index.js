let myLayer =document.querySelector('.myLayer');
let allImages=Array.from(document.querySelectorAll('img'));
let rightArrow=document.querySelector('.fa-arrow-right');
let leftArrow=document.querySelector('.fa-arrow-left');
let clossIcon=document.querySelector('.fa-xmark');

let currentIndex;
let innerDiv;
for(let i=0;i<allImages.length;i++){
    allImages[i].addEventListener("click",function(e){
    myLayer.classList.remove('d-none');
    let currentImageSrc=e.target.getAttribute("src");
    currentIndex=allImages.indexOf(e.target);
    // console.log(allImages.indexOf(e.target));
    innerDiv=document.querySelector('.innerDiv');
    innerDiv.style.backgroundImage=`url('${currentImageSrc}')`;
    })
}

function getNext(){
    currentIndex++;//next Element index
    if(currentIndex == allImages.length){
      currentIndex =0
    }
    let nextImageSrc=allImages[currentIndex].getAttribute("src");//get to the next src;
    innerDiv.style.backgroundImage=`url('${nextImageSrc}')`
}

function getprev(){ //prev Element
    currentIndex--;
    if(currentIndex == -1){
        currentIndex =allImages.length -1
      }
    let nextImageSrc=allImages[currentIndex].getAttribute("src");//get to the next src;
    innerDiv.style.backgroundImage=`url('${nextImageSrc}')`
}

function hideDiv(){
    myLayer.classList.add('d-none')
}

rightArrow.addEventListener("click",getNext);
leftArrow.addEventListener("click",getprev);
clossIcon.addEventListener("click",hideDiv);
