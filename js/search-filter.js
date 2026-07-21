/* ==========================================
   RECTAX Real Estate Platform - Search & Filter JS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Pill Tabs (Buy / Rent / Sell)
  const pillTabs = document.querySelectorAll('.pill-tab');
  const propertyTypeSelect = document.getElementById('search-property-type');

  pillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.getAttribute('data-mode');
      
      if (propertyTypeSelect) {
        if (mode === 'rent') {
          propertyTypeSelect.placeholder = 'e.g. Luxury Apartment / Office';
        } else if (mode === 'sell') {
          propertyTypeSelect.placeholder = 'e.g. Commercial Plot / Residential Villa';
        } else {
          propertyTypeSelect.placeholder = 'e.g. Single Family / Penthouse';
        }
      }
    });
  });

  // Search Button Action
  const heroSearchBtn = document.getElementById('hero-search-submit');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const location = document.getElementById('search-location')?.value || 'Accra Central';
      const propertyType = propertyTypeSelect?.value || 'Commercial & Residential';

      // Open notification or trigger consultation modal for custom search enquiries
      alert(`Searching RECTAX listings in "${location}" for "${propertyType}"... Triggering custom consultation option.`);
      
      const calendlyModal = document.getElementById('calendly-modal');
      if (calendlyModal) {
        calendlyModal.classList.add('active');
      }
    });
  }
});
