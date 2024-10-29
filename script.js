document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
  
    const textArray = ['Ethical Hacker', 'Cybersecurity Professional', 'Penetration Tester', 'SOC Analyst', 'Security Engineer', 'Cyber Security Analyst'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    setTimeout(type, newTextDelay + 250);
  });

// Hacked info
fetch('https://ipinfo.io?token=1884e42dd0e71e')
.then(response => response.json())
.then(data => {
    const message = `
        <h3>Looks like I've got you!</h3>
        <h5>I know you're hiding in <strong style="color:red;">${data.city}, ${data.region}, ${data.country} </strong>.</h5>
        <h5>Your IP address is <strong style="color:red;">${data.ip}</strong>, and your ISP is <strong style="color:red;">${data.org}</strong>.</h5>
        <h5> Thought you could sneak in? Think again!</h5>
    `;
    document.getElementById('hacked-info').innerHTML = message;
})
.catch(error => console.error('Error fetching IP info:', error));

function showPhoneNumber() {
  document.getElementById("phone-display").classList.remove("d-none");
}

function copyPhoneNumber() {
  // Get the phone number text
  var phoneNumber = document.getElementById("phone-number").innerText;
  navigator.clipboard.writeText(phoneNumber).then(() => {
      alert("Phone number copied to clipboard!");
  });
}

  
