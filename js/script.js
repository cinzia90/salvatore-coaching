function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('hidden');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.add('hidden');
}

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form: apre WhatsApp con messaggio pre-compilato
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var nome      = document.getElementById('nome').value.trim();
    var cognome   = document.getElementById('cognome').value.trim();
    var telefono  = document.getElementById('telefono').value.trim();
    var email     = document.getElementById('email').value.trim();
    var percorso  = document.getElementById('percorso').value;
    var obiettivo = document.getElementById('obiettivo').value.trim();

    var waMsg = 'Ciao Salvatore! Sono ' + nome + ' ' + cognome + '.\n\n';
    if (percorso) {
      waMsg += 'Sono intenzionato/a a intraprendere un percorso di coaching con te: ' + percorso + '.\n\n';
    }
    waMsg += 'Ti allego i miei contatti:\n';
    if (telefono) waMsg += 'Telefono: ' + telefono + '\n';
    if (email)    waMsg += 'Email: ' + email + '\n';
    if (obiettivo) {
      waMsg += '\nIl mio obiettivo e\': ' + obiettivo;
    }

    window.open('https://wa.me/393272345980?text=' + encodeURIComponent(waMsg), '_blank');

    var btn = form.querySelector('.btn-form');
    btn.textContent = 'Apertura WhatsApp...';
    btn.style.background = '#8B6914';
    setTimeout(function() {
      btn.textContent = 'Invia su WhatsApp';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}


// Video chi sono: sequenza automatica video-3 -> video-1 -> loop
(function() {
  var videoEl = document.getElementById('chisono-video');
  if (!videoEl) return;
  var sources = ['img/video-3.mp4', 'img/video-1.mp4'];
  var current = 0;

  videoEl.addEventListener('ended', function() {
    current = (current + 1) % sources.length;
    videoEl.src = sources[current];
    videoEl.load();
    videoEl.play();
  });
})();
