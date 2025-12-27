//Login Section
const page = document.getElementById('container');
window.addEventListener('load', function() {
    console.log('function triggered');
    page.classList.add('hidden');
});
// Button Onclick Animation
let btn = document.getElementById('loginBtn');
function startAnimation() {
    btn.classList.add('animate');
}
startAnimation();
//Validate Username
function checkUsername(username) {
    let format = /^[a-zA-Z0-9_]{3,15}$/;
    return format.test(username);
}
btn.addEventListener('click', function(){
    let login = document.getElementById('login')
    let username = document.getElementById('username').value.trim();
    if (!checkUsername(username)) {
        alert("Please enter your username");
        return false; //Prevents form submission
    } else {
        alert("Welcome, " + username);
    }
    login.classList.add('hide');//Hide Login Form
    page.style.display = 'block'; //Display Main Page
    page.classList.add('visible');
})

// Main Page Display
// Function to format time
function formatTime(hours, minutes, seconds) {
    // Local scope variables
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    return `${h}:${m}:${s}`; // Return h, m, s values
}
// Function to update clock every second
function updateClock() {
    const now = new Date(); 
    const formattedTime = formatTime(now.getHours(), now.getMinutes(), now.getSeconds());
    document.getElementById("clock").textContent = formattedTime;
}
// Trigger clock update every second
setInterval(updateClock, 1000);

// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const toggleButton1 = document.getElementById("theme-toggle1");
toggleButton1.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/*const themeButtons = document.querySelectorAll("#theme-toggle, #theme-toggle1");
themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});*/ //Another method of scripting the theme toggle

// Function to display questions
const readBtn = document.getElementById('read');
const notReadBtn = document.getElementById('notRead');
const question = document.getElementById('questions');

readBtn.addEventListener('click', () => {
    question.classList.add('clear'); // clear blur
});

notReadBtn.addEventListener('click', () => {
    question.classList.remove('clear'); // reapply blur

    // Reset all buttons inside questions
    const answerButtons = question.querySelectorAll('button.answer');
    answerButtons.forEach(btn => {
        btn.disabled = false;              // re-enable buttons
        btn.style.backgroundColor = '';    // reset styles
        btn.style.color = '';
    });
    // Reset all inputs inside questions
    const inputs = question.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';                  // clear text fields
    });

    alert("Take your time reading the passage");
});


// Choose only one answer
const answers = document.querySelectorAll('.answer');
answers.forEach(answer => {
    answer.addEventListener('click', () => {
        const options = answer.getAttribute('name');
        document.querySelectorAll(`button[name="${options}"]`).forEach(otherAnswer=> {
            otherAnswer.disabled = true;
        });
        answer.classList.add('click');
        answer.style.backgroundColor = 'rgba(255, 241, 51, 0.904)';
        answer.style.color = '#000000';
    })
});


   