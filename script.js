
const openNav = document.querySelector(".icon1")
const closeNav = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const positionMenu = Menu.getBoundingClientRect().left;

openNav.addEventListener("click", () => {

    if (positionMenu < 0) {
        Menu.classList.add("monter")
    }
})

closeNav.addEventListener("click", () => {
    if (positionMenu < 0) {
        Menu.classList.remove("monter")
    }
})

function payment() {

    let mail = document.getElementById("email").value

    if (mail.includes('@') && mail.includes('.') && mail.length > 3) {

        let templateParams = {
            commande:  document.querySelector(".pay").id,
            client: mail
        }

        emailjs.send('service_zuvr029', 'template_yry4syg', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = "../congratulations.html"
            }, function(error) {
                console.log('FAILED...', error);
            });

    }
    else
        alert("Votre mail n'est pas correct")


}

/*
function sendMail() {
    let link = "mailto:me@example.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;

    window.location.href = link;
}*/
