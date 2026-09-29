/**
 * Adsterra SmartLink Monetization Engine
 * Safe, high-yielding CPM direct links rotation & trigger system
 */

export const ADSTERRA_SMART_LINKS = [
  'https://www.effectivecpmnetwork.com/x0wcj4zk?key=c2b46070b44982014166acafd6074c3d',
  'https://www.effectivecpmnetwork.com/sa8mca36sv?key=3711015d24018cf89ccb362976c4a2e0',
  'https://www.profitableratecpmnetwork.com/sa8mca36sv?key=3711015d24018cf89ccb362976c4a2e0',
  'https://www.profitableratecpmnetwork.com/x0wcj4zk?key=c2b46070b44982014166acafd6074c3d',
];

let currentIndex = 0;

export function getNextSmartLink(): string {
  const link = ADSTERRA_SMART_LINKS[currentIndex % ADSTERRA_SMART_LINKS.length];
  currentIndex++;
  return link;
}

export function openSmartLink(e?: React.MouseEvent | MouseEvent) {
  if (e && typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  }
  const url = getNextSmartLink();
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) {
      win.focus();
    }
  } catch (err) {
    // fallback navigation
    console.debug('Smartlink triggered');
  }
}

/**
 * Initializes smart background monetization triggers
 * Respects user experience while ensuring high RPM/CPM conversions
 */
export function initBackgroundMonetization() {
  if (typeof window === 'undefined') return;

  // Track session clicks
  let clickCount = 0;
  const STORAGE_KEY = 'trand_ad_last_ts';
  const MIN_INTERVAL_MS = 60 * 1000; // 1 trigger per minute max to prevent spam

  const handleClick = (e: MouseEvent) => {
    // Only target background or generic empty clicks, not action buttons
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Check if clicked element or parent is already a link or button
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('select')) {
      return;
    }

    clickCount++;
    if (clickCount >= 3) {
      const lastTrigger = parseInt(sessionStorage.getItem(STORAGE_KEY) || '0', 10);
      const now = Date.now();
      if (now - lastTrigger > MIN_INTERVAL_MS) {
        sessionStorage.setItem(STORAGE_KEY, String(now));
        clickCount = 0;
        const link = getNextSmartLink();
        const a = document.createElement('a');
        a.href = link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };

  window.addEventListener('click', handleClick, { passive: true });
}
