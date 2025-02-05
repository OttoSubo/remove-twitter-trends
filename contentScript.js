// contentScript.js
const removeElements = () => {
  // Remove Trending Now section
  const trendingContainer = document.querySelector('div.r-kemksi.r-1kqtdi0.r-1867qdf'); // Parent container
  if (trendingContainer) {
    trendingContainer.remove();
  }

  // Remove Subscribe to Premium section
  const premiumSection = document.querySelector('aside[aria-label="Subscribe to Premium"]');
  if (premiumSection) {
    premiumSection.closest('div.r-kemksi.r-1kqtdi0').remove();
  }
};

// Create observer with improved configuration
const observer = new MutationObserver((mutations) => {
  if (!document.querySelector('div.r-kemksi.r-1kqtdi0, aside[aria-label="Subscribe to Premium"]')) {
    return;
  }
  removeElements();
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
});

// Initial check
removeElements();

// Periodic check as backup (every 2 seconds)
const backupCheck = setInterval(() => {
  if (document.querySelector('body')) {
    removeElements();
  } else {
    clearInterval(backupCheck);
  }
}, 2000);