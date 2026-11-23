(() => {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealElements = [...document.querySelectorAll('[data-reveal]')];
  const motionControls = document.querySelector('[data-motion-controls]');
  let userPaused = false;
  let observer;
  let motionButton;
  let motionLabel;
  let motionShortLabel;
  let motionIcon;

  const isPaused = () => userPaused || reducedMotion.matches;

  const reveal = element => {
    element.removeAttribute('data-motion-pending');
    element.setAttribute('data-motion-revealed', '');
    observer?.unobserve(element);
  };

  const revealAll = () => revealElements.forEach(reveal);

  const updateControl = () => {
    if (!motionButton) return;
    const english = root.lang.startsWith('en');
    const paused = isPaused();
    const labels = english ? {
      pause: 'Pause motion',
      resume: 'Resume motion',
      reduced: 'Motion reduced',
      system: 'Motion is off because Reduce Motion is enabled on your device.'
    } : {
      pause: 'עצירת תנועה',
      resume: 'הפעלת תנועה',
      reduced: 'תנועה מופחתת',
      system: 'התנועה כבויה בהתאם להעדפת הפחתת התנועה במכשיר שלך.'
    };

    motionLabel.textContent = reducedMotion.matches ? labels.reduced : paused ? labels.resume : labels.pause;
    motionShortLabel.textContent = english ? 'Motion' : 'תנועה';
    motionButton.setAttribute('aria-label', reducedMotion.matches ? labels.system : paused ? labels.resume : labels.pause);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.disabled = reducedMotion.matches;
    motionButton.title = reducedMotion.matches ? labels.system : motionLabel.textContent;
    motionIcon.innerHTML = paused
      ? '<path d="M3 2.2v9.6L11 7z"/>'
      : '<path d="M3 2h3v10H3zm5 0h3v10H8z"/>';
  };

  const applyPreference = () => {
    root.dataset.motion = isPaused() ? 'paused' : 'running';
    if (isPaused()) revealAll();
    updateControl();
  };

  if (motionControls) {
    motionButton = document.createElement('button');
    motionButton.type = 'button';
    motionButton.className = 'motion-control';
    motionButton.id = 'motion-control';
    motionIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    motionIcon.setAttribute('viewBox', '0 0 14 14');
    motionIcon.setAttribute('aria-hidden', 'true');
    motionIcon.setAttribute('focusable', 'false');
    motionLabel = document.createElement('span');
    motionLabel.className = 'motion-label-full';
    motionLabel.setAttribute('aria-hidden', 'true');
    motionShortLabel = document.createElement('span');
    motionShortLabel.className = 'motion-label-short';
    motionShortLabel.setAttribute('aria-hidden', 'true');
    motionButton.append(motionIcon, motionLabel, motionShortLabel);
    motionButton.addEventListener('click', () => {
      userPaused = !userPaused;
      applyPreference();
    });
    motionControls.append(motionButton);
  }

  // Only hide content after an observer exists. Without JavaScript, everything
  // remains visible; content already on screen never waits for an entrance.
  if ('IntersectionObserver' in window && !isPaused()) {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    for (const element of revealElements) {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.96) {
        reveal(element);
      } else {
        element.setAttribute('data-motion-pending', '');
        observer.observe(element);
      }
    }
  } else {
    revealAll();
  }

  applyPreference();
  root.classList.add('motion-ready');

  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', applyPreference);
  } else if (typeof reducedMotion.addListener === 'function') {
    reducedMotion.addListener(applyPreference);
  }

  new MutationObserver(updateControl).observe(root, {
    attributes: true,
    attributeFilter: ['lang']
  });

  const updateVisibility = () => {
    root.dataset.pageVisible = String(!document.hidden);
  };
  document.addEventListener('visibilitychange', updateVisibility);
  updateVisibility();
})();
