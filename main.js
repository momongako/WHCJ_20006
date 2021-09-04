function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    // is Number
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    // is email
}

function validateForm() {

    let validated = true;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('telephone').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('document').value;
    let SITE_URL = 'http://itplus-academy.edu.vn/';




    if (name == "" || isNumber(name)) {
        validated = false;
        document.getElementById('errorname').innerHTML = "không để trống, không chứa chữ số";
        $('#name').focus();


    } else {

        document.getElementById('errorname').innerHTML = "";

    }

    if (phone == "" || !isNumber(phone)) {
        validated = false;
        document.getElementById('errorphone').innerHTML = "không để trống, dữ liệu nhập vào phải là số";
        $('#telephone').focus();

    } else {

        document.getElementById('errorphone').innerHTML = "";

    }

    if (email == "" || !validateEmail(email)) {
        validated = false;
        document.getElementById('erroremail').innerHTML = "không để trống, phải để đúng định dạng";
        $('#email').focus();



    } else {

        document.getElementById('erroremail').innerHTML = "";
    }

    if (comments == "") {
        validated = false;
        document.getElementById('errorcomment').innerHTML = "không được để trống";
        $('#document').focus();

    } else {

        document.getElementById('errorcomment').innerHTML = "";
    }
    if (validated == true) {
        alert("Gửi thông tin liên hệ thành công");
    }
    return validated;


}