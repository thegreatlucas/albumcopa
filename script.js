const TOTAL_STICKERS = 670;
let collection = JSON.parse(localStorage.getItem('albumcopa_collection')) || {};
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderGrid();
    updateStats();
    updateMyCode();
    setupTabs();
    setupFilters();
    setupSwapLogic();
}

function renderGrid() {
    const grid = document.getElementById('stickers-grid');
    grid.innerHTML = '';
    
    const fragment = document.createDocumentFragment();
    
    for (let i = 1; i <= TOTAL_STICKERS; i++) {
        const count = collection[i] || 0;
        
        if (currentFilter === 'missing' && count > 0) continue;
        if (currentFilter === 'dupes' && count < 2) continue;
        
        const card = document.createElement('div');
        card.className = `sticker-card ${count > 0 ? 'have' : ''} ${count > 1 ? 'dupe' : ''}`;
        
        card.innerHTML = `
            <span class="number">${i}</span>
            <div class="card-controls">
                <button class="btn-minus" onclick="updateCollection(${i}, -1)">-</button>
                <span class="count">${count}</span>
                <button class="btn-plus" onclick="updateCollection(${i}, 1)">+</button>
            </div>
        `;
        fragment.appendChild(card);
    }
    
    grid.appendChild(fragment);
}

window.updateCollection = function(id, change) {
    const current = collection[id] || 0;
    const newCount = Math.max(0, current + change);
    
    if (newCount === 0) {
        delete collection[id];
    } else {
        collection[id] = newCount;
    }
    
    localStorage.setItem('albumcopa_collection', JSON.stringify(collection));
    updateStats();
    updateMyCode();
    renderGrid();
}

function updateStats() {
    let completed = 0;
    let dupes = 0;
    
    for (let i = 1; i <= TOTAL_STICKERS; i++) {
        const count = collection[i] || 0;
        if (count > 0) completed++;
        if (count > 1) dupes += (count - 1);
    }
    
    document.getElementById('stat-total').innerText = completed;
    document.getElementById('stat-missing').innerText = TOTAL_STICKERS - completed;
    document.getElementById('stat-dupes').innerText = dupes;
}

function updateMyCode() {
    try {
        const code = btoa(JSON.stringify(collection));
        document.getElementById('my-code').value = code;
    } catch(e) {
        console.error("Erro ao gerar código", e);
    }
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.tab).classList.add('active');
        });
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filters button');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.id.replace('filter-', '');
            renderGrid();
        });
    });
}

function setupSwapLogic() {
    document.getElementById('btn-copy').addEventListener('click', () => {
        const codeInput = document.getElementById('my-code');
        
        navigator.clipboard.writeText(codeInput.value).then(() => {
            const btn = document.getElementById('btn-copy');
            const originalText = btn.innerText;
            btn.innerText = 'Copiado!';
            setTimeout(() => btn.innerText = originalText, 2000);
        }).catch(err => {
            // Fallback
            codeInput.select();
            document.execCommand('copy');
            alert('Código copiado!');
        });
    });
    
    document.getElementById('btn-compare').addEventListener('click', () => {
        const friendCode = document.getElementById('friend-code').value.trim();
        if (!friendCode) return;
        
        try {
            const friendCollection = JSON.parse(atob(friendCode));
            compareCollections(friendCollection);
        } catch (e) {
            alert('Código inválido! Peça para seu amigo copiar novamente.');
        }
    });
}

function compareCollections(friendCollection) {
    const giveList = [];
    const receiveList = [];
    
    for (let i = 1; i <= TOTAL_STICKERS; i++) {
        const myCount = collection[i] || 0;
        const friendCount = friendCollection[i] || 0;
        
        // Eu posso dar: tenho repetida (>1) E meu amigo precisa (0)
        if (myCount > 1 && friendCount === 0) {
            giveList.push(i);
        }
        
        // Eu posso receber: eu preciso (0) E meu amigo tem repetida (>1)
        if (myCount === 0 && friendCount > 1) {
            receiveList.push(i);
        }
    }
    
    renderSwapList('give-list', giveList);
    renderSwapList('receive-list', receiveList);
    document.getElementById('swap-results').classList.remove('hidden');
}

function renderSwapList(elementId, list) {
    const el = document.getElementById(elementId);
    if (list.length === 0) {
        el.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">Nenhuma figurinha disponível nesta categoria.</p>';
        return;
    }
    
    el.innerHTML = list.map(id => `<span class="swap-badge">${id}</span>`).join('');
}
