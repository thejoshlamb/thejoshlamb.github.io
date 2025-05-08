// deadlist.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof deadBurgerData !== 'undefined' && typeof scoreMultiplier !== 'undefined' && typeof renderBurgerTable !== 'undefined') {
        renderBurgerTable({
            data: deadBurgerData,
            tableId: 'deadScoresTable',
            initialDisplayCount: deadBurgerData.length, // Show all by default for dead list
            hasLinks: false, // Items in deadlist typically don't have links
            itemMultiplier: scoreMultiplier
            // No showAllButtonId needed for deadlist as it shows all items
        });
    } else {
        console.error('Required data or functions not found for deadlist.js. Make sure data.js and tableUtils.js are loaded before deadlist.js.');
    }
});