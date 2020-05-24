import jQuery from "jquery";
import popper from "popper.js";
// import fontAw from  "@fortawesome/fontawesome-free/js/all.js"
var $ = jQuery;

const selectSingle = document.querySelector('.selected');
const selectSingle_title = selectSingle.querySelector('.selected--title');
const selectSingle_labels = selectSingle.querySelectorAll('.selected--label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
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
    })
});
