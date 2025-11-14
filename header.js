// COMPONENTE: Header de navegación para la pagina runaway
// Custom Element: <runaway-header titulo="RUNAWAY"></runaway-header>

class RunawayHeader extends HTMLElement {
    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'RUNAWAY';
        
        this.innerHTML = `
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
            <header class="runaway-header">
                <div class="header-content-wrapper">
                    <div class="header-brand">${titulo}</div>
                    <ul class="header-nav-menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#rutas">Rutas</a></li>
                        <li><a href="#viajes">Viajes</a></li>
                        <li><a href="#paradas">Paradas</a></li>
                    </ul>
                </div>
            </header>
            <div class="header-descripcion">
                <strong><i class="fas fa-thumbtack"></i> Componente Header:</strong> Barra de navegación principal con logo y menú. 
                Se usa como: &lt;runaway-header titulo="RUNAWAY"&gt;&lt;/runaway-header&gt;
            </div>
        `;
    }
}

customElements.define('runaway-header', RunawayHeader);