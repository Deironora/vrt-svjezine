
document.getElementById('hamburger').onclick=()=>{
document.getElementById('nav').classList.toggle('active');
};
const reveals=document.querySelectorAll('.reveal');
function run(){
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add('active');
}
});
}
window.addEventListener('scroll',run);
run();
