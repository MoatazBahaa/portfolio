document.querySelectorAll('.skills-section .skill-item .progress-bar').forEach(progress => {
  const value = progress.dataset.value;
  progress.style.width = value;
  progress.children[0].textContent = value;
})

// nav menu
const menuBtn = document.querySelector('.toggle-menu-btn');
menuBtn.addEventListener('click', (ev) => {
  document.querySelector('.nav-menu').classList.toggle('show');
  const icon = menuBtn.querySelector('i');
  if (icon.classList.contains('fa-bars')) {
    icon.className = 'fa fa-times';
  }
  else {
    icon.className = 'fa fa-bars';
  }
});

// portfolio fiter
(() => {
  const filterContainer = document.querySelector('.portfolio-filter'),
  itmes = document.querySelectorAll('.portfolio-items .item');
  filterContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-item') &&
    !event.target.classList.contains('active')
    ) {
      const currentActive = filterContainer.querySelector('.active');
      currentActive.classList.remove('active', 'inner-shadow');
      currentActive.classList.add('outer-shadow');
      event.target.classList.remove('outer-shadow');
      event.target.classList.add('active', 'inner-shadow');
      
      const target = event.target.dataset.target;
      itmes.forEach((item) => {
        if (target === 'all' || item.dataset.category === target) {
          item.classList.add('show');
          item.classList.remove('hide');
        }
        else {
          item.classList.add('hide');
          item.classList.remove('show');
        }
      })
    }
  });
})();



document.querySelectorAll('.nav-menu ul a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const currentActive = document.querySelector('.nav-menu ul a.active');
    currentActive.classList.remove('active', 'inner-shadow');
    currentActive.classList.add('outer-shadow');
    event.target.classList.add('active', 'inner-shadow');
    event.target.classList.remove('outer-shadow');

    document.querySelector('.nav-menu').classList.toggle('show');
    const icon = document.querySelector('.toggle-menu-btn i');
    if (icon.classList.contains('fa-bars')) {
      icon.className = 'fa fa-times';
    }
    else {
      icon.className = 'fa fa-bars';
    }
  });
})


// day-light 
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  dayNight.querySelector('i').classList.toggle('fa-sun');
})
window.addEventListener('load', (event) => {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');  
  }
  else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
})

window.addEventListener('scroll', (event) => {
  console.log();
})