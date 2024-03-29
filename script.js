// Check Point one Script 

// D. Auto-changing country names
const locations = ["United States", "India", "France", "Japan", "Korea", "Dubai"];
let index = 0;

// function changeLocation() {
//   document.getElementById('location').textContent = locations[index];
//   index = (index + 1) % locations.length;
// }

// setInterval(changeLocation, 900);

setInterval(() => {
    document.getElementById("location").innerText = locations[index];
    index = (index + 1) % locations.length;
}, 2000);



// Checkpoint two script 

window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd; 
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate; 
}

function bookNow() {
    
    let destination = document.getElementById('destination').value;
    let people = document.getElementById('people').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description').value.length;
     
    if (destination && people && startDate && endDate) {
        if(description<50 || description>500){
            alert('Description must be of length 50-500');
        }
        else{
            alert('Booking successful!'); 
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        alert('Please fill in all fields.');
    }    
}

const packages = [
    {
        image: "Images/p1.png", 
        place: "United States",
        description: "Enjoy the amusement parks, festivals, gambling, golf courses, historical buildings and landmarks, hotels, museums, galleries, outdoor recreation, spas, restaurants and sports.",
        rate: '1000 $',
        rating: 4
    },
    {
        image: "Images/p2.jpg",
        place: "India",
        description: "India is a place where colour is doubly bright. Pinks that scald your eyes, blues you could drown in.",
        rate: "1100 $",
        rating: 5
    },
    {
        image: "Images/p3.jpg",
        place: "France",
        description: "France is the most civilized country in the world and doesn't care who knows it. France is a little slice of heaven.",
        rate: "500 $",
        rating: 3
    },
    {
        image: "Images/p4.jpg",
        place: "Japan",
        description: "Every corner of Japan holds a story waiting to be told. Immerse in the beauty and traditions of Japan.",
        rate: "200 $",
        rating: 2
    },
    {
        image: "Images/p5.jpg",
        place: "Goa",
        description: "Goa is a place where the sun, sea, and serenity come together.",
        rate: "400 $",
        rating: 4
    },
    {
        image: "Images/p6.jpg",
        place: "Korea",
        description: "Are you a BTS or KDrama fan? Then this is a perfect to visit!! You can also feel the eternal peace!",
        rate: "900 $",
        rating: 3
    },
    {
        image: "Images/p7.jpg",
        place: "Dubai",
        description: "Dubai, with all of its glitz and glamour, rose in the heart of the desert.",
        rate: "2550 $",
        rating: 4
    },
    {
        image: "Images/p8.jpg",
        place: "Australia",
        description: "Australia is a nation of compassion. Courage and compassion. And the third of these great values, resilience.",
        rate: "280 $",
        rating: 3
    },
    {
        image: "Images/p9.jpg",
        place: "Maldives",
        description: "The Maldives - the ultimate escape from reality. Spend your best time in Island!",
        rate: "200 $",
        rating: 5
    },
]

let cardsContainer = document.getElementById('main-container-2'); 
for(let i=0;i<packages.length;i++){
    let ratingStar = '';
    for(let stars = 0; stars<packages[i].rating; stars++){
        ratingStar+='⭐';
    }
    cardsContainer.innerHTML += 
    `<div class="card">
        <img src="${packages[i].image}" alt="">
        <h2>${packages[i].place}</h2>
        <p>${packages[i].description}</p>
        <div class='rateRating'>
            <h3>${packages[i].rate}</h3>
            <h3 class='stars'>${ratingStar}</h3>
        </div>
        <button class='service'>Book Now</button>
    </div>` 
}




const services = [
    {
        image: "Images/s1.jpg", 
        place: "Affordable Hotel", 
        rate: '100$ - 1000$' 
    },
    {
        image: "Images/s2.jpg", 
        place: "Food and Drinks", 
        rate: '20$ - 100$' 
    },
    {
        image: "Images/s3.jpg", 
        place: "Safety Guide", 
        rate: '50 $' 
    },
    
    {
        image: "Images/s4.jpg", 
        place: "Wifi Access",
        rate: '2$ - 8$' 
    },
    
]


    let cardsContainer2 = document.getElementById('main-container-3'); 
    for(let i=0;i<services.length;i++){ 
        cardsContainer2.innerHTML += 
        `<div class="card">
            <img src="${services[i].image}" alt="">
            <h3>${services[i].place}</h3> 
            <h4>${services[i].rate}</h4> 
            <button class='service'>Try Now</button>
        </div>` 
    }


// Checkpoint 4 script


  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function validateRegistrationForm() {
    const form = document.getElementById("Login-Form");
    const email = form.email.value;
    const pwd = form.pwd.value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (pwd.length < 8) {
      alert("Password should be at least 8 characters long.");
      return false;
    }

    return true;
  }

  function showLoginModal() {
    const loginModal = new bootstrap.Modal(document.getElementById("LoginModal"), {
      backdrop: "static",
      keyboard: false,
    });
    LoginModal.show();
  }

  function showRegisterLink() {
    window.location.href = "index.html";
  }






var registerModal = document.getElementById("RegisterModal");
                                
// Get the button that opens the modal
var btn = document.getElementById("submit-btn")

// When the user clicks the button, open the modal
    btn.onclick = function() {
    registerModal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    registerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}



function setMinDOB() {
var minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0];  
document.getElementById('dob').max = minDate; 
}
document.getElementById('dob').addEventListener('click', setMinDOB);
document.getElementById("Registration-Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
   
    let fullname = document.getElementById('fullName');
    let contact = document.getElementById('contact');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let conf_password = document.getElementById('confpassword'); 
    if(fullname.value!='' && contact.value!='' && email.value!='' && password.value!='' && conf_password!=''){
        alert('Registration Successfull!');
        fullname.value = '';
        contact.value = '';
        email.value = '';
        password.value = '';
        conf_password.value = '';
        registerModal.style.display = "none";
    }
    else{
        alert('Please fill all the details');
    }
});