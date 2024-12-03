// show HIDDEN - PASSWORD

const showHiddenPassword = ()=> {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");

    iconEye.addEventListener("click", ()=> {
        // chnge password to text
        if(input.type ==="password"){
            input.type = "text";
        }else{

        }
    });
};

showHiddenPassword();