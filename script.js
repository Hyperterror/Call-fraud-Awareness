
// Fraud content data
const fraudContents = {
  1: {
      icon: "🔒",
      title: "Digital Arrest",
      content: `
          <p>Scammers pretend to be law enforcement officials (often claiming to be from agencies like the CBI, Income Tax Department, or Police) and claim your device or identity is involved in illegal activities like money laundering, drug trafficking, or tax evasion.</p>
          <p>They create elaborate scenarios where they threaten immediate arrest unless you comply with their demands. Victims are often instructed to stay on video calls for hours or days (so-called "digital arrest") while the scammers empty their bank accounts.</p>
          <p>These scams often target young professionals and students, using personal information gathered from social media to make their threats seem credible.</p>
      `,
      tips: [
          "No law enforcement agency will demand money over phone for case clearance",
          "They won't ask you to stay on video call for 'verification'",
          "Never share device control with unknown callers",
          "Genuine officials will never threaten immediate arrest",
          "If threatened, contact your local police station directly"
      ]
  },
  2: {
      icon: "📱",
      title: "OTP Scam Calls",
      content: `
          <p>Fraudsters call pretending to be from banks, service providers, or government agencies, asking for OTPs under various pretexts like updating KYC, refunding excess payments, or preventing account suspension.</p>
          <p>They often use spoofing technology to make the call appear to come from a legitimate number. Once they obtain the OTP, they can quickly gain access to your accounts, make unauthorized transactions, or even take over your digital identity.</p>
          <p>These scams are particularly dangerous because the OTP provides instant access, and victims often realize too late that they've been scammed.</p>
      `,
      tips: [
          "Never share OTPs with anyone - banks never ask for them",
          "Be wary of calls claiming to be from 'customer care'",
          "If you receive unexpected OTPs, check your accounts immediately",
          "Don't call back numbers provided by suspicious callers",
          "Enable transaction alerts for all banking activities"
      ]
  },
  3: {
      icon: "🎰",
      title: "Lottery Scam Call",
      content: `
          <p>Victims receive calls claiming they've won a lottery, prize, or lucky draw (often international lotteries or popular game shows) but need to pay processing fees, taxes, or clearance charges to claim their winnings.</p>
          <p>These scams prey on greed and often target elderly or vulnerable individuals. The scammers may follow up with fake checks, legal-looking documents, or even personal visits to make the scam seem legitimate.</p>
          <p>After initial payments, victims are often strung along with requests for more money until they realize it's a scam or run out of funds.</p>
      `,
      tips: [
          "You can't win a contest you didn't enter",
          "Legitimate prizes never require payment upfront",
          "Be suspicious of foreign lotteries - most are illegal",
          "Never provide bank details to claim prizes",
          "Verify with family members before sending any money"
      ]
  }
};

// Tip content data
const tipContents = {
  1: {
      title: "Never Share Personal Information",
      content: `
          <p>Legitimate organizations will never ask for sensitive information like passwords, OTPs, or banking details over the phone. Always verify the caller's identity through official channels.</p>
          <ul>
              <li>Bank representatives will never ask for your full PIN or password</li>
              <li>Government agencies don't demand immediate payment over phone</li>
              <li>Be wary of callers asking you to "verify" your details</li>
              <li>If in doubt, hang up and call the organization back using their official number</li>
              <li>Never share OTPs - they are for your use only</li>
          </ul>
      `
  },
  2: {
      title: "Register for DND Service",
      content: `
          <p>Register your number with the National Do Not Call Registry to reduce unsolicited calls. While not foolproof, it significantly decreases spam and fraudulent calls.</p>
          <ul>
              <li>Visit the official National Do Not Call Registry website</li>
              <li>Registration is typically free and simple</li>
              <li>It may take a few weeks to see reduced calls</li>
              <li>Remember to re-register if you change your number</li>
              <li>Still be vigilant as some scammers ignore the registry</li>
          </ul>
      `
  },
  3: {
      title: "Use Caller ID Apps",
      content: `
          <p>Install reputable caller ID applications that can identify and block known spam numbers. These apps often have community-based reporting systems.</p>
          <ul>
              <li>Look for apps with high ratings and many downloads</li>
              <li>Enable automatic spam call blocking</li>
              <li>Contribute by reporting spam numbers you receive</li>
              <li>Some popular options include Truecaller, Hiya, and CallApp</li>
              <li>Be mindful of permissions these apps request</li>
          </ul>
      `
  },
  4: {
      title: "Beware of Urgency Tactics",
      content: `
          <p>Scammers often create false urgency ("Your account will be blocked!"). Take time to verify claims independently before acting on any phone instructions.</p>
          <ul>
              <li>Genuine organizations won't pressure you for immediate action</li>
              <li>If they claim to be from your bank, hang up and call your branch directly</li>
              <li>Watch for phrases like "immediate action required" or "within next hour"</li>
              <li>Scammers may threaten legal action or arrest to create panic</li>
              <li>Remember - it's okay to say "I need to verify this first"</li>
          </ul>
      `
  },
  5: {
      title: "Educate Vulnerable Family Members",
      content: `
          <p>Elderly relatives are often targets. Regularly discuss common scam tactics with them and establish verification protocols for suspicious calls.</p>
          <ul>
              <li>Have regular conversations about current scam techniques</li>
              <li>Create a family code word for verification</li>
              <li>Encourage them to call a trusted family member before acting on suspicious calls</li>
              <li>Set up their phone with caller ID and spam blocking</li>
              <li>Remind them it's okay to hang up on suspicious callers</li>
          </ul>
      `
  }
};

// Function to open fraud popup
function openFraudPopup(fraudNumber) {
  const overlay = document.getElementById('fraudPopupOverlay');
  const icon = document.getElementById('popupIcon');
  const title = document.getElementById('fraudPopupTitle');
  const content = document.getElementById('fraudPopupContent');
  const tipsList = document.getElementById('fraudProtectionTips');
  
  // Set the content
  icon.textContent = fraudContents[fraudNumber].icon;
  title.textContent = fraudContents[fraudNumber].title;
  content.innerHTML = fraudContents[fraudNumber].content;
  
  // Set the protection tips
  tipsList.innerHTML = '';
  fraudContents[fraudNumber].tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
  });
  
  // Show the overlay
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Function to close fraud popup
function closeFraudPopup() {
  const overlay = document.getElementById('fraudPopupOverlay');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

// Function to open tip popup
function openTipPopup(tipNumber) {
  const overlay = document.getElementById('tipPopupOverlay');
  const title = document.getElementById('popupTitle');
  const content = document.getElementById('popupContent');
  
  // Set the content
  title.textContent = tipContents[tipNumber].title;
  content.innerHTML = tipContents[tipNumber].content;
  
  // Show the overlay
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Function to close tip popup
function closeTipPopup() {
  const overlay = document.getElementById('tipPopupOverlay');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

// Close when clicking outside popup
document.getElementById('fraudPopupOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
      closeFraudPopup();
  }
});

// Close when clicking outside tip popup
document.getElementById('tipPopupOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
      closeTipPopup();
  }
});

// Carousel functionality
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const btnPrev = document.querySelector('.carousel-btn-prev');
  const btnNext = document.querySelector('.carousel-btn-next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  
  let currentSlide = 0;
  const maxSlide = slides.length - 1;
  let touchStartX = 0;
  let touchEndX = 0;
  let autoSlideInterval;
  
  // Create indicators
  slides.forEach((_, i) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      if (i === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(i));
      indicatorsContainer.appendChild(indicator);
  });
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  // Auto-rotation
  function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }
  
  // Touch event handlers
  carousel.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
  }, {passive: true});
  
  carousel.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoSlide();
  }, {passive: true});
  
  function handleSwipe() {
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
  });
  
  // Go to slide
  const goToSlide = function(slide) {
      slides.forEach((s, i) => {
          s.classList.toggle('active', i === slide);
      });
      indicators.forEach((ind, i) => {
          ind.classList.toggle('active', i === slide);
      });
      currentSlide = slide;
  };
  
  // Next slide
  function nextSlide() {
      if (currentSlide === maxSlide) {
          goToSlide(0);
      } else {
          goToSlide(currentSlide + 1);
      }
  }
  
  // Previous slide
  function prevSlide() {
      if (currentSlide === 0) {
          goToSlide(maxSlide);
      } else {
          goToSlide(currentSlide - 1);
      }
  }
  
  // Initialize
  const init = function() {
      goToSlide(0);
      startAutoSlide();
  };
  
  // Pause auto-rotation on hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
  
  // Add event listeners to buttons
  btnNext.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
  });
  btnPrev.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
  });
  
  init();
}

// Alert popup functionality
function initAlertPopup() {
  const closeAlertBtn = document.getElementById('closeAlert');
  const alertOverlay = document.getElementById('alertOverlay');
  const type2Btn = document.getElementById('Type2');
  
  // Show alert after a slight delay to ensure DOM is ready
  setTimeout(() => {
      alertOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
  }, 100);
  
  // Close alert when button is clicked
  closeAlertBtn.addEventListener('click', () => {
      alertOverlay.style.display = 'none';
      document.body.style.overflow = '';
  });
  
  // Close alert when clicking outside
  alertOverlay.addEventListener('click', (e) => {
      if (e.target === alertOverlay) {
          alertOverlay.style.display = 'none';
          document.body.style.overflow = '';
      }
  });
  
  // Redirect links
  if (type2Btn) {
      type2Btn.addEventListener('click', () => {
          window.location.href = '#fraud-types';
          alertOverlay.style.display = 'none';
          document.body.style.overflow = '';
      });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initCarousel();
  initAlertPopup();
});

// Alert popup on window load
const overlay = document.getElementById("alertOverlay");
const closeBtn = document.getElementById("closeAlert");

window.onload = () => {
  overlay.classList.remove("hidden");
};

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

const closeBtn1 = document.getElementById("Type2");

closeBtn1.addEventListener("click", () => {
  overlay.classList.add("hidden");
});