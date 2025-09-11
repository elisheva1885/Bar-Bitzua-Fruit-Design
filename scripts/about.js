const readMoreBtn = ()=> {
     let moreText=document.getElementById('moreTextDiv');
     moreText.style.display =  moreText.style.display==="none" ? "block" : "none";
     let moreBtn = document.getElementById('moreBtn');
        moreBtn.innerText = moreBtn.innerText==="Read More" ? "Read Less" : "Read More";
}
