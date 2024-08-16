var navbarItems = `
    <div class="title">
        <div class="header">
            <h3>Alex Williams</h3>
            <h2>Portfolio Website</h2>
        </div>
        <div class="topnav">
            <a href="index.html" class="nav" id="nav1">About</a>
            <a class="nav" id="nav2">Released Games</a>
            <a class="nav"  id="nav3">Game Jams</a>
            <a href="animationShowreel.html"  class="nav" id="nav4">Animation Showreel</a>
            <a href="photoshop.html" class="nav" id="nav5"> Photoshop</a>
            <a class="nav" id="nav6">Experimental / Tutorial Projects</a>
        </div>
    </div>  
    `
document.getElementById("navbar-container").innerHTML = navbarItems;


const navItems = document.querySelectorAll('.nav');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
        Array.from(navItems, navItem => {
            removeCurrent(navItem);
        });

        setCurrent(navItems[i]);


        sessionStorage.setItem('current', navItems[i].id);
    });
}

const currentItem = document.getElementById(sessionStorage.getItem('current'));

if (currentItem == null) {
    setCurrent(document.getElementById("nav1"));
} else {
    setCurrent(currentItem);
}

function setCurrent(currentItem) {
    currentItem.classList.add('current');
    currentItem.classList.add('disableClick')
}

function removeCurrent(currentItem) {
    currentItem.classList.remove('current');
    currentItem.classList.remove('disableClick')
}
