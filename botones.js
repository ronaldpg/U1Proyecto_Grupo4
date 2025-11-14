function crearBotones(containerId) {
    const container = document.getElementById(containerId);
    
    const styles = `
        <style>
            .botones-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
            }
            
            .btn-runaway {
                padding: 15px 25px;
                border: none;
                border-radius: 6px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            
            .btn-runaway:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.25);
            }
            
            .btn-rojo {
                background: #d32f2f;
                color: white;
            }
            
            .btn-rosa {
                background: #ffcdd2;
                color: #b71c1c;
            }
            
            .btn-gris {
                background: #757575;
                color: white;
            }
            
            .btn-verde {
                background: #4caf50;
                color: white;
            }
        </style>
    `;
    
    const botonesHTML = `
        ${styles}
        <div class="botones-grid">
            <button class="btn-runaway btn-rojo" onclick="accionBoton('Buscar Ruta')">
                🚌 Buscar Ruta
            </button>
            <button class="btn-runaway btn-rosa" onclick="accionBoton('Ver Paradas')">
                📍 Ver Paradas
            </button>
            <button class="btn-runaway btn-verde" onclick="accionBoton('Iniciar Viaje')">
                ▶️ Iniciar Viaje
            </button>
            <button class="btn-runaway btn-gris" onclick="accionBoton('Configuración')">
                ⚙️ Configuración
            </button>
        </div>
    `;
    
    container.innerHTML = botonesHTML;
}

function accionBoton(accion) {
    alert('Acción: ' + accion);
}