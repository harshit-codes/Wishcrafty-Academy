/**
 * Scroll to a specific section with offset adjustment
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  try {
    const section = document.getElementById(sectionId);
    
    if (!section) {
      console.error(`Section with ID "${sectionId}" not found`);
      return;
    }
    
    // Calculate offset with fixed values (more reliable)
    const bannerHeight = 30; // Height of announcement banner
    const navbarHeight = 70; // Average height of navbar
    const extraPadding = 20; // Additional padding for comfort
    
    // Total offset
    const totalOffset = bannerHeight + navbarHeight + extraPadding;
    
    // Get section position and scroll
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = sectionPosition - totalOffset;
    
    // Scroll to position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
    
    // Update URL without triggering another scroll
    setTimeout(() => {
      window.history.pushState(null, null, `#${sectionId}`);
    }, 1000);
    
  } catch (error) {
    console.error('Error scrolling to section:', error);
  }
};

/**
 * Determines which section is currently visible in the viewport
 * @param {Array} sectionIds - Array of section IDs to check
 * @returns {string} The ID of the active section
 */
export const determineActiveSection = (sectionIds) => {
  // Default to home if no section is found
  let currentSection = 'home';
  
  // Check if we're at the very top (home section)
  if (window.scrollY < 100) {
    return 'home';
  }
  
  // Get section elements
  const sectionElements = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);
  
  // Find current section based on scroll position
  const scrollPosition = window.scrollY + 150; // Offset for better detection
  
  for (const section of sectionElements) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.id;
      break;
    }
  }
  
  return currentSection;
};
