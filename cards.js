function crearCards(containerId) {
    const container = document.getElementById(containerId);
    
    const rutasData = [
        {
            numero: 'Ruta 01',
            nombre: 'Centro - Norte',
            descripcion: 'Conecta el centro histórico con la zona norte de la ciudad',
            frecuencia: '5-8 min',
            estado: 'Operativo',
            color: '#d32f2f'
        },
        {
            numero: 'Ruta 15',
            nombre: 'Sur - Universidad',
            descripcion: 'Ruta directa desde el sur hasta el campus universitario',
            frecuencia: '10-12 min',
            estado: 'Operativo',
            color: '#1976d2'
        },
        {
            numero: 'Ruta 22',
            nombre: 'Terminal - Aeropuerto',
            descripcion: 'Servicio express entre terminal terrestre y aeropuerto',
            frecuencia: '15-20 min',
            estado: 'Mantenimiento',
            color: '#f57c00'
        }
    ];
    
    const styles = `
        <style>
            .cards-rutas-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
            }
            
            .card-ruta-item {
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 3px 10px rgba(0,0,0,0.15);
                transition: all 0.3s;
                cursor: pointer;
                border-top: 5px solid;
            }
            
            .card-ruta-item:hover {
                transform: translateY(-8px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.25);
            }
            
            .card-ruta-header {
                padding: 20px;
                color: white;
                font-weight: bold;
            }
            
            .card-ruta-numero {
                font-size: 24px;
                margin-bottom: 5px;
            }
            
            .card-ruta-nombre {
                font-size: 18px;
            }
            
            .card-ruta-body {
                padding: 20px;
                background: #fafafa;
            }
            
            .card-ruta-desc {
                color: #666;
                line-height: 1.6;
                margin-bottom: 15px;
            }
            
            .card-ruta-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 15px;
            }
            
            .card-frecuencia {
                background: #ffcdd2;
                color: #b71c1c;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: bold;
            }
            
            .card-estado {
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: bold;
            }
            
            .estado-operativo {
                background: #c8e6c9;
                color: #2e7d32;
            }
            
            .estado-mantenimiento {
                background: #ffe0b2;
                color: #e65100;
            }
        </style>
    `;
    
    const cardsHTML = rutasData.map(ruta => `
        <div class="card-ruta-item" style="border-top-color: ${ruta.color}">
            <div class="card-ruta-header" style="background: ${ruta.color}">
                <div class="card-ruta-numero">${ruta.numero}</div>
                <div class="card-ruta-nombre">${ruta.nombre}</div>
            </div>
            <div class="card-ruta-body">
                <div class="card-ruta-desc">${ruta.descripcion}</div>
                <div class="card-ruta-info">
                    <span class="card-frecuencia">⏱️ ${ruta.frecuencia}</span>
                    <span class="card-estado ${ruta.estado === 'Operativo' ? 'estado-operativo' : 'estado-mantenimiento'}">
                        ${ruta.estado}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `
        ${styles}
        <div class="cards-rutas-grid">
            ${cardsHTML}
        </div>
    `;
}