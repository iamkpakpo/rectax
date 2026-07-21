/* ==========================================
   RECTAX Real Estate Platform - Calendly Integration
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Create Modal HTML markup if not present
  if (!document.getElementById('calendly-modal')) {
    const modalHTML = `
      <div id="calendly-modal" class="modal-backdrop" aria-hidden="true" role="dialog">
        <div class="modal-content" style="max-width: 760px; padding: var(--space-8); border-radius: var(--radius-lg);">
          <button type="button" class="modal-close" aria-label="Close modal" id="close-calendly-modal">&times;</button>
          
          <div style="margin-bottom: var(--space-6); text-align: center;">
            <span class="badge badge-orange" style="margin-bottom: var(--space-2);">Consultation Booking</span>
            <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-2);">Schedule a Strategy Session</h2>
            <p style="font-size: 0.9375rem; color: var(--color-text-secondary);">
              Connect directly with a RECTAX real estate expert. Select a date and time that fits your schedule.
            </p>
          </div>

          <!-- Contact Direct Quick Bar -->
          <div style="background-color: var(--color-background); padding: var(--space-4); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: var(--space-3); margin-bottom: var(--space-6); text-align: center; border: 1px solid var(--color-border);">
            <div>
              <span class="caption" style="display: block;">Direct Email</span>
              <a href="mailto:info@rectax.org" style="font-weight: 600; color: var(--color-primary);">info@rectax.org</a>
            </div>
            <div style="width: 1px; height: 24px; background-color: var(--color-border);" class="hide-mobile"></div>
            <div>
              <span class="caption" style="display: block;">Phone Enquiries</span>
              <a href="tel:0558582333" style="font-weight: 600; color: var(--color-primary);">0558582333</a>
            </div>
            <div style="width: 1px; height: 24px; background-color: var(--color-border);" class="hide-mobile"></div>
            <div>
              <span class="caption" style="display: block;">Head Office</span>
              <span style="font-weight: 600; color: var(--color-primary);">Accra, Ghana</span>
            </div>
          </div>

          <!-- Calendly Embedded Container -->
          <div id="calendly-embed-container" style="min-height: 480px; width: 100%; border-radius: var(--radius-md); overflow: hidden; background: #fafafa; position: relative;">
            <iframe 
              src="https://calendly.com/d/cpx2-984-y7t?hide_gdpr_banner=1&primary_color=f0932b" 
              width="100%" 
              height="500" 
              frameborder="0" 
              title="Select a Date & Time - Calendly"
              style="border: 0; min-height: 480px;">
            </iframe>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('calendly-modal');
  const closeBtn = document.getElementById('close-calendly-modal');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Attach event listener to all trigger elements
  document.querySelectorAll('[data-open-calendly], .btn-book-consultation').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
