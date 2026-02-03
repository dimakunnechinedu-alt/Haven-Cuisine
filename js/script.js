let burgers = document.querySelector('#burgerimage');
burgers.addEventListener('click',function(){
    dropdown.style.display ='flex';
})

let existicon = document.querySelector('#existicon');
existicon.addEventListener('click', function(){
  dropdown.style.display = 'none';
})


let allAchorTAGs = document.querySelectorAll('.nav_li');
  allAchorTAGs.forEach(allAchorTAG =>{
    allAchorTAG.addEventListener('click',function(){
        dropdown.style.display = 'none';
    })
  })