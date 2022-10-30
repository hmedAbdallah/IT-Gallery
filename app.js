const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{observe.observe(el)});





const labels = document.querySelectorAll('label');




document.querySelector('.Submit').addEventListener('click', alert("thanks for rigestration! keep waiting for our e-mails"));
