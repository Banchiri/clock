// Initialize the page
function initPage() {
    updateClock();  // Update the clock when the page loads
    setInterval(updateClock, 1000);  // Update the clock every second
  
    // Set the initial theme based on time of day
    setThemeBasedOnTime();
  }
  
  // Update the clock
  function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    // Format time with leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Set the theme based on the time of day
  function setThemeBasedOnTime() {
    const currentHour = new Date().getHours();
    const body = document.body;
  
    if (currentHour >= 6 && currentHour < 18) {
      // Day time (6 AM to 6 PM) - Light mode
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      // Night time (6 PM to 6 AM) - Dark mode
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }
  
  // Event listener for the mode toggle button
  document.addEventListener('DOMContentLoaded', function () {
    const modeToggleButton = document.getElementById('modeToggle');
    
    
    if (modeToggleButton) {
      modeToggleButton.addEventListener('click', function () {
        const body = document.body;
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
      });
    }
  });
  
  // Initialize the page
  initPage();
  