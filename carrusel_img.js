// COMPONENTE: Carrusel de imágenes de mapas de rutas para la pagina runaway
// Custom Element: <runaway-carrusel></runaway-carrusel>

class RunawayCarrusel extends HTMLElement {
    constructor() {
        super();
        this.currentIndex = 0;
        this.mapasRutas = [
            'https://picsum.photos/900/450?random=1',
            'https://picsum.photos/900/450?random=2',
            'https://picsum.photos/900/450?random=3',
            'https://picsum.photos/900/450?random=4'
        ];
    }

    connectedCallback() {
        this.innerHTML = `
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
            <div class="carrusel-mapa-wrapper">
                <div class="carrusel-info-overlay">Ruta: Línea Principal</div>
                <img class="carrusel-mapa-img" src="${this.mapasRutas[0]}" alt="Mapa de ruta">
                <button class="carrusel-control-btn carrusel-prev">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carrusel-control-btn carrusel-next">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="carrusel-dots-container"></div>
            </div>
        `;

        const dotsContainer = this.querySelector('.carrusel-dots-container');
        this.mapasRutas.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `carrusel-dot-item ${index === 0 ? 'activo' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        this.querySelector('.carrusel-prev').addEventListener('click', () => this.changeSlide(-1));
        this.querySelector('.carrusel-next').addEventListener('click', () => this.changeSlide(1));

        this.interval = setInterval(() => this.changeSlide(1), 6000);
    }

    changeSlide(direction) {
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = this.mapasRutas.length - 1;
        if (this.currentIndex >= this.mapasRutas.length) this.currentIndex = 0;
        this.updateCarrusel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarrusel();
    }

    updateCarrusel() {
        this.querySelector('.carrusel-mapa-img').src = this.mapasRutas[this.currentIndex];
        this.querySelectorAll('.carrusel-dot-item').forEach((dot, index) => {
            dot.classList.toggle('activo', index === this.currentIndex);
        });
    }

    disconnectedCallback() {
        if (this.interval) clearInterval(this.interval);
    }
}

customElements.define('runaway-carrusel', RunawayCarrusel);