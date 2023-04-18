function generateNav() {
    // get the nav element
    var nav = document.getElementsByClassName('nav');
    // get the nav items
    var navItems = {% set navPages = collections.all | eleventyNavigation %}{{ navPages | dump | safe }};
    // create list element in nav
    var navList = document.createElement('ul');
    // add class to list element
    navList.classList.add('nav__list');
    // append list element to nav
    nav[0].appendChild(navList);
    // loop through the nav items
    for (var i = 0; i < navItems.length; i++) {
        // create list item element
        var navItem = document.createElement('li');
        // add class to list item element
        navItem.classList.add('nav__item');
        // create link element
        var navLink = document.createElement('a');
        // add class to link element
        navLink.classList.add('nav__link');
        // add href to link element
        navLink.setAttribute('href', navItems[i].url);
        // add text to link element
        navLink.innerHTML = navItems[i].title;
        // append link element to list item element
        navItem.appendChild(navLink);
        // append list item element to list element
        navList.appendChild(navItem);
    }

}