const navbarBtn = document.querySelector('.navbarr__btn'),
    navbarArrow = document.querySelector('.navbarr__arrow'),
    navbarMenu = document.querySelector('.navbarr__menu');

navbarBtn.addEventListener('click', () => {
    navbarArrow.classList.toggle('click--arrow')
    navbarMenu.classList.toggle('click--menu')
})

const form = document.querySelector('.regster__right'),
    formName = document.querySelector('.f-name'),
    formMail = document.querySelector('.f-email'),
    formBtn = document.querySelector('.regster__right__btn'),
    formLabelName = document.querySelector('.regster__right__name'),
    formLabelEmail = document.querySelector('.regster__right__email');
const emailSpan = document.createComment('span');


let errorMail = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formName.value == '') {
        const nameSpan = document.createElement('span');
        nameSpan.textContent = ('Пожалуйста, введите имя')
        nameSpan.classList.add('name-span')
        formLabelName.appendChild(nameSpan)
    }
    if (!formMail.value) {
        const mailSpan = document.querySelector('span')
        mailSpan.textContent = ('Пожалуйста, введите адрес электронной почты')
        mailSpan.classList.add('email-span')
        formLabelEmail.appendChild(mailSpan)
    }
})