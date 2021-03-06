import './styles.scss';

export default (ColorTranslator) => {

    const container = document.createElement('div');
    const colors = [
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#00FFFF',
        '#FFFF00',
        '#FF00FF'
    ];
    const total = colors.length;

    for (let row = 0; row < total; row++) {

        const hsl = ColorTranslator.toHSL(colors[row], false);
        const step = hsl.s / (total - 1);

        for (let col = 0; col < total; col++) {

            const rgb = ColorTranslator.toHEX(hsl);
            const cmyk = ColorTranslator.toCMYK(hsl, false);

            const box = document.createElement('div');
            box.classList.add('box');
            box.style.background = rgb;
            box.innerText = `C:${cmyk.c}
                             M:${cmyk.m}
                             Y:${cmyk.y}
                             K:${cmyk.k}`;

            container.appendChild(box);

            hsl.s -= step;

        }
    }

    return container;

};