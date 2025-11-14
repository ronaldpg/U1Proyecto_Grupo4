function crearFooter(containerId) {
    const container = document.getElementById(containerId);
    
    const styles = `
        <style>
            .footer-runaway {
                background: #212121;
                color: white;
                padding: 40px 0 20px;
                margin-top: 50px;
            }
            
            .footer-content-wrapper {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 20px;
            }
            
            .footer-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 40px;
                margin-bottom: 30px;
            }
            
            .footer-column h3 {
                color: #d32f2f;
                margin-bottom: 15px;
                font-size: 20px;
            }
            
            .footer-column ul {
                list-style: none;
            }
            
            .footer-column ul li {
                margin-bottom: 10px;
            }
            
            .footer-column a {
                color: #ccc;
                text-decoration: none;
                transition: all 0.3s;
                display: inline-block;
            }
            
            .footer-column a:hover {
                color: #d32f2f;
                transform: translateX(5px);
            }
            
            .footer-social {
                display: flex;
                gap: 15px;
                margin-top: 15px;
            }
            
            .footer-social-btn {
                width: 40px;
                height: 40px;
                background: #d32f2f;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-decoration: none;
                font-size: 20px;
                transition: all 0.3s;
            }
            
            .footer-social-btn:hover {
                background: #b71c1c;
                transform: translateY(-3px);
            }
            
            .footer-bottom {
                border-top: 1px solid #424242;
                padding-top: 20px;
                text-align: center;
                color: #999;
            }
            
            .footer-logo {
                font-size: 28px;
                font-weight: bold;
                color: #d32f2f;
                margin-bottom: 10px;
            }
        </style>
    `;
    
    const footerHTML = `
        ${styles}
        <footer class="footer-runaway">
            <div class="footer-content-wrapper">
                <div class="footer-grid">
                    <div class="footer-column">
                        <div class="footer-logo">RUNAWAY</div>
                        <p style="color: #ccc; line-height: 1.6;">
                            Sistema inteligente de transporte público. 
                            Viaja seguro, llega a tiempo.
                        </p>
                        <div class="footer-social">
                            <a href="#" class="footer-social-btn">f</a>
                            <a href="#" class="footer-social-btn">t</a>
                            <a href="#" class="footer-social-btn">i</a>
                        </div>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Consultar Rutas</a></li>
                            <li><a href="#">Horarios</a></li>
                            <li><a href="#">Paradas Cercanas</a></li>
                            <li><a href="#">Rastreo en Vivo</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Información</h3>
                        <ul>
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Contacto</h3>
                        <ul>
                            <li>📧 info@runaway.com</li>
                            <li>📱 +593 2 123 4567</li>
                            <li>📍 Quito, Ecuador</li>
                            <li>🕐 Lun - Vie: 6:00 - 22:00</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2025 RUNAWAY - Todos los derechos reservados | Desarrollado para Programación Integrativa de Componentes</p>
                </div>
            </div>
        </footer>
    `;
    
    container.innerHTML = footerHTML;
}