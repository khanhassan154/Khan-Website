const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("messege");
const subject = document.getElementById("subject");
const con = document.getElementById("country");
const eqp = document.getElementById("equipment");

function sendEmail(){

    const bodyMessege = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Messege: ${mess.value}<br> Country: ${con.value}<br> Equipment: ${eqp.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "khanhaasan154@gmail.com",
        Password : "9D5AB51696A277F30604E993B150E44A090A",
        To : 'khanhaasan154@gmail.com',
        From : "khanhaasan154@gmail.com",
        Subject : con.value,
        Body : bodyMessege
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Messege Sent Successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value !=""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () =>{
            checkEmail();
        });

        item.addEventListener("keyup", () =>{
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([A-Z\a-z\d\._-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != ""){
            errorTxtEmail.innerText = "Enter a Valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address Can't Be Blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs(); 

    if (!fullName.classList.contains("error") && !email.classList.contains("error")
    && !phone.classList.contains("error") && !con.classList.contains("error")
     && !mess.classList.contains("error") && !eqp.classList.contains("error")){
        sendEmail();
    }

    
});
