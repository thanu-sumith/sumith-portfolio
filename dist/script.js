const $ = id => document.getElementById(id);
$('year').textContent = new Date().getFullYear();
const menu = $('menu-toggle');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  $('navigation').classList.toggle('open', expanded);
});
$('navigation').querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false'); $('navigation').classList.remove('open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false'); $('navigation').classList.remove('open'); menu.focus();
  }
});
const projects = {
  avatar: {
    label: 'GENERATIVE AI / COMPUTER VISION', title: 'AI Avatar Generator',
    summary: 'An exploration of personalized avatars built from facial inputs and written prompts.',
    sections: [
      ['The idea', 'Let people describe a visual style while retaining a connection to their own facial identity. The project brings image input and language together in one generation workflow.'],
      ['The approach', 'The original project combines computer vision with generative techniques: OpenCV for image processing, GANs and diffusion models for generation, and PyTorch for model development. DeepFaceLab is also part of the documented toolkit.'],
      ['What this portfolio shows', 'A summary of the project and its technical direction. There is no public demo or measured performance result linked in the original repository, so this page does not claim either.']
    ], tags: ['OpenCV', 'GANs', 'Diffusion models', 'DeepFaceLab', 'PyTorch'], links: []
  },
  video: {
    label: 'GENERATIVE AI / VIDEO', title: 'Text-to-Video Generator',
    summary: 'Exploring the step from a written idea to a sequence of moving visuals.',
    sections: [
      ['The idea', 'Make text a starting point for video creation, with potential uses in education, marketing, and conversational experiences.'],
      ['The approach', 'The project description explores Stable Diffusion, GANs, VideoGPT, Flamingo, and PyTorch. A related ModelScope text-to-video fine-tuning repository is available on my GitHub as a fork.'],
      ['Source and scope', 'The linked repository is a related fork, not a claim of original authorship of its underlying models. This portfolio does not include a hosted generation service.']
    ], tags: ['Stable Diffusion', 'VideoGPT', 'Flamingo', 'PyTorch'],
    links: [{ label: 'Related fine-tuning repository ↗', url: 'https://github.com/thanu-sumith/Text-To-Video-Finetuning' }]
  },
  companion: {
    label: 'CONVERSATIONAL AI / FULL STACK', title: 'Mental Health AI Companion',
    summary: 'A conversational project exploring ways to listen to text and voice input and offer relevant resources.',
    sections: [
      ['The idea', 'Provide a space for reflection using familiar conversational input. The focus is on accessibility and interaction, rather than presenting a clinical service.'],
      ['The approach', 'React provides the interface, Whisper AI supports speech transcription, and NLP with TF-IDF helps process text. MongoDB is part of the documented application stack.'],
      ['Scope', 'This is a support-oriented software project, not a diagnostic tool or a substitute for professional care. No clinical effectiveness or reliability claims are made here.']
    ], tags: ['React', 'Whisper AI', 'MongoDB', 'NLP', 'TF-IDF'], links: []
  },
  hspace: {
    label: 'WEB APPLICATION / REAL TIME', title: 'Hspace',
    summary: 'A lightweight chat room that starts with a name and an invite, rather than an account.',
    sections: [
      ['The idea', 'Get a small group into the same conversation with as little setup as possible: create a room, share a link, and say hello.'],
      ['How it works', 'The website uses JavaScript, PeerJS, and WebRTC. The host connects to each guest and relays messages to the room. A random invite secret is checked before a participant can join or receive recent history.'],
      ['The trade-offs', 'Rooms support up to eight people and last while the host is online. Messages are kept in memory for the session. PeerJS Cloud helps establish connections, and some networks may require a TURN relay.'],
      ['Validation', 'Seven protocol tests cover joining, message exchange, sender attribution, invalid invites, rate limits, host departure, and reconnection. Live connectivity across different devices and networks still needs to be checked on the public deployment.']
    ], tags: ['JavaScript', 'PeerJS', 'WebRTC', 'GitHub Pages'],
    links: [{ label: 'Explore Hspace on GitHub ↗', url: 'https://github.com/thanu-sumith/hspace-chat' }]
  }
};
const dialog = $('project-dialog');
let dialogTrigger = null;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  dialogTrigger = button;
  $('dialog-label').textContent = project.label;
  $('dialog-title').textContent = project.title;
  $('dialog-summary').textContent = project.summary;
  $('dialog-sections').replaceChildren(); $('dialog-tags').replaceChildren(); $('dialog-links').replaceChildren();
  for (const [title, text] of project.sections) {
    const section = document.createElement('section'), heading = document.createElement('h3'), paragraph = document.createElement('p');
    heading.textContent = title; paragraph.textContent = text; section.append(heading, paragraph); $('dialog-sections').append(section);
  }
  for (const text of project.tags) { const tag = document.createElement('span'); tag.textContent = text; $('dialog-tags').append(tag); }
  for (const item of project.links) {
    const a = document.createElement('a'); a.textContent = item.label; a.href = item.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; $('dialog-links').append(a);
  }
  if (typeof dialog.showModal === 'function') { dialog.showModal(); document.body.classList.add('modal-open'); dialog.scrollTop = 0; }
  else { dialog.setAttribute('open', ''); dialog.scrollIntoView({ block: 'center' }); }
}));
function closeDialog() {
  if (typeof dialog.close === 'function') dialog.close();
  else { dialog.removeAttribute('open'); restoreFocus(); }
}
function restoreFocus() { document.body.classList.remove('modal-open'); dialogTrigger?.focus(); }
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('close', restoreFocus);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter; let count = 0;
  document.querySelectorAll('[data-filter]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('.project-card').forEach(card => {
    const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter); card.hidden = !visible;
    if (visible) { count++; card.classList.add('visible'); }
  });
  $('project-count').textContent = `${String(count).padStart(2, '0')} projects`;
}));
const tabs = [...document.querySelectorAll('[data-tab]')];
function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1;
    $('panel-' + item.dataset.tab).hidden = !active;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});
$('copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('thanugundlasumithreddy@gmail.com'); $('copy-status').textContent = 'Email address copied.'; }
  catch { $('copy-status').textContent = 'Select the email address above to copy it, or click it to open your email app.'; }
});
$('contact-form').addEventListener('submit', event => {
  event.preventDefault(); const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form), name = String(data.get('name')).trim(), email = String(data.get('email')).trim(), message = String(data.get('message')).trim();
  if (!name || !message) { $('form-status').textContent = 'Please include your name and a message.'; return; }
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`), body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:thanugundlasumithreddy@gmail.com?subject=${subject}&body=${body}`;
  $('form-status').textContent = 'Your draft is ready to open. Review it and send it from your email app.';
});
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('#navigation a').forEach(link => {
      if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }); });
  }, { rootMargin: '-20% 0px -60% 0px' });
  document.querySelectorAll('main>section[id]').forEach(section => navObserver.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.project-card,.about-card,.portrait-card,.toolkit-shell').forEach(card => {
      card.classList.add('reveal', 'ready'); revealObserver.observe(card);
    });
  }
}
