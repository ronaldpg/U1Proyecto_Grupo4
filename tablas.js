// COMPONENTE: Tabla de horarios de viajes para la pagina runaway

// Se necesita esto para el componente crearTabla(containerId)
function crearTabla(containerId) {
    const container = document.getElementById(containerId);
    
    const horariosData = [
        { id: 1, ruta: 'Ruta 01', bus: '145', origen: 'Terminal Central', destino: 'Zona Norte', horaSalida: '06:30', estado: 'En Ruta' },
        { id: 2, ruta: 'Ruta 15', bus: '287', origen: 'Sur', destino: 'Universidad', horaSalida: '07:15', estado: 'Programado' },
        { id: 3, ruta: 'Ruta 22', bus: '103', origen: 'Terminal', destino: 'Aeropuerto', horaSalida: '08:00', estado: 'Completado' },
        { id: 4, ruta: 'Ruta 01', bus: '156', origen: 'Terminal Central', destino: 'Zona Norte', horaSalida: '09:30', estado: 'En Ruta' },
        { id: 5, ruta: 'Ruta 15', bus: '299', origen: 'Sur', destino: 'Universidad', horaSalida: '10:00', estado: 'Programado' }
    ];
    
    const styles = `
        <style>
            .tabla-horarios-wrapper {
                overflow-x: auto;
                background: white;
                border-radius: 8px;
            }
            
            .tabla-horarios {
                width: 100%;
                border-collapse: collapse;
            }
            
            .tabla-horarios thead {
                background: #d32f2f;
                color: white;
            }
            
            .tabla-horarios th {
                padding: 15px 12px;
                text-align: left;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
            }
            
            .tabla-horarios td {
                padding: 14px 12px;
                border-bottom: 1px solid #f0f0f0;
                color: #333;
            }
            
            .tabla-horarios tbody tr {
                transition: all 0.3s;
            }
            
            .tabla-horarios tbody tr:hover {
                background: #ffebee;
            }
            
            .tabla-badge-estado {
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                display: inline-block;
            }
            
            .badge-en-ruta {
                background: #fff3cd;
                color: #856404;
            }
            
            .badge-programado {
                background: #d1ecf1;
                color: #0c5460;
            }
            
            .badge-completado {
                background: #d4edda;
                color: #155724;
            }
            
            .tabla-btn-action {
                padding: 7px 14px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 13px;
                margin: 0 4px;
                transition: all 0.3s;
                font-weight: 600;
            }
            
            .btn-ver-detalle {
                background: #ffcdd2;
                color: #b71c1c;
            }
            
            .btn-eliminar {
                background: #d32f2f;
                color: white;
            }
            
            .tabla-btn-action:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
        </style>
    `;
    
    const filasHTML = horariosData.map(horario => {
        let estadoClass = '';
        if (horario.estado === 'En Ruta') estadoClass = 'badge-en-ruta';
        else if (horario.estado === 'Programado') estadoClass = 'badge-programado';
        else if (horario.estado === 'Completado') estadoClass = 'badge-completado';
        
        return `
            <tr>
                <td>${horario.id}</td>
                <td><strong>${horario.ruta}</strong></td>
                <td>${horario.bus}</td>
                <td>${horario.origen}</td>
                <td>${horario.destino}</td>
                <td>${horario.horaSalida}</td>
                <td>
                    <span class="tabla-badge-estado ${estadoClass}">
                        ${horario.estado}
                    </span>
                </td>
                <td>
                    <button class="tabla-btn-action btn-ver-detalle" onclick="verDetalleViaje(${horario.id})">
                        Ver
                    </button>
                    <button class="tabla-btn-action btn-eliminar" onclick="eliminarViaje(${horario.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    const tablaHTML = `
        ${styles}
        <div class="tabla-horarios-wrapper">
            <table class="tabla-horarios">
                <thead>
                <tr>
                        <th>ID</th>
                        <th>Ruta</th>
                        <th>Bus</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${filasHTML}
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = tablaHTML;
}

function verDetalleViaje(id) {
    alert('Ver detalles del viaje ID: ' + id);
}

function eliminarViaje(id) {
    if (confirm('¿Estás seguro de eliminar el viaje ' + id + '?')) {
        alert('Viaje eliminado: ' + id);
    }
}