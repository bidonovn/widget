const faqItems = document.querySelectorAll('.questions-block .questions-block__item')

if (faqItems.length > 0)
  faqItems.forEach((item) => {
    const faqHead = item.querySelector('.questions-block__title')
    const faqArrow = item.querySelector('.questions-block__arrow')
    faqHead.addEventListener('click', () => {
      item.classList.toggle('opened')
      faqArrow.classList.toggle('rotate-90')
    })
  });
