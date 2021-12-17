(function () {
    let navs = document.querySelector('.head').querySelector('nav').querySelectorAll('a')
    navs.forEach(function(item, i, navs){
        var text = '/' 
        if (item.href == document.location.pathname){
            const c = item.classList;
            c.toggle('active');
        } 
    }); 
})();


