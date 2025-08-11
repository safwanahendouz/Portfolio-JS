const home = document.querySelector('li')
home.classList.add('li-active')
home.children[0].classList.add('line-active')
console.log(home)


// Function switch nav bar
function switchNav(num) {

    const lists = document.querySelectorAll('li');
    console.log(lists)
    
    lists.forEach((list)=>{
        list.classList.remove('li-active')
        list.children[0].classList.remove('line-active')
    })
       
        

    lists[num].classList.add('li-active')
    lists[num].children[0].classList.add('line-active')

    console.log(lists[num])

}

// Go to link

function goTolink(mylink) {
    window.open(`https://${mylink}`)
}