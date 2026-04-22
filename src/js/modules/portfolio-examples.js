export function initPortfolioExamples() {
    const root = document.querySelector('[data-portfolio-examples]');
    if (!root) return;

    const slider = root.querySelector('.portfolio-examples__slider');
    const track = root.querySelector('.portfolio-examples__track');
    const prev = root.querySelector('.portfolio-examples__button--prev');
    const next = root.querySelector('.portfolio-examples__button--next');
    const slides = root.querySelectorAll('.portfolio-examples__slide');

    if (!slider || !slides.length) return;

    const getStep = () => {
        const first = slides[0];
        if (!first) return slider.clientWidth * 0.85;
        const gapRaw = track ? parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) : NaN;
        const gap = Number.isFinite(gapRaw) ? gapRaw : 12;
        return first.getBoundingClientRect().width + gap;
    };

    const scrollByDir = (dir) => {
        slider.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => scrollByDir(-1));
    next?.addEventListener('click', () => scrollByDir(1));
}
