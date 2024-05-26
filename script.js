let sections =document.querySelectorAll('section');
let navlink =document.querySelectorAll('header nav a');


//for menu 
let menuicon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll=()=>{  
    // for header background when scrolling
    let h=document.querySelector('header');
    h.classList.toggle('newheader',window.scrollY>100);

    // for activating navbar a 
    sections.forEach(sec=>{
         let top=window.scrollY;
         let offset =sec.offsetTop - 500;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });

            // activating sections for animation
            sec.classList.add('animate-section');
        }
        else{
            sec.classList.remove('animate-section');
        }
    }); 


    //removing toggle icon after clicking the menu items
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // Footer animation

    let footer=document.querySelector('footer');
    footer.classList.toggle('animate-section',this.innerHeight + this.scrollY>=document.scrollingElement.scrollHeight);
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('emailInput');
    function openPopup() {
        popupOverlay.style.display = 'block';
    }
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }
    function submitForm() {
        const email = emailInput.value;
        console.log(`Email submitted: ${email}`);
        closePopupFunc(); 

    }

    openPopup();
    closePopup.addEventListener('click', closePopupFunc);
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });   

});

function sendEmail(){
    Email.send({
        Host:"smtp.gmail.com",
        Username:"temu1537@gmail.com",
        Password:"fbey zyne njxy ujmx",
        To: "temu3c@gmail.com",
        From:document.getElementById("email").value,
        Subject: document.getElementById("subject"),
        Body:"Name: "+ document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: "+ document.getElementById("phone").value
        + "<br> Message: "+document.getElementById("message").value
    }).then(
        message=>alert("Message Sent Successfully\nThank You \nTemesgan Nedi")
    );
}

function sendEmail2(){
    Email.send({
        Host:"smtp.gmail.com",
        Username:"temu1537@gmail.com",
        Password:"fbey zyne njxy ujmx",
        To: "temu3c@gmail.com",
        From:document.getElementByClass("email2").value,
        Subject: "Form From Website",
        Body:" Email: " + document.getElementByClass("email2").value
        + "Phone Number: "+ document.getElementByClass("phone2").value
        + "Course: "+document.getElementByClass("course").value
    }).then(
        message=>alert("Form Submitted Successfully\nThank You\nTmessgan Nedi")
    );
}

document.addEventListener('contextmenu', event => event.preventDefault());
// function sendEmail(){
//     var para={
//         email: document.getElementsById('email').value,
//         name: document.getElementsById('name').value,
//         phone: document.getElementsById('phone').value,
//         subject: document.getElementsById('subject').value,
//         message: document.getElementsById('message').value,
//     };

//     const servid="service_9e1wmaa";
//     const temp="template_yers29t";

//     emailjs
//     .send(servid,temp,para)
//     .then((res)=>{
//          document.getElementsById('email').value='';
//          document.getElementsById('name').value='';
//          document.getElementsById('phone').value='';
//          document.getElementsById('subject').value='';
//          document.getElementsById('message').value='';
//          console.log(res);
//          alert(sent);
//     })
//     .catch((err) => console.log(err));
// }


// function sendEmail(){
//     var para={
//         email: document.getElementsByClassName('email').value,
//         phone: document.getElementsByClassName('phone').value,
//         course: document.getElementsByClassName('course').value
//     };

//     const servid="service_9e1wmaa";
//     const temp="template_yers29t";

//     emailjs
//     .send(servid,temp,para)
//     .then((res)=>{
//          document.getElementsByClassName('email').value='';
//          document.getElementsByClassName('phone').value='';
//          document.getElementsByClassName('course').value='';
//          console.log(res);
//          alert(sent);
//     })
//     .catch((err) => console.log(err));
// }


