/*
  =======================================
  JAVASCRIPT FOR THE STICKY RAMADAN BANNER
  =======================================
*/
(function() {
    
    // --- 1. CONFIGURATION ---
    
    // SET THE TARGET DATE: Ramadan 2026 starts on/around February 27, 2026
    const countDownDate = new Date("Feb 27, 2026 00:00:00").getTime();
    const storageKey = 'ramadanBannerDismissed_2026';
  
    // --- 2. GET HTML ELEMENTS ---
    const banner = document.getElementById('ramadan-banner');
    const closeBtn = document.getElementById('ramadan-close-btn');
    const timerContainer = document.getElementById('ramadan-timer-container');
    
    const daysEl = document.getElementById("ramadan-days");
    const hoursEl = document.getElementById("ramadan-hours");
    const minutesEl = document.getElementById("ramadan-minutes");
    const secondsEl = document.getElementById("ramadan-seconds");
  
    // If the banner doesn't exist on the page, stop running the script
    if (!banner) {
      return;
    }
  
    // --- 3. DISMISSAL LOGIC ---
    
    // Check localStorage to see if user has already closed the banner
    if (localStorage.getItem(storageKey) === 'true') {
      banner.style.display = 'none';
      return; // Stop the script if banner is dismissed
    }
  
    // Add click event to the close button
    closeBtn.addEventListener('click', function() {
      // Fade out the banner
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(-100px)';
      
      // Hide it completely after the animation
      setTimeout(function() {
        banner.style.display = 'none';
      }, 500);
      
      // Save the "closed" state in localStorage
      localStorage.setItem(storageKey, 'true');
    });
  
    // --- 4. COUNTDOWN LOGIC ---
    
    // Helper function to add a leading zero
    const pad = (num) => (num < 10 ? "0" + num : num);
  
    // This function calculates and updates the time
    function updateTimer() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
  
      // If the countdown is over
      if (distance < 0) {
        clearInterval(timerInterval);
        timerContainer.innerHTML = "<h4 class='ramadan-title' style='color: var(--primary-accent, #E63926);'>Ramadan Mubarak!</h4>";
        return;
      }
  
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Update the HTML
      daysEl.innerHTML = pad(days);
      hoursEl.innerHTML = pad(hours);
      minutesEl.innerHTML = pad(minutes);
      secondsEl.innerHTML = pad(seconds);
  
      // Add the .ready class to fade in the numbers (flicker-fix)
      timerContainer.classList.add('ready');
    }
  
    // Run the timer function immediately to prevent flicker
    updateTimer();
    
    // Set an interval to update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);
  
  })(); // Self-executing function to keep variables local