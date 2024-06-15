

const bars2 = document.querySelectorAll('.left-img');


window.addEventListener('scroll', () => {

    bars.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.classList.remove('animateO');
            bar.classList.add('animateR');
        } 
        else {
            bar.classList.remove('animateR');
            bar.classList.add('animateO');

        }
    });
});
window.addEventListener('scroll', () => {
    bars2.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.classList.remove('animateO2');
            bar.classList.add('animateL');
        } else {
            bar.classList.remove('animateL');
            bar.classList.add('animateO2');

        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        // \\rect.top >=   // animation for scroll up
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) // animation for scroll down
    );
}



/* for send an email */
function sendEmail() {
    const sendEmailButton = document.getElementById("sendEmailButton");
    sendEmailButton.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const moreInfo = document.getElementById("moreInfo").value;


        // Construct the mailto link with pre-filled data
        const mailtoLink = `mailto:safiriservice@gmail.com?subject=Customer Support Request&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0Ahelp me in: ${moreInfo}`;
        // Open the user's email client with the pre-filled data
        window.location.href = mailtoLink;
        
    });
}

// for navigation 
function goJobWeb(){
    window.location.href = "job_html.html";
}

function goMissionWeb(){
    window.location.href = "service_html.html";
}

function gohouseWeb(){
    window.location.href = "house_html.html";
}