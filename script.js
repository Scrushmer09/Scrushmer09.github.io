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
  