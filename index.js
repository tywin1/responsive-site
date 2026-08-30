import { iaplc } from './data.js';

const iaplcHtml = document.getElementById('iaplc-container');
const currentYear = document.getElementById('current-year');

if (currentYear) {
    currentYear.innerHTML= `
    <div>
    <span>Made in ${new Date().getFullYear()} by</span>
    <a href="https://github.com/tywin1" target="_blank">Ramon E</a>
    </div>
    `
}

let visibleCount = 4;

function renderItems() {
    if (!iaplcHtml) return;

    const itemsToRender = iaplc.slice(0, visibleCount);
    
    let html = itemsToRender.map(item => `
        <div class="iaplc-item">
            <img src="${item.image}" alt="${item.title}" class="feature-image">
            <h3 class="iaplc-title">${item.title}</h3>
            <p class="iaplc-year">🥇 ${item.year}</p>
            <p class="iaplc-name">${item.name} | ${item.country}</p>
            <a href="${item.image}" target="_blank" rel="noreferrer" class="btn btn-mid">View full image</a>
        </div>
    `).join('');

    if (visibleCount < iaplc.length) {
        html += `
            <div class="load-more-container" style="width: 100%; text-align: center; margin-top: 20px;">
                <button id="load-more-btn" class="btn">Load More</button>
            </div>
        `;
    }

    iaplcHtml.innerHTML = html;

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 4;
            renderItems();
        });
    }
}

if (iaplcHtml) {
    renderItems();
}