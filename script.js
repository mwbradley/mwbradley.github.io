const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

rightBtn.addEventListener('click', () => {

    card2.classList.remove('slide-out-right');
    card2.classList.remove('slide-in-right');

    card1.classList.remove('slide-in-left');
    card1.classList.add('slide-out-left');

    card2.classList.remove('hidden');
    card2.classList.add('slide-in-right');
});

leftBtn.addEventListener('click', () => {

    card1.classList.remove('slide-out-left');
    card1.classList.remove('slide-in-left');

    card2.classList.add('slide-out-right');

    card1.classList.add('slide-in-left');
});

// if (card1.hasAttribute('slide-out-left')) {
//     leftBtn.addEventListener('click', () => {
//         card2.classList.remove('slide-out-right');
//         card2.classList.remove('slide-in-right');

//         card1.classList.remove('slide-in-left');
//         card1.classList.add('slide-out-left');

//         card2.classList.remove('hidden');
//         card2.classList.add('slide-in-right');
//     });
// }
// else if (card1.hasAttribute('slide-in-left') || card1.hasAttribute('none')) {
//     rightBtn.addEventListener('click', () => {
//         card2.classList.remove('slide-out-right');
//         card2.classList.remove('slide-in-right');

//         card1.classList.remove('slide-in-left');
//         card1.classList.add('slide-out-left');

//         card2.classList.remove('hidden');
//         card2.classList.add('slide-in-right');
//     });
// }
// else if (card2.hasAttribute('hidden') || card2.hasAttribute('slide-out-right')) {
//     leftBtn.addEventListener('click', () => {
//         card1.classList.remove('slide-out-left');
//         card1.classList.remove('slide-in-left');

//         card2.classList.add('slide-out-right');

//         card1.classList.add('slide-in-left');
//     });
// }
// else {
//     leftBtn.addEventListener('click', () => {
//         card1.classList.remove('slide-out-left');
//         card1.classList.remove('slide-in-left');

//         card2.classList.add('slide-out-right');

//         card1.classList.add('slide-in-left');
//     });
// }