function getFormData(){
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const city = document.getElementById("city").value
    const zipCode = document.getElementById("zip-code").value
    const check = checkboxIsChecked()

    return{
        firstName,
        lastName,
        city,
        zipCode,
        check
    }
}

function isNumber(string){
    return !isNaN(string)
}

function isLength(string, integer){
    return string.length === integer 
}

function checkboxIsChecked(){
    return document.getElementById("check").checked
}

function validateFormData({firstName, lastName, city, zipCode}){
    return !isLength (firstName, 0) &&
            !isLength (lastName, 0) &&
            !isLength (city, 0) &&
            isNumber (zipCode) &&
            checkboxIsChecked ()
}

function resetForm(){
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip-code").value = "";
    document.getElementById("check").checked = false;
}

function submit(){
    const data = getFormData()
    const warning = document.getElementById("warning")
    if (validateFormData(data)){
        warning.textContent = "";
    }else{
       warning.textContent = "Periksa form anda sekali lagi"
    }
}