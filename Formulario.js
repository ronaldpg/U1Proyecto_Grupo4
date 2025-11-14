// COMPONENTE: Formulario de registro de viajes para la pagina runaway

// Se necesita esto para el componente crearFormulario(containerId)

function crearFormulario(containerId) {
    const container = document.getElementById(containerId);
    
    const styles = `
        <style>
            .form-viaje-container {
                max-width: 700px;
                margin: 0 auto;
                background: #fafafa;
                padding: 30px;
                border-radius: 8px;
            }
            
            .form-viaje-group {
                margin-bottom: 20px;
            }
            
            .form-viaje-label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #333;
                font-size: 15px;
            }
            
            .form-viaje-input, .form-viaje-select, .form-viaje-textarea {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e0e0e0;
                border-radius: 6px;
                font-size: 15px;
                transition: all 0.3s;
                background: white;
            }
            
            .form-viaje-input:focus, .form-viaje-select:focus, .form-viaje-textarea:focus {
                outline: none;
                border-color: #d32f2f;
                box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
            }
            
            .form-row-doble {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }
            
            .form-viaje-btn-submit {
                width: 100%;
                padding: 16px;
                background: #d32f2f;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 17px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
                margin-top: 10px;
            }
            
            .form-viaje-btn-submit:hover {
                background: #b71c1c;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
            }
            
            .form-resultado-box {
                margin-top: 25px;
                padding: 20px;
                background: #ffcdd2;
                border-radius: 6px;
                border-left: 5px solid #d32f2f;
                display: none;
            }
            
            .form-resultado-titulo {
                color: #b71c1c;
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 12px;
            }
        </style>
    `;
    
    const formHTML = `
        ${styles}
        <div class="form-viaje-container">
            <form id="formViajeRunaway" onsubmit="submitViajeForm(event)">
                <div class="form-row-doble">
                    <div class="form-viaje-group">
                        <label class="form-viaje-label">Número de Ruta</label>
                        <input type="text" class="form-viaje-input" name="numeroRuta" placeholder="Ej: Ruta 01" required>
                    </div>
                    
                    <div class="form-viaje-group">
                        <label class="form-viaje-label">Número de Bus</label>
                        <input type="text" class="form-viaje-input" name="numeroBus" placeholder="Ej: 145" required>
                    </div>
                </div>
                
                <div class="form-viaje-group">
                    <label class="form-viaje-label">Parada de Origen</label>
                    <input type="text" class="form-viaje-input" name="paradaOrigen" placeholder="Ingrese la parada inicial" required>
                </div>
                
                <div class="form-viaje-group">
                    <label class="form-viaje-label">Parada de Destino</label>
                    <input type="text" class="form-viaje-input" name="paradaDestino" placeholder="Ingrese la parada final" required>
                </div>
                
                <div class="form-row-doble">
                    <div class="form-viaje-group">
                        <label class="form-viaje-label">Hora de Salida</label>
                        <input type="time" class="form-viaje-input" name="horaSalida" required>
                    </div>
                    
                    <div class="form-viaje-group">
                        <label class="form-viaje-label">Estado del Viaje</label>
                        <select class="form-viaje-select" name="estadoViaje" required>
                            <option value="">Seleccione...</option>
                            <option value="programado">Programado</option>
                            <option value="en-ruta">En Ruta</option>
                            <option value="completado">Completado</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-viaje-group">
                    <label class="form-viaje-label">Observaciones</label>
                    <textarea class="form-viaje-textarea" name="observaciones" rows="4" placeholder="Notas adicionales sobre el viaje..."></textarea>
                </div>
                
                <button type="submit" class="form-viaje-btn-submit">
                    <i class="fas fa-bus"></i> Registrar Viaje
                </button>
            </form>
            
            <div class="form-resultado-box" id="viajeResultado"></div>
        </div>
    `;
    
    container.innerHTML = formHTML;
}

function submitViajeForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const datosViaje = {};
    
    formData.forEach((value, key) => {
        datosViaje[key] = value;
    });
    
    const resultado = document.getElementById('viajeResultado');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <div class="form-resultado-titulo"><i class="fas fa-check-circle"></i> Viaje Registrado Exitosamente</div>
        <p><strong>Ruta:</strong> ${datosViaje.numeroRuta}</p>
        <p><strong>Bus:</strong> ${datosViaje.numeroBus}</p>
        <p><strong>Origen:</strong> ${datosViaje.paradaOrigen}</p>
        <p><strong>Destino:</strong> ${datosViaje.paradaDestino}</p>
        <p><strong>Hora:</strong> ${datosViaje.horaSalida}</p>
        <p><strong>Estado:</strong> ${datosViaje.estadoViaje}</p>
        ${datosViaje.observaciones ? `<p><strong>Observaciones:</strong> ${datosViaje.observaciones}</p>` : ''}
    `;
    
    form.reset();
    
    setTimeout(() => {
        resultado.style.display = 'none';
    }, 8000);
}