AOS.init();


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',e=>{
console.log(e)
    cursor.setAttribute("style",`top:${e.pageY - 10}px; left:${e.pageX - 10}px` )
}
)

var trigger= document.getElementById('menu-trigger');
var sidenav= document.querySelector('.sidenav')

trigger.addEventListener('click',(e)=>{
sidenav.setAttribute('style','left:0 !important;')
})
var close= document.getElementById('close');

close.addEventListener('click',(e)=>{
    sidenav.setAttribute('style','left:-75vw !important;')
    })
    