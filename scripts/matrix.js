function createMatrixRain() {
    const background = document.getElementById('matrixBackground');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = (i * 20) + 'px';
        column.style.animationDelay = (Math.random() * 8) + 's';
        
        let content = '';
        const length = Math.floor(Math.random() * 25) + 15;
        for (let j = 0; j < length; j++) {
            content += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = content;
        
        background.appendChild(column);
    }
}

window.addEventListener('load', createMatrixRain);
window.addEventListener('resize', () => {
    const background = document.getElementById('matrixBackground');
    background.innerHTML = '';
    createMatrixRain();
});
