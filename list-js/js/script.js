document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const arrow = document.querySelectorAll('.arrow');

    arrow.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('display-none');
         item.classList.toggle('arrow-down');
        });
    });
});

