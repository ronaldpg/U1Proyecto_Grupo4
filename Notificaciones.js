// COMPONENTE: Notificaciones de alertas para la pagina runaway

// Se necesita esto para el componente crearNotificaciones(containerId)

function crearNotificaciones(containerId) {
    const container = document.getElementById(containerId);
    
    const styles = `
        <style>
            .notif-controles {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
                margin-bottom: 25px;
            }
            
            .notif-btn {
                padding: 12px 24px;
                border: none;
                border-radius: 6px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
            }
            
            .notif-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 12px rgba(0,0,0,0.25);
            }
            
            .notif-btn-info {
                background: #d32f2f;
                color: white;
            }
            
            .notif-btn-success {
                background: #4caf50;
                color: white;
            }
            
            .notif-btn-warning {
                background: #ff9800;
                color: white;
            }
            
            .notif-btn-error {
                background: #b71c1c;
                color: white;
            }
            
            .notificaciones-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                max-width: 400px;
            }
            
            .notificacion-item {
                background: white;
                padding: 18px 22px;
                border-radius: 8px;
                margin-bottom: 12px;
                box-shadow: 0 6px 20px rgba(0,0,0,0.25);
                animation: slideInRight 0.4s;
                border-left: 5px solid;
                position: relative;
                overflow: hidden;
            }
            
            .notif-tipo-info {
                border-left-color: #d32f2f;
            }
            
            .notif-tipo-success {
                border-left-color: #4caf50;
            }
            
            .notif-tipo-warning {
                border-left-color: #ff9800;
            }
            
            .notif-tipo-error {
                border-left-color: #b71c1c;
            }
            
            .notif-header-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .notif-titulo {
                font-weight: bold;
                font-size: 16px;
            }
            
            .notif-close-btn {
                background: transparent;
                border: none;
                font-size: 22px;
                cursor: pointer;
                color: #999;
                transition: all 0.3s;
                padding: 0;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notif-close-btn:hover {
                color: #333;
                transform: rotate(90deg);
            }
            
            .notif-mensaje {
                color: #666;
                font-size: 14px;
                line-height: 1.5;
            }
            
            .notif-progress-bar {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 4px;
                background: rgba(0,0,0,0.2);
                animation: progressBar 5s linear;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes progressBar {
                from { width: 100%; }
                to { width: 0%; }
            }
        </style>
    `;
    
    const notifHTML = `
        ${styles}
        <div class="notif-controles">
            <button class="notif-btn notif-btn-info" onclick="mostrarNotificacion('info')">
                <i class="fas fa-info-circle"></i> Alerta de Ruta
            </button>
            <button class="notif-btn notif-btn-success" onclick="mostrarNotificacion('success')">
                <i class="fas fa-check-circle"></i> Bus Llegando
            </button>
            <button class="notif-btn notif-btn-warning" onclick="mostrarNotificacion('warning')">
                <i class="fas fa-exclamation-triangle"></i> Retraso
            </button>
            <button class="notif-btn notif-btn-error" onclick="mostrarNotificacion('error')">
                <i class="fas fa-ban"></i> Ruta Suspendida
            </button>
        </div>
        
        <div id="notificacionesContainer" class="notificaciones-container"></div>
    `;
    
    container.innerHTML = notifHTML;
}

let notifCounter = 0;

function mostrarNotificacion(tipo) {
    const notificaciones = {
        info: {
            titulo: 'Información de Ruta',
            mensaje: 'El bus de la Ruta 01 pasará por tu parada en aproximadamente 8 minutos.',
            clase: 'notif-tipo-info'
        },
        success: {
            titulo: 'Bus Próximo a Llegar',
            mensaje: 'Tu bus está a 2 paradas de distancia. Tiempo estimado: 3 minutos.',
            clase: 'notif-tipo-success'
        },
        warning: {
            titulo: 'Retraso en el Servicio',
            mensaje: 'La Ruta 15 presenta un retraso de 10 minutos debido al tráfico en Av. Principal.',
            clase: 'notif-tipo-warning'
        },
        error: {
            titulo: 'Servicio Suspendido',
            mensaje: 'La Ruta 22 está temporalmente suspendida por mantenimiento de emergencia.',
            clase: 'notif-tipo-error'
        }
    };
    
    const notif = notificaciones[tipo];
    const notifId = 'notif-' + (++notifCounter);
    const container = document.getElementById('notificacionesContainer');
    
    const notifElement = document.createElement('div');
    notifElement.id = notifId;
    notifElement.className = `notificacion-item ${notif.clase}`;
    notifElement.innerHTML = `
        <div class="notif-header-box">
            <div class="notif-titulo">${notif.titulo}</div>
            <button class="notif-close-btn" onclick="cerrarNotificacion('${notifId}')"><i class="fas fa-times"></i></button>
        </div>
        <div class="notif-mensaje">${notif.mensaje}</div>
        <div class="notif-progress-bar"></div>
    `;
    
    container.appendChild(notifElement);
    
    setTimeout(() => {
        cerrarNotificacion(notifId);
    }, 5000);
}

function cerrarNotificacion(notifId) {
    const notif = document.getElementById(notifId);
    if (notif) {
        notif.style.animation = 'slideInRight 0.4s reverse';
        setTimeout(() => {
            notif.remove();
        }, 400);
    }
}