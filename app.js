//
//service_y1eyhth
//
let isModalOpen = false;
let  contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll("shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolint = isOdd ? -1 : 1;
    shapes[i].Style.transform = 'translate(${x * boolint}px, ${y * boolint}px)'
  }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--landing')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs 
      .sendForm(
        'service_y1eyhth',
        'template_n31sqcs',
        event.target,
        'kGK5i7khQu0W_GfCm'
    ).then(() => {
        //throw new Error("error");
        loading.classList.remove('modal__overlay--visible');
        success.classList +=" modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
        "this email service is temporarly unavaliable.please contact me directly with betelhemfikadu75@gmail.com"
        );
    })
       // setTimeout(() => {
            
           // console.log('it worked 1')
       // },1000);
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
      return  document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
    //console.log('toggleModal()')
}