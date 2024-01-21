$('.slider-nav').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 785,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  

let modal = document.getElementById('form-window')
function showFirstAdapt(){
    modal.classList.add('active-form')
}
function closeFirstAdapt(){
    modal.classList.remove('active-form')
}


let Mobilemodal = document.getElementById('mobilelAdapt')
function showFirstMobile(){
    Mobilemodal.classList.add('mobile-modal')
}
function closeFirstMobile(){
    Mobilemodal.classList.remove('mobile-modal')
}


const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault()
    }
  }
}
