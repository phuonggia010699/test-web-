// Minimal JS for small interactions (menu)
document.addEventListener('click', function(e){
  // close mobile menu when clicking outside
  const nav = document.getElementById('mainNav');
  if(!nav) return;
  if(nav.classList.contains('open') && !e.target.closest('.nav-toggle') && !e.target.closest('.main-nav')){
    nav.classList.remove('open');
  }
});
