document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Add slight delay to outline for smooth effect
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 80);
    });

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-details');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
        });
    });
});
