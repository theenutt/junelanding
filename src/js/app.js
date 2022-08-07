import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();



$(document).ready(function() {
    $('.faq__question').click(function(){
        if($('.faq__spoilers').hasClass('one')){
            $('.faq__question').not($(this)).removeClass('active');
            $('.faq__answer').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);

    });
});