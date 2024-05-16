const li = document.querySelectorAll('.icon-menu');
const btnExpand = document.querySelector('#expand');
const navBar = document.querySelector('.nav-side');

function selectLink () {
    li.forEach((item)=>
        item.classList.remove('active')
    )
    this.classList.add('active');
    navBar.classList.remove('expand')
}

li.forEach((item)=>
    item.addEventListener('click', selectLink)
)



btnExpand.addEventListener('click', function(e){
    navBar.classList.toggle('expand');
    

})