const customVideoDescription = document.querySelector('.custom-video-description'),
      prevArrow = document.querySelector('.navigationButton.episode.previousId'),
      nextArrow = document.querySelector('.navigationButton.episode.nextId');

if (customVideoDescription) {
    let scrollWindow = window.scrollY.toFixed(2);

    function prevArrowFix() {
        prevArrow.style.cssText = `
            top: calc((75vh + 60px) / 2 - 10px - ${ scrollWindow }px);
        `;
    }

    function nextArrowFix() {
        nextArrow.style.cssText = `
            top: calc((75vh + 60px) / 2 - 10px - ${ scrollWindow }px);
        `;
    }

    prevArrowFix();
    nextArrowFix();

    window.addEventListener('scroll', () => {
        scrollWindow = window.scrollY.toFixed(2);

        prevArrowFix();
        nextArrowFix();
    })
}

