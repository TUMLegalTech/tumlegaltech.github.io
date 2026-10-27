(function () {
  const dialog = document.getElementById('bibtex-citation-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const citation = dialog.querySelector('.bibtex-dialog-text');
  const download = dialog.querySelector('.bibtex-dialog-download');
  const status = dialog.querySelector('.bibtex-dialog-status');
  let opener;

  document.querySelectorAll('.bibtex-export').forEach(link => {
    link.setAttribute('role', 'button');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', dialog.id);

    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const href = link.getAttribute('href');
      citation.value = decodeURIComponent(href.slice(href.indexOf(',') + 1));
      citation.setSelectionRange(0, 0);
      download.href = href;
      download.download = link.download;
      status.textContent = '';
      dialog.showModal();
      citation.scrollTop = 0;
    });

    link.addEventListener('keydown', event => {
      if (event.key === ' ') {
        event.preventDefault();
        link.click();
      }
    });
  });

  dialog.querySelector('.bibtex-dialog-close').addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    if (opener) opener.focus();
  });

  dialog.querySelector('.bibtex-dialog-copy').addEventListener('click', async () => {
    const text = citation.value;
    try {
      await navigator.clipboard.writeText(text);
      if (dialog.open && citation.value === text) status.textContent = 'Copied to clipboard.';
    } catch (error) {
      if (!dialog.open || citation.value !== text) return;
      citation.focus();
      citation.select();
      status.textContent = 'Citation selected. Use your device’s copy command.';
    }
  });
})();
