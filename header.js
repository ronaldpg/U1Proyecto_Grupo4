// COMPONENTE: Header de navegación para la pagina runaway

// Se necesita esto para el header crearHeader(containerId, titulo, arrayMenuItems)

function crearHeader(containerId, titulo, menuItems) {
    const container = document.getElementById(containerId);
    
    const styles = `
        <style>
            .runaway-header {
                background: #d32f2f;
                color: white;
                padding: 15px 0;
                box-shadow: 0 2px 10px rgba(211, 47, 47, 0.3);
            }
            
            .header-content-wrapper {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
            }
            
            .header-brand {
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 2px;
            }
            
            .header-nav-menu {
                display: flex;
                gap: 25px;
                list-style: none;
            }
            
            .header-nav-menu a {
                color: white;
                text-decoration: none;
                font-size: 16px;
                font-weight: 500;
                transition: all 0.3s;
                padding: 8px 16px;
                border-radius: 4px;
            }
            
            .header-nav-menu a:hover {
                background: rgba(255,255,255,0.2);
            }
            
            .header-descripcion {
                background: #ffebee;
                padding: 10px 15px;
                border-radius: 5px;
                margin-bottom: 15px;
                color: #666;
                font-size: 14px;
                border-left: 4px solid #d32f2f;
            }
        </style>
    `;
    
    const menuHTML = menuItems.map(item => 
        `<li><a href="${item.url}">${item.texto}</a></li>`
    ).join('');
    
    const headerHTML = `
        ${styles}
        <header class="runaway-header">
            <div class="header-content-wrapper">
                <div class="header-brand">${titulo}</div>
                <ul class="header-nav-menu">
                    ${menuHTML}
                </ul>
            </div>
        </header>
        <div class="header-descripcion">
            <strong><i class="fas fa-thumbtack"></i> Componente Header:</strong> Barra de navegación principal con logo y menú. 
            Se usa llamando crearHeader(id, titulo, [{texto, url}])
        </div>
    `;
    
    container.innerHTML = headerHTML;
}