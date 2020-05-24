import jQuery from "jquery";
var $ = jQuery;

var selectSingle = document.querySelector('.selected');
var selectSingle_title = selectSingle.querySelector('.selected--title');
var selectSingle_labels = selectSingle.querySelectorAll('.selected--label');

selectSingle_title.addEventListener('click', function()  {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', function(evt) {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

jQuery(function() {
  // jQuery("body").css("color", "blue");
    $(".menu--control").click(function () {
        if ($(this).hasClass("menu--control-active")) {
            $(this).removeClass("menu--control-active");
            $(".header").removeClass("menu-active");
            $(".menu").css("maxHeight", "0")
        } else {
            $(this).addClass("menu--control-active");
            $(".header").addClass("menu-active");
            $(".menu").css("maxHeight", "500px")
        }
    });
});
