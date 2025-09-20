const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

function showSection(sectionId) {
  sections.forEach(s => {
    if (s.id === sectionId) {
      s.style.opacity = 0;
      s.classList.add('active');
      setTimeout(() => { s.style.opacity = 1; }, 50);
    } else {
      s.style.opacity = 0;
      s.classList.remove('active');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('onclick')?.includes(sectionId)) {
      link.style.color = '#d9a066';
    } else {
      link.style.color = '#fff';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

