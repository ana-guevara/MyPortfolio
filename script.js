// Intersection Observer for smooth section reveals
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Enhanced card hover effects with skill highlights
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)';
        highlightRelatedSkills(e.currentTarget);
    });
    
    card.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.transform = 'translateY(0) rotate(0)';
        resetSkillHighlights();
    });
});

// Highlight related skills based on project/experience content
function highlightRelatedSkills(card) {
    const cardText = card.textContent.toLowerCase();
    const skillSpans = document.querySelectorAll('.skills-tags span');
    
    skillSpans.forEach(span => {
        const skill = span.textContent.toLowerCase();
        if (cardText.includes(skill)) {
            span.style.background = '#7f5af0';
            span.style.color = 'white';
            span.style.transform = 'scale(1.1)';
        }
    });
}

function resetSkillHighlights() {
    document.querySelectorAll('.skills-tags span').forEach(span => {
        span.style.background = '';
        span.style.color = '';
        span.style.transform = '';
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add contact form validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactLinks = document.querySelectorAll('#contact a');

contactLinks.forEach(link => {
    if (link.href.includes('mailto:')) {
        link.addEventListener('click', (e) => {
            const email = link.href.split(':')[1];
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Invalid email format');
            }
        });
    }
});

// Add dynamic year to footer copyright
const yearSpan = document.querySelector('footer p');
if (yearSpan) {
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', new Date().getFullYear());
}
