const bars = document.querySelectorAll('.right-img');
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






const Show = document.getElementById("Show");
const hiddenField2 = document.getElementById("hidden-field2");

Show.addEventListener("click", () => {
    // Toggle the visibility of the hidden field
    if (hiddenField2.style.display === "none") {
        hiddenField2.style.display = "flex";
    } else {
        hiddenField2.style.display = "none";
    }
});