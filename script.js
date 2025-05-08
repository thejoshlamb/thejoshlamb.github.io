document.addEventListener('DOMContentLoaded', () => {
    if (typeof liveBurgerData !== 'undefined' && typeof scoreMultiplier !== 'undefined' && typeof renderBurgerTable !== 'undefined') {
        renderBurgerTable({
            data: liveBurgerData,
            tableId: 'scoresTable',
            showAllButtonId: 'showAll',
            initialDisplayCount: 10,
            hasLinks: true,
            itemMultiplier: scoreMultiplier
        });
    } else {
        console.error('Required data or functions not found for script.js. Make sure data.js and tableUtils.js are loaded before script.js.');
    }
});