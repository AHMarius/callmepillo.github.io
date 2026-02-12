let clockInterval = null;

const photoData = [
  { file: 'babele.webp', alt: 'Babele', model: 'NIKON D3300', iso: '100', s: '1/200', f: '130' },
  { file: 'bot_bird_0.webp', alt: 'Bot Bird 0', model: '', iso: '-', s: '-', f: '0' },
  { file: 'bot_bird_1.webp', alt: 'Bot Bird 1', model: 'NIKON D500', iso: '800', s: '1/800', f: '63' },
  { file: 'bot_bird_2.webp', alt: 'Bot Bird 2', model: 'NIKON D500', iso: '800', s: '1/800', f: '63' },
  { file: 'bot_bird_3.webp', alt: 'Bot Bird 3', model: 'NIKON D500', iso: '800', s: '1/320', f: '63' },
  { file: 'bot_bird_4.webp', alt: 'Bot Bird 4', model: 'NIKON D500', iso: '800', s: '1/800', f: '63' },
  { file: 'bot_flower.webp', alt: 'Bot Flower', model: 'NIKON D500', iso: '400', s: '1/125', f: '63' },
  { file: 'bot_lightpost.webp', alt: 'Bot Lightpost', model: 'NIKON D500', iso: '400', s: '1/200', f: '50' },
  { file: 'brasov_above.webp', alt: 'Brasov Above', model: 'NIKON D3300', iso: '100', s: '1/1000', f: '56' },
  { file: 'brasov_cat.webp', alt: 'Brasov Cat', model: 'NIKON D3300', iso: '100', s: '1/10', f: '42' },
  { file: 'brasov_city_0.webp', alt: 'Brasov City 0', model: 'NIKON D3300', iso: '100', s: '1/30', f: '35' },
  { file: 'brasov_city_1.webp', alt: 'Brasov City 1', model: 'NIKON D3300', iso: '100', s: '1/30', f: '35' },
  { file: 'brasov_city_2.webp', alt: 'Brasov City 2', model: 'NIKON D3300', iso: '100', s: '1/30', f: '42' },
  { file: 'brasov_city_3.webp', alt: 'Brasov City 3', model: 'NIKON D3300', iso: '100', s: '1/30', f: '90' },
  { file: 'brasov_city_4.webp', alt: 'Brasov City 4', model: 'NIKON D3300', iso: '100', s: '1/30', f: '90' },
  { file: 'brasov_city_5.webp', alt: 'Brasov City 5', model: 'NIKON D3300', iso: '100', s: '1/100', f: '56' },
  { file: 'brasov_hut_0.webp', alt: 'Brasov Hut 0', model: 'NIKON D3300', iso: '100', s: '1/160', f: '130' },
  { file: 'brasov_hut_1.webp', alt: 'Brasov Hut 1', model: 'NIKON D3300', iso: '100', s: '1/100', f: '130' },
  { file: 'brasov_lake_0.webp', alt: 'Brasov Lake 0', model: 'NIKON D3300', iso: '100', s: '1/125', f: '130' },
  { file: 'brasov_lake_1.webp', alt: 'Brasov Lake 1', model: 'NIKON D3300', iso: '100', s: '1/100', f: '130' },
  { file: 'brasov_lake_2.webp', alt: 'Brasov Lake 2', model: 'NIKON D3300', iso: '100', s: '1/30', f: '130' },
  { file: 'brasov_lake_3.webp', alt: 'Brasov Lake 3', model: 'NIKON D3300', iso: '100', s: '1/30', f: '130' },
  { file: 'brasov_lake_4.webp', alt: 'Brasov Lake 4', model: 'NIKON D3300', iso: '100', s: '1/400', f: '56' },
  { file: 'brasov_landscape_0.webp', alt: 'Brasov Landscape 0', model: 'NIKON D3300', iso: '100', s: '1/100', f: '90' },
  { file: 'brasov_landscape_1.webp', alt: 'Brasov Landscape 1', model: 'NIKON D3300', iso: '100', s: '1/160', f: '130' },
  { file: 'brasov_landscape_2.webp', alt: 'Brasov Landscape 2', model: 'NIKON D3300', iso: '100', s: '1/250', f: '130' },
  { file: 'brasov_landscape_3.webp', alt: 'Brasov Landscape 3', model: 'NIKON D3300', iso: '400', s: '1/200', f: '130' },
  { file: 'brasov_landscape_4.webp', alt: 'Brasov Landscape 4', model: 'NIKON D3300', iso: '400', s: '1/500', f: '130' },
  { file: 'brasov_landscape_5.webp', alt: 'Brasov Landscape 5', model: 'NIKON D3300', iso: '400', s: '1/800', f: '130' },
  { file: 'brasov_sign.webp', alt: 'Brasov Sign', model: 'NIKON D3300', iso: '100', s: '1/80', f: '110' },
  { file: 'brasov_stairs_0.webp', alt: 'Brasov Stairs 0', model: 'NIKON D3300', iso: '100', s: '1/30', f: '42' },
  { file: 'brasov_stairs_1.webp', alt: 'Brasov Stairs 1', model: 'NIKON D3300', iso: '100', s: '1/13', f: '38' },
  { file: 'brasov_stairs_2.webp', alt: 'Brasov Stairs 2', model: 'NIKON D3300', iso: '100', s: '1/20', f: '38' },
  { file: 'caraiman_0.webp', alt: 'Caraiman 0', model: 'NIKON D3300', iso: '100', s: '1/500', f: '56' },
  { file: 'caraiman_1.webp', alt: 'Caraiman 1', model: 'NIKON D3300', iso: '100', s: '1/1250', f: '35' },
  { file: 'caraiman_2.webp', alt: 'Caraiman 2', model: 'NIKON D3300', iso: '100', s: '1/800', f: '45' },
  { file: 'caraiman_3.webp', alt: 'Caraiman 3', model: 'NIKON D3300', iso: '100', s: '1/800', f: '35' },
  { file: 'caraiman_4.webp', alt: 'Caraiman 4', model: 'NIKON D3300', iso: '100', s: '1/50', f: '130' },
  { file: 'caraiman_5.webp', alt: 'Caraiman 5', model: 'NIKON D3300', iso: '100', s: '1/50', f: '130' },
  { file: 'caraiman_6.webp', alt: 'Caraiman 6', model: 'NIKON D3300', iso: '100', s: '1/50', f: '130' },
  { file: 'caraiman_7.webp', alt: 'Caraiman 7', model: 'NIKON D3300', iso: '100', s: '1/100', f: '130' },
  { file: 'caraiman_8.webp', alt: 'Caraiman 8', model: 'NIKON D3300', iso: '100', s: '1/100', f: '130' },
  { file: 'dusk_flowers_1.jpg', alt: 'Dusk Flowers 1', model: 'NIKON D500', iso: '1000', s: '1/20', f: '48' },
  { file: 'dusk_flowers_2.jpg', alt: 'Dusk Flowers 2', model: 'NIKON D500', iso: '1000', s: '1/20', f: '48' },
  { file: 'istanbul_cat.webp', alt: 'Istanbul Cat', model: 'NIKON D500', iso: '100', s: '1/80', f: '56' },
  { file: 'istanbul_life.webp', alt: 'Istanbul Life', model: 'NIKON D500', iso: '1600', s: '1/50', f: '48' },
  { file: 'istanbul_tower.webp', alt: 'Istanbul Tower', model: 'NIKON D500', iso: '100', s: '1/800', f: '63' },
  { file: 'sfinx.webp', alt: 'Sfinx', model: 'NIKON D3300', iso: '100', s: '1/125', f: '130' },
  { file: 'stairs.jpg', alt: 'Stairs', model: 'NIKON D3300', iso: '100', s: '1/13', f: '38' },
  { file: 'vienna_arch_1.webp', alt: 'Vienna Arch 1', model: 'NIKON D3300', iso: '400', s: '1/640', f: '140' },
  { file: 'vienna_arch_2.webp', alt: 'Vienna Arch 2', model: 'NIKON D3300', iso: '100', s: '1/200', f: '90' },
  { file: 'vienna_arch_3.webp', alt: 'Vienna Arch 3', model: 'NIKON D3300', iso: '100', s: '1/250', f: '110' },
  { file: 'vienna_arch_4.webp', alt: 'Vienna Arch 4', model: 'NIKON D3300', iso: '100', s: '1/200', f: '110' },
  { file: 'vienna_carousel.webp', alt: 'Vienna Carousel', model: 'NIKON D3300', iso: '100', s: '1/100', f: '110' },
  { file: 'vienna_kirche_1.webp', alt: 'Vienna Kirche 1', model: 'NIKON D3300', iso: '400', s: '1/20', f: '63' },
  { file: 'vienna_kirche_2.webp', alt: 'Vienna Kirche 2', model: 'NIKON D3300', iso: '400', s: '1/250', f: '63' },
  { file: 'vienna_kirche_3.webp', alt: 'Vienna Kirche 3', model: 'NIKON D3300', iso: '400', s: '1/15', f: '63' },
  { file: 'vienna_kirche_4.webp', alt: 'Vienna Kirche 4', model: 'NIKON D3300', iso: '400', s: '1/15', f: '63' },
  { file: 'vienna_life.webp', alt: 'Vienna Life', model: 'NIKON D3300', iso: '100', s: '1/100', f: '130' },
  { file: 'vienna_statue_1.webp', alt: 'Vienna Statue 1', model: 'NIKON D3300', iso: '100', s: '1/125', f: '110' },
  { file: 'vienna_statue_2.webp', alt: 'Vienna Statue 2', model: 'NIKON D3300', iso: '100', s: '1/80', f: '130' },
  { file: 'walp.jpg', alt: 'Walp', model: 'D3300', iso: '100', s: '1/400', f: '110' },
];

window.onload = function() {
  console.log("Page loaded");

  initTgButton();
  
  handleClockState();

  window.addEventListener('resize', handleClockState);

  setupNavigation();

  renderGallery();
  initLightbox();
  initSlideshow();
};

function initTgButton() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');
  
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('contracted');
    handleClockState();
  });
}

function handleClockState() {
  const sidebar = document.getElementById('sidebar');
  
  const isContracted = sidebar.classList.contains('contracted');
  const isMobile = window.innerWidth <= 768;

  if (isContracted || isMobile) {
    if (clockInterval) {
      clearInterval(clockInterval);
      clockInterval = null;
    }
  } 
  else {
    if (!clockInterval) {
      updateClock();
      clockInterval = setInterval(updateClock, 1000);
    }
  }
}

function updateClock() {
  const clockElement = document.getElementById('local-clock');
  
  const now = new Date();
  
  const timeString = now.toLocaleTimeString('en-RO', {
    timeZone: 'Europe/Bucharest',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  clockElement.textContent = timeString;
  //console.log("tick");
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .home-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (!href.startsWith('#')) {
        return;
      }

      // e.preventDefault(); 
      
      const targetName = href.substring(1);

      switchView(targetName);
    });
  });
}

function switchView(viewName) {
  
  // Hide all views
  document.querySelectorAll('.view-section').forEach(el => {
    el.classList.remove('active-view');
    el.classList.add('hidden-view');
  });

  const targetElement = document.getElementById(viewName + '-view');
  
  if (targetElement) {
    targetElement.classList.remove('hidden-view');
    targetElement.classList.add('active-view');
  } else {
    document.getElementById('home-view').classList.remove('hidden-view');
    document.getElementById('home-view').classList.add('active-view');
  }
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Generate HTML for each photo
  photoData.forEach(photo => {

    const card = document.createElement('div');
    card.className = 'photo-item';
    fstop = photo.f / 10;
    
    card.innerHTML = `
      <img src="media/photos/${photo.file}" alt="${photo.alt}" loading="lazy">
      <div class="photo-meta">
        <span class="meta-tag">ISO ${photo.iso}</span>
        <span class="meta-tag">${photo.s}s</span>
        <span class="meta-tag">f/${fstop}</span>
        <span class="meta-tag">${photo.model}</span>
      </div>
    `;

    // Add to grid
    grid.appendChild(card);
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-btn');

  const photoGrid = document.querySelector('.photo-grid');
  
  if (photoGrid) {
    photoGrid.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        lightbox.classList.add('active');
        lightboxImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
}

function initSlideshow() {
  const slides = document.querySelectorAll('.slide-img');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 5000; // 5000ms = 5 seconds per image

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, slideInterval);
}
