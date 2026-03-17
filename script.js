function createCarousel(cardIds, leftBtnId, rightBtnId) {
    const cards = cardIds.map(id => document.getElementById(id));
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);
    let current = 0;

     if (!leftBtn || !rightBtn || cards.some(c => c === null)) return;

    function showCard(nextIndex, direction) {
        const incoming = cards[nextIndex];
        const outgoing = cards[current];

        incoming.style.transition = 'none';
        incoming.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        incoming.style.opacity = '0';

        incoming.offsetHeight;

        incoming.style.transition = '';
        incoming.classList.remove('hidden');
        incoming.classList.add('active');
        incoming.style.transform = 'translateX(0)';
        incoming.style.opacity = '1';

        outgoing.classList.remove('active');
        outgoing.classList.add('hidden');
        outgoing.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
        outgoing.style.opacity = '0';

        current = nextIndex;
    }

    document.getElementById(rightBtnId).addEventListener('click', () => {
        showCard((current + 1) % cards.length, 'right');
    });

    document.getElementById(leftBtnId).addEventListener('click', () => {
        showCard((current - 1 + cards.length) % cards.length, 'left');
    });
}

// Scene 1 Education (2 cards)
createCarousel(['card1', 'card2'], 'leftBtn1', 'rightBtn1');

// Scene 2 Projects (3 cards)
createCarousel(['card3', 'card4', 'card5'], 'leftBtn2', 'rightBtn2');

// Scene 3 Work Experience (2 cards)
createCarousel(['card6', 'card7'], 'leftBtn3', 'rightBtn3');