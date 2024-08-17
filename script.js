function clickMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
    

    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    menuButton.style.display = menu.classList.contains('active') ? 'none' : 'block';
    closeButton.style.display = menu.classList.contains('active') ? 'block' : 'none';
}




  
new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 5.5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });




