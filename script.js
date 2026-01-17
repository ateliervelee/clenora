// Component injection system
async function loadComponent(containerId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${componentPath} - Status: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
            
            // Execute any scripts within the loaded component
            const scripts = container.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        } else {
            console.error(`Container not found: ${containerId}`);
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<div style="padding: 2rem; text-align: center; color: #ef4444;">
                <p>Error loading component. Please make sure you're running a local server.</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Run: python3 -m http.server 8000</p>
            </div>`;
        }
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'header-container', path: 'components/header.html' },
        { id: 'hero-container', path: 'components/hero.html' },
        { id: 'services-container', path: 'components/services.html' },
        { id: 'benefits-container', path: 'components/benefits.html' },
        { id: 'how-it-works-container', path: 'components/how-it-works.html' },
        { id: 'contact-container', path: 'components/contact.html' },
        { id: 'footer-container', path: 'components/footer.html' }
    ];
    
    // Load all components in parallel
    Promise.all(components.map(comp => loadComponent(comp.id, comp.path)));
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
