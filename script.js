document.querySelectorAll('.offer').forEach((offer) => {
  offer.addEventListener('click', (e) => {
    // If the click target is the radio button itself, don't toggle the offer
    if (e.target.tagName === 'INPUT' && e.target.type === 'radio') {
      return;
    }
  
    // Collapse all other offers
    document.querySelectorAll('.offer').forEach((o) => {
      if (o !== offer) {
        o.classList.remove('expanded');
        const options = o.querySelector('.options');
        if (options) options.classList.add('hidden');
      }
    });

    // Toggle the clicked offer
    offer.classList.toggle('expanded');
    const options = offer.querySelector('.options');
    if (options) options.classList.toggle('hidden');
  });
});
