const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
const loadButton = document.getElementById('load-studio');
loadButton.hidden = false;
loadButton.addEventListener('click', () => {
  const container = document.getElementById('embed-container');
  container.hidden = false;
  const frame = document.createElement('iframe');
  frame.title = 'Sumith Portrait Studio — hosted image generator';
  frame.src = 'https://sumith0102-personal-project.hf.space';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  container.append(frame);
  loadButton.disabled = true;
  loadButton.textContent = 'Studio loaded below ↓';
  container.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}, { once: true });
