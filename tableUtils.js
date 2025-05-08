const numberWithCommas = (x) => {
    if (x === null || x === undefined) return '';
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function renderBurgerTable(config) {
    const { data, tableId, showAllButtonId, initialDisplayCount = 10, hasLinks = true, itemMultiplier } = config;

    const table = document.getElementById(tableId);
    if (!table) {
        console.error(`Table with id "${tableId}" not found.`);
        return;
    }

    let tbody = table.querySelector('tbody');
    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }
    tbody.innerHTML = '';

    const processedData = data.map(item => ({
        ...item,
        calculatedScore: item.score * itemMultiplier
    })).sort((a, b) => b.calculatedScore - a.calculatedScore);

    let displayCount = Math.min(initialDisplayCount, processedData.length);
    let currentIndex = 0;
    const animationDelay = 150; // ms

    function addRow() {
        if (currentIndex >= displayCount || currentIndex >= processedData.length) return;

        const item = processedData[currentIndex];
        const row = tbody.insertRow();

        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);

        rankCell.innerText = currentIndex + 1;

        if (hasLinks && item.link) {
            const link = document.createElement('a');
            link.href = item.link;
            link.target = '_blank';
            link.className = 'blink';
            link.textContent = item.name;
            nameCell.appendChild(link);
        } else {
            nameCell.textContent = item.name;
        }
        scoreCell.innerText = numberWithCommas(item.calculatedScore);

        currentIndex++;
        if (currentIndex < displayCount) {
            setTimeout(addRow, animationDelay);
        }
    }

    addRow();

    if (showAllButtonId && processedData.length > initialDisplayCount) {
        const showAllButton = document.getElementById(showAllButtonId);
        if (showAllButton) {
            showAllButton.style.display = 'block';
            showAllButton.onclick = () => {
                showAllButton.style.display = 'none';
                displayCount = processedData.length;
                if (currentIndex < displayCount) { 
                    addRow(); 
                }
            };
        } else {
            console.warn(`Show all button with id "${showAllButtonId}" not found.`);
        }
    } else if (showAllButtonId) {
        const showAllButton = document.getElementById(showAllButtonId);
        if (showAllButton) {
            showAllButton.style.display = 'none';
        }
    }
}

function updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', updateCopyrightYear);