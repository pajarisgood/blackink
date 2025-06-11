// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slide-dots');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slide-dots span');

// Initialize first slide and dot
slides[0].classList.add('active');
dots[0].classList.add('active');

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function goToSlide(n) {
    // Reset interval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);

    // Update current slide
    currentSlide = (n + slides.length) % slides.length;

    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Pause slideshow on hover
const heroSection = document.querySelector('.hero-slideshow');
heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
heroSection.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}); 

// Product Info Modal
function showProductInfo(productType) {
    let title, description;
    
    switch(productType) {
        case 'mug':
            title = 'Mug Custom';
            description = 'Cocok untuk: Hadiah perusahaan, souvenir pernikahan, kenang-kenangan acara, dan koleksi pribadi.';
            break;
        case 'lanyard':
            title = 'Lanyard Custom';
            description = 'Cocok untuk: ID card karyawan, event organizer, merchandise sekolah, dan branding perusahaan.';
            break;
        case 'pin':
            title = 'Pin Custom';
            description = 'Cocok untuk: Merchandise event, koleksi komunitas, souvenir seminar, dan branding organisasi.';
            break;
        case 'topi':
            title = 'Topi Custom';
            description = 'Cocok untuk: Merchandise tim, souvenir event, branding perusahaan, dan koleksi komunitas.';
            break;
        case 'banner':
            title = 'Banner & Spanduk';
            description = 'Cocok untuk: Promosi produk, event dan pameran, spanduk toko, dan backdrop acara.';
            break;
        case 'kartunama':
            title = 'Kartu Nama';
            description = 'Cocok untuk: Kartu nama profesional, kartu nama perusahaan, kartu nama event, dan kartu nama personal.';
            break;
        case 'brosur':
            title = 'Brosur & Flyer';
            description = 'Cocok untuk: Promosi produk baru, katalog produk, menu restoran, dan program acara.';
            break;
        case 'polaroid':
            title = 'Polaroid';
            description = 'Cocok untuk: Kenang-kenangan acara, koleksi foto pribadi, souvenir pernikahan, dan merchandise event.';
            break;
    }
    
    Swal.fire({
        title: title,
        text: description,
        icon: 'info',
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#ff0000'
    });
} 