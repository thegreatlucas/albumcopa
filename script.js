const ALBUM_STRUCTURE = [
    { prefix: '00', name: 'Especial Panini', count: 1, flag: '📘' },
    { prefix: 'FWC', name: 'Especiais', count: 19, flag: '🏆' },
    { prefix: 'MEX', name: 'México', count: 20, flag: '🇲🇽' },
    { prefix: 'RSA', name: 'África do Sul', count: 20, flag: '🇿🇦' },
    { prefix: 'KOR', name: 'Coreia do Sul', count: 20, flag: '🇰🇷' },
    { prefix: 'CZE', name: 'República Tcheca', count: 20, flag: '🇨🇿' },
    { prefix: 'CAN', name: 'Canadá', count: 20, flag: '🇨🇦' },
    { prefix: 'BIH', name: 'Bósnia e Herzegovina', count: 20, flag: '🇧🇦' },
    { prefix: 'QAT', name: 'Catar', count: 20, flag: '🇶🇦' },
    { prefix: 'SUI', name: 'Suíça', count: 20, flag: '🇨🇭' },
    { prefix: 'BRA', name: 'Brasil', count: 20, flag: '🇧🇷' },
    { prefix: 'MAR', name: 'Marrocos', count: 20, flag: '🇲🇦' },
    { prefix: 'HAI', name: 'Haiti', count: 20, flag: '🇭🇹' },
    { prefix: 'SCO', name: 'Escócia', count: 20, flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { prefix: 'USA', name: 'Estados Unidos', count: 20, flag: '🇺🇸' },
    { prefix: 'PAR', name: 'Paraguai', count: 20, flag: '🇵🇾' },
    { prefix: 'AUS', name: 'Austrália', count: 20, flag: '🇦🇺' },
    { prefix: 'TUR', name: 'Turquia', count: 20, flag: '🇹🇷' },
    { prefix: 'GER', name: 'Alemanha', count: 20, flag: '🇩🇪' },
    { prefix: 'CUW', name: 'Curaçao', count: 20, flag: '🇨🇼' },
    { prefix: 'CIV', name: 'Costa do Marfim', count: 20, flag: '🇨🇮' },
    { prefix: 'ECU', name: 'Equador', count: 20, flag: '🇪🇨' },
    { prefix: 'NED', name: 'Holanda', count: 20, flag: '🇳🇱' },
    { prefix: 'JPN', name: 'Japão', count: 20, flag: '🇯🇵' },
    { prefix: 'SWE', name: 'Suécia', count: 20, flag: '🇸🇪' },
    { prefix: 'TUN', name: 'Tunísia', count: 20, flag: '🇹🇳' },
    { prefix: 'BEL', name: 'Bélgica', count: 20, flag: '🇧🇪' },
    { prefix: 'EGY', name: 'Egito', count: 20, flag: '🇪🇬' },
    { prefix: 'IRN', name: 'Irã', count: 20, flag: '🇮🇷' },
    { prefix: 'NZL', name: 'Nova Zelândia', count: 20, flag: '🇳🇿' },
    { prefix: 'ESP', name: 'Espanha', count: 20, flag: '🇪🇸' },
    { prefix: 'CPV', name: 'Cabo Verde', count: 20, flag: '🇨🇻' },
    { prefix: 'KSA', name: 'Arábia Saudita', count: 20, flag: '🇸🇦' },
    { prefix: 'URU', name: 'Uruguai', count: 20, flag: '🇺🇾' },
    { prefix: 'FRA', name: 'França', count: 20, flag: '🇫🇷' },
    { prefix: 'SEN', name: 'Senegal', count: 20, flag: '🇸🇳' },
    { prefix: 'IRQ', name: 'Iraque', count: 20, flag: '🇮🇶' },
    { prefix: 'NOR', name: 'Noruega', count: 20, flag: '🇳🇴' },
    { prefix: 'ARG', name: 'Argentina', count: 20, flag: '🇦🇷' },
    { prefix: 'ALG', name: 'Argélia', count: 20, flag: '🇩🇿' },
    { prefix: 'AUT', name: 'Áustria', count: 20, flag: '🇦🇹' },
    { prefix: 'JOR', name: 'Jordânia', count: 20, flag: '🇯🇴' },
    { prefix: 'POR', name: 'Portugal', count: 20, flag: '🇵🇹' },
    { prefix: 'COD', name: 'RD Congo', count: 20, flag: '🇨🇩' },
    { prefix: 'UZB', name: 'Uzbequistão', count: 20, flag: '🇺🇿' },
    { prefix: 'COL', name: 'Colômbia', count: 20, flag: '🇨🇴' },
    { prefix: 'ENG', name: 'Inglaterra', count: 20, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { prefix: 'CRO', name: 'Croácia', count: 20, flag: '🇭🇷' },
    { prefix: 'GHA', name: 'Gana', count: 20, flag: '🇬🇭' },
    { prefix: 'PAN', name: 'Panamá', count: 20, flag: '🇵🇦' },
    { prefix: 'CC', name: 'Coca-Cola', count: 14, flag: '🥤' }
];

const TOTAL_STICKERS = ALBUM_STRUCTURE.reduce((acc, curr) => acc + curr.count, 0);

// --- SUPABASE CONFIG ---
const supabaseUrl = 'https://laymvtzfropvfujlkqys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxheW12dHpmcm9wdmZ1amxrcXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMDc0MjMsImV4cCI6MjA5NDY4MzQyM30.P5J2cZHMEgCuwJGxLCUrDNyHB_XWaYwVuQYQaX-VgaM';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
let currentUser = null;

let collection = JSON.parse(localStorage.getItem('albumcopa_collection')) || {};
let currentFilter = 'all';
let syncTimeout = null;

// --- MERCADO LIVRE AFFILIATES ---
// Substitua os códigos MLB pelos IDs reais dos seus produtos no ML
const AFFILIATE_PRODUCTS = [
    { mlb: 'MLB3407981503', affiliateUrl: '', fallbackTitle: 'Álbum Capa Dura + Envelopes' },
    { mlb: 'MLB3396827495', affiliateUrl: '', fallbackTitle: 'Kit 20 Pacotinhos (100 figurinhas)' },
    { mlb: 'MLB3123456789', affiliateUrl: '', fallbackTitle: 'Caixa Fechada Figurinhas' }
];

document.addEventListener('DOMContentLoaded', async () => {
    // Tenta pegar a sessão atual
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
        currentUser = session.user;
        document.getElementById('btn-logout').classList.remove('hidden');
        document.getElementById('auth-modal').classList.add('hidden');
        await loadFromCloud();
    } else {
        document.getElementById('auth-modal').classList.remove('hidden');
    }
    
    init();
    setupAuthListeners();
});

function init() {
    renderGrid();
    updateStats();
    updateMyCode();
    setupTabs();
    setupFilters();
    setupSwapLogic();
    loadPromotions();
}

async function loadFromCloud() {
    if (!currentUser) return;
    try {
        const { data, error } = await supabaseClient
            .from('collections')
            .select('data')
            .eq('user_id', currentUser.id)
            .single();
            
        if (data && data.data) {
            if (Object.keys(data.data).length > 0) {
                collection = data.data;
                localStorage.setItem('albumcopa_collection', JSON.stringify(collection));
                renderGrid();
                updateStats();
                updateMyCode();
            }
        }
    } catch (err) {
        console.error("Erro ao puxar dados da nuvem", err);
    }
}

async function saveToCloud() {
    if (!currentUser) return;
    try {
        const { error } = await supabaseClient
            .from('collections')
            .upsert(
                { user_id: currentUser.id, data: collection },
                { onConflict: 'user_id' }
            );
            
        if (error) console.error("Erro ao salvar na nuvem:", error);
    } catch (err) {
        console.error("Erro ao sincronizar", err);
    }
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
    
    // Cloud sync (com debounce para não floodar o Supabase de requisições)
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(saveToCloud, 1500);
}

function renderGrid() {
    const gridContainer = document.getElementById('stickers-grid-container');
    gridContainer.innerHTML = '';
    
    const fragment = document.createDocumentFragment();
    
    ALBUM_STRUCTURE.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'sticker-section';
        
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerHTML = `<span class="flag">${section.flag}</span> ${section.name} <small>(${section.prefix})</small>`;
        sectionEl.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'stickers-grid';
        
        let hasVisibleStickers = false;

        for (let i = 1; i <= section.count; i++) {
            const numStr = String(i).padStart(2, '0');
            const id = section.prefix === '00' ? '00' : `${section.prefix} ${numStr}`;
            const count = collection[id] || 0;
            
            if (currentFilter === 'missing' && count > 0) continue;
            if (currentFilter === 'dupes' && count < 2) continue;
            
            hasVisibleStickers = true;
            
            const card = document.createElement('div');
            card.className = `sticker-card ${count > 0 ? 'have' : ''} ${count > 1 ? 'dupe' : ''}`;
            
            card.innerHTML = `
                <span class="number">${id}</span>
                <div class="card-controls">
                    <button class="btn-minus" onclick="updateCollection('${id}', -1)">-</button>
                    <span class="count">${count}</span>
                    <button class="btn-plus" onclick="updateCollection('${id}', 1)">+</button>
                </div>
            `;
            grid.appendChild(card);
        }
        
        if (hasVisibleStickers) {
            sectionEl.appendChild(grid);
            fragment.appendChild(sectionEl);
        }
    });
    
    gridContainer.appendChild(fragment);
    
    if (gridContainer.children.length === 0) {
        gridContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Nenhuma figurinha encontrada para este filtro.</p>';
    }
}

function updateStats() {
    let completed = 0;
    let dupes = 0;
    
    ALBUM_STRUCTURE.forEach(section => {
        for (let i = 1; i <= section.count; i++) {
            const id = section.prefix === '00' ? '00' : `${section.prefix} ${String(i).padStart(2, '0')}`;
            const count = collection[id] || 0;
            if (count > 0) completed++;
            if (count > 1) dupes += (count - 1);
        }
    });
    
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
    
    ALBUM_STRUCTURE.forEach(section => {
        for (let i = 1; i <= section.count; i++) {
            const id = section.prefix === '00' ? '00' : `${section.prefix} ${String(i).padStart(2, '0')}`;
            const myCount = collection[id] || 0;
            const friendCount = friendCollection[id] || 0;
            
            if (myCount > 1 && friendCount === 0) giveList.push(id);
            if (myCount === 0 && friendCount > 1) receiveList.push(id);
        }
    });
    
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

function setupAuthListeners() {
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    const btnLogin = document.getElementById('btn-login');
    const btnRegister = document.getElementById('btn-register');
    const errorMsg = document.getElementById('auth-error');
    
    const hideModal = () => document.getElementById('auth-modal').classList.add('hidden');
    const showError = (msg) => {
        errorMsg.innerText = msg;
        errorMsg.style.display = 'block';
    };

    btnLogin.addEventListener('click', async () => {
        try {
            const email = emailInput.value;
            const password = passwordInput.value;
            if(!email || !password) return showError('Preencha os campos!');
            
            btnLogin.innerText = 'Entrando...';
            errorMsg.style.display = 'none';
            
            const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
            btnLogin.innerText = 'Entrar';
            
            if (error) {
                showError('Erro: ' + error.message);
            } else if (data.session) {
                currentUser = data.user;
                document.getElementById('btn-logout').classList.remove('hidden');
                hideModal();
                await loadFromCloud();
            } else {
                showError('Sessão não iniciada. Verifique se precisa confirmar o e-mail.');
            }
        } catch (err) {
            btnLogin.innerText = 'Entrar';
            showError('Erro inesperado: ' + (err.message || 'Falha de rede'));
            console.error(err);
        }
    });

    btnRegister.addEventListener('click', async () => {
        try {
            const email = emailInput.value;
            const password = passwordInput.value;
            if(!email || !password) return showError('Preencha os campos!');
            
            btnRegister.innerText = 'Criando...';
            errorMsg.style.display = 'none';
            
            const { data, error } = await supabaseClient.auth.signUp({ email, password });
            btnRegister.innerText = 'Criar Conta';
            
            if (error) {
                showError('Erro: ' + error.message);
            } else {
                if (!data.session) {
                    alert('Conta criada! Mas atenção: O Supabase está exigindo confirmação por e-mail. Vá no seu painel do Supabase > Authentication > Providers > Email e DESATIVE o "Confirm email" para entrar direto.');
                    showError('Verifique seu e-mail para confirmar a conta, ou desative isso no Supabase.');
                    return;
                }
                
                currentUser = data.user;
                document.getElementById('btn-logout').classList.remove('hidden');
                hideModal();
                saveToCloud(); // Sincroniza estado local inicial pra nuvem
                alert('Conta criada com sucesso! Sua coleção agora faz backup na nuvem.');
            }
        } catch (err) {
            btnRegister.innerText = 'Criar Conta';
            showError('Erro inesperado: ' + (err.message || 'Falha de rede'));
            console.error(err);
        }
    });
    
    document.getElementById('btn-logout').addEventListener('click', async () => {
        await supabaseClient.auth.signOut();
        currentUser = null;
        document.getElementById('btn-logout').classList.add('hidden');
        document.getElementById('auth-modal').classList.remove('hidden');
        
        // Limpa a coleção local ao sair
        collection = {};
        localStorage.removeItem('albumcopa_collection');
        renderGrid();
        updateStats();
    });
}

async function loadPromotions() {
    const container = document.getElementById('promos-container');
    if (!container) return;

    try {
        const ids = AFFILIATE_PRODUCTS.map(p => p.mlb).join(',');
        const response = await fetch(`https://api.mercadolibre.com/items?ids=${ids}`);
        const data = await response.json();
        
        container.innerHTML = ''; // Limpa os skeletons

        data.forEach((itemRes, index) => {
            const affiliateConfig = AFFILIATE_PRODUCTS[index];
            const item = itemRes.body;
            
            // Se o produto não for encontrado (ex: MLB falso), ignoramos ou usamos mock visual para o dev ver
            if (itemRes.code !== 200) {
                return;
            }

            const card = document.createElement('a');
            card.className = 'promo-card';
            card.href = affiliateConfig.affiliateUrl || item.permalink;
            card.target = '_blank';
            
            const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price);
            const imageUrl = item.pictures && item.pictures.length > 0 ? item.pictures[0].url : item.thumbnail;

            card.innerHTML = `
                <img src="${imageUrl}" alt="${item.title}" class="promo-img">
                <div class="promo-name">${item.title}</div>
                <div class="promo-price">${formattedPrice}</div>
            `;
            
            container.appendChild(card);
        });
        
        // Se nenhum produto carregou (ex: IDs todos inválidos), esconde a seção
        if (container.children.length === 0) {
            document.querySelector('.promos-section').style.display = 'none';
        }
    } catch (e) {
        console.error("Erro ao carregar promoções", e);
        document.querySelector('.promos-section').style.display = 'none';
    }
}
