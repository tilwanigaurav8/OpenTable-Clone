let hgl=document.querySelectorAll('#limg');

function expand(event){
    let i=event.target;
    i.style.transition:transform 0.5s ease-out 1s;
}

hgl.addEventListener('click',expand);



/* #xyz:hover{
    transform:scale(1.1);*/

/* #xyz:hover{
    transform:rotate(180deg);*/

/* #xyz{
    transition:transform 0.5s ease-out 1s;*/
