(function(){
  const btn = document.querySelector('[data-menu]');
  const sidebar = document.querySelector('.sidebar');
  if(btn && sidebar){
    btn.addEventListener('click', ()=>{
      sidebar.classList.toggle('open');
      const expanded = sidebar.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    document.addEventListener('click', (e)=>{
      if(window.matchMedia('(max-width: 980px)').matches){
        const clickedInside = sidebar.contains(e.target) || btn.contains(e.target);
        if(!clickedInside) sidebar.classList.remove('open');
      }
    });
  }

  // Mark active nav link (by pathname)
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();
