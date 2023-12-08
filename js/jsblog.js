
/*----------------------LLAMAR A NAVBAR-----------------------*/
fetch('../pages/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

/*----------------------LLAMAR A FOOTER-----------------------*/
fetch('../pages/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

/*----------------------LLAMAR A INDEXBLOG-----------------------*/
fetch('../pages/indexblog.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('indexblog').innerHTML = data;
    });    
$(document).ready(function(){
    var navbar = $('#navbar');
    var sticky = navbar.offset().top;

    $(window).scroll(function(){
        if (window.pageYOffset >= sticky){
            navbar.addClass("sticky")
        } else {
            navbar.removeClass("sticky");
        }
    });
});