// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
$('#menu-about').on('click', function(event) {
    event.preventDefault()
    $("html, body").animate({
        scrollTop: $('#about').offset().top
    }, 700);
});
$('#menu-contact').on('click', function(event) {
    event.preventDefault()
    $("html, body").animate({
        scrollTop: $('#contact').offset().top
    }, 700);
});
$('#menu-charge').on('click', function(event) {
    event.preventDefault()
    $("html, body").animate({
        scrollTop: $('#charge').offset().top
    }, 700);
});

// faq

(function($) {

    var list = $('.list');

    // skryjeme elementy
    list.find('dd').slideUp();

    // zobrazime dd po kliknuti na term
    list.find('dt').on('click', function(event)
    {
        $(this).next().slideToggle()
            .siblings('dd').slideUp();

        event.preventDefault();
    });

    // nechceme ist
    $('a.nope').on('click', function(event) {
        alert('NIE, RADSEJ ALERT!');
        event.preventDefault();
    });

})(jQuery);