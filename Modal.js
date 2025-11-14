// COMPONENTE: Modal de detalles del viaje para la pagina runaway
// Custom Element: <runaway-modal></runaway-modal>

class RunawayModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .modal-trigger-runaway {
                    padding: 16px 35px;
                    background: #d32f2f;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 3px 8px rgba(211, 47, 47, 0.3);
                }
                
                .modal-trigger-runaway:hover {
                    background: #b71c1c;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(211, 47, 47, 0.4);
                }
                
                .modal-overlay-runaway {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.75);
                    z-index: 1000;
                    animation: fadeInModal 0.3s;
                }
                
                .modal-content-runaway {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 0;
                    border-radius: 10px;
                    max-width: 550px;
                    width: 90%;
                    box-shadow: 0 25px 70px rgba(0,0,0,0.4);
                    animation: slideInModal 0.3s;
                    overflow: hidden;
                }
                
                .modal-header-runaway {
                    background: #d32f2f;
                    color: white;
                    padding: 20px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .modal-title-runaway {
                    font-size: 22px;
                    font-weight: bold;
                }
                
                .modal-close-x {
                    background: rgba(255,255,255,0.2);
                    color: white;
                    border: none;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    font-size: 22px;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-close-x:hover {
                    background: rgba(255,255,255,0.3);
                    transform: rotate(90deg);
                }
                
                .modal-body-runaway {
                    padding: 30px 25px;
                    color: #555;
                    line-height: 1.8;
                }
                
                .modal-info-item {
                    margin-bottom: 15px;
                    padding: 12px;
                    background: #ffebee;
                    border-radius: 6px;
                    border-left: 4px solid #d32f2f;
                }
                
                .modal-info-label {
                    font-weight: bold;
                    color: #b71c1c;
                    margin-bottom: 5px;
                }
                
                .modal-footer-runaway {
                    padding: 20px 25px;
                    background: #fafafa;
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                    border-top: 1px solid #e0e0e0;
                }
                
                .modal-btn-runaway {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s;
                    font-size: 15px;
                }
                
                .modal-btn-cancelar {
                    background: #757575;
                    color: white;
                }
                
                .modal-btn-confirmar {
                    background: #d32f2f;
                    color: white;
                }
                
                .modal-btn-runaway:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                }
                
                @keyframes fadeInModal {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideInModal {
                    from {
                        transform: translate(-50%, -60%);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, -50%);
                        opacity: 1;
                    }
                }
            </style>
            <button class="modal-trigger-runaway">
                <i class="fas fa-bus"></i> Ver Detalles del Viaje
            </button>
            
            <div class="modal-overlay-runaway">
                <div class="modal-content-runaway">
                    <div class="modal-header-runaway">
                        <div class="modal-title-runaway">Información del Viaje</div>
                        <button class="modal-close-x"><i class="fas fa-times"></i></button>
                    </div>
                    
                    <div class="modal-body-runaway">
                        <div class="modal-info-item">
                            <div class="modal-info-label">Número de Ruta</div>
                            <div>Ruta 01 - Centro Norte</div>
                        </div>
                        
                        <div class="modal-info-item">
                            <div class="modal-info-label">Número de Bus</div>
                            <div>Bus #145</div>
                        </div>
                        
                        <div class="modal-info-item">
                            <div class="modal-info-label">Ubicación Actual</div>
                            <div>Av. Principal, entre calles 5 y 6</div>
                        </div>
                        
                        <div class="modal-info-item">
                            <div class="modal-info-label">Próxima Parada</div>
                            <div>Parada Central - Llegada estimada: 5 minutos</div>
                        </div>
                        
                        <div class="modal-info-item">
                            <div class="modal-info-label">Estado del Viaje</div>
                            <div><i class="fas fa-circle" style="color: #4caf50;"></i> En ruta - Sin retrasos</div>
                        </div>
                    </div>
                    
                    <div class="modal-footer-runaway">
                        <button class="modal-btn-runaway modal-btn-cancelar">
                            Cerrar
                        </button>
                        <button class="modal-btn-runaway modal-btn-confirmar">
                            Rastrear en Mapa
                        </button>
                    </div>
                </div>
            </div>
        `;

        const trigger = this.querySelector('.modal-trigger-runaway');
        const overlay = this.querySelector('.modal-overlay-runaway');
        const closeBtn = this.querySelector('.modal-close-x');
        const cancelBtn = this.querySelector('.modal-btn-cancelar');
        const confirmarBtn = this.querySelector('.modal-btn-confirmar');

        trigger.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        const closeModal = () => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        confirmarBtn.addEventListener('click', () => {
            alert('Abriendo mapa en tiempo real...');
            closeModal();
        });
    }
}

customElements.define('runaway-modal', RunawayModal);