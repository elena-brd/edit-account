const inputText = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputDate = document.getElementById('input-date');

const formInput = document.getElementById('form-input');
const saveBtn = document.getElementById('btn-save');
const cancelBtn = document.getElementById('btn-cancel');

const bgDark = document.querySelectorAll('.bg-dark');

function onFocusText() {
    inputText.style.outlineStyle = 'solid';
    inputText.style.outlineColor = '#fb8500';
    inputText.style.outlineWidth = '2px';


    inputEmail.style.outlineStyle = 'solid';
    inputEmail.style.outlineColor = '#454545';
    inputEmail.style.outlineWidth = '1px';

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#454545';
    inputDate.style.outlineWidth = '1px';
}

function onFocusEmail() {

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#454545';
    inputDate.style.outlineWidth = '1px';

    inputEmail.style.outlineStyle = 'solid';
    inputEmail.style.outlineColor = '#fb8500';
    inputEmail.style.outlineWidth = '1px';

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#454545';
    inputDate.style.outlineWidth = '1px';
}

function onFocusDate() {

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#454545';
    inputDate.style.outlineWidth = '1px';

    inputEmail.style.outlineStyle = 'solid';
    inputEmail.style.outlineColor = '#454545';
    inputEmail.style.outlineWidth = '1px';

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#fb8500';
    inputDate.style.outlineWidth = '1px';
}

function onBlur() {
    inputText.style.outlineStyle = 'solid';
    inputText.style.outlineColor = '#454545';
    inputText.style.outlineWidth = '1px';

    inputEmail.style.outlineStyle = 'solid';
    inputEmail.style.outlineColor = '#454545';
    inputEmail.style.outlineWidth = '1px';

    inputDate.style.outlineStyle = 'solid';
    inputDate.style.outlineColor = '#454545';
    inputDate.style.outlineWidth = '1px';
}

function saveChanges() {
    edit.textContent = 'Changes are saved';
}

function cancelChanges() {
    edit.textContent = 'Cancelled';
}


inputText.addEventListener('focus', onFocusText);
inputText.addEventListener('blur', onBlur);
inputEmail.addEventListener('focus', onFocusEmail);
inputEmail.addEventListener('blur', onBlur);
inputDate.addEventListener('focus', onFocusDate);
inputDate.addEventListener('blur', onBlur);


saveBtn.addEventListener('click', saveChanges);
cancelBtn.addEventListener('click', cancelChanges);







