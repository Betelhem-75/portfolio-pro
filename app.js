//
//service_y1eyhth
//
let isModalOpen = false;
let  contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-them")
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