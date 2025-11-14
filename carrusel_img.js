function crearCarrusel(containerId) {
    const container = document.getElementById(containerId);
    
    const mapasRutas = [
        'https://picsum.photos/900/450?random=1',
        'https://picsum.photos/900/450?random=2',
        'https://picsum.photos/900/450?random=3',
        'https://picsum.photos/900/450?random=4'
    ];
    
    let currentIndex = 0;
    
    const styles = `
        <style>
            .carrusel-mapa-wrapper {
                position: relative;
                width: 100%;
                max-width: 900px;
                margin: 0 auto;
                border-radius: 8px;
                overflow: hidden;
                border: 3px solid #d32f2f;
                box-shadow: 0 4px 15px rgba(211, 47, 47, 0.2);
            }
            
            .carrusel-mapa-img {
                width: 100%;
                height: 450px;
                object-fit: cover;
                display: block;
            }
            
            .carrusel-control-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(211, 47, 47, 0.8);
                color: white;
                border: none;
                padding: 18px 22px;
                font-size: 28px;
                cursor: pointer;
                transition: all 0.3s;
                border-radius: 4px;
            }
            
            .carrusel-control-btn:hover {
                background: rgba(211, 47, 47, 1);
            }
            
            .carrusel-prev {
                left: 15px;
            }
            
            .carrusel-next {
                right: 15px;
            }
            
            .carrusel-dots-container {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 12px;
            }
            
            .carrusel-dot-item {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                cursor: pointer;
                transition: all 0.3s;
                border: 2px solid white;
            }
            
            .carrusel-dot-item.activo {
                background: #d32f2f;
                transform: scale(1.3);
            }
            
            .carrusel-info-overlay {
                position: absolute;
                top: 15px;
                left: 15px;
                background: rgba(211, 47, 47, 0.9);
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                font-weight: bold;
            }
        </style>
    `;
    
    const carruselHTML = `
        ${styles}
        <div class="carrusel-mapa-wrapper">
            <div class="carrusel-info-overlay">Ruta: Línea Principal</div>
            <img id="carruselMapaImg" class="carrusel-mapa-img" src="${mapasRutas[0]}" alt="Mapa de ruta">
            <button class="carrusel-control-btn carrusel-prev" onclick="changeSlide(-1)">❮</button>
            <button class="carrusel-control-btn carrusel-next" onclick="changeSlide(1)">❯</button>
            <div class="carrusel-dots-container" id="carruselDots"></div>
        </div>
    `;
    
    container.innerHTML = carruselHTML;
    
    const dotsContainer = document.getElementById('carruselDots');
    mapasRutas.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carrusel-dot-item ${index === 0 ? 'activo' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    window.changeSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = mapasRutas.length - 1;
        if (currentIndex >= mapasRutas.length) currentIndex = 0;
        updateCarrusel();
    };
    
    window.goToSlide = function(index) {
        currentIndex = index;
        updateCarrusel();
    };
    
    function updateCarrusel() {
        document.getElementById('carruselMapaImg').src = mapasRutas[currentIndex];
        const dots = document.querySelectorAll('.carrusel-dot-item');
        dots.forEach((dot, index) => {
            dot.classList.toggle('activo', index === currentIndex);
        });
    }
    
    setInterval(() => changeSlide(1), 6000);
}