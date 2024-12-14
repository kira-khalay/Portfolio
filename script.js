function updateLinkContent() {
    if (window.innerWidth <= 700) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (link.href) {
                if (link.href.includes('mailto:')) {
                    link.innerHTML = '<i class="fa-solid fa-envelope"></i>';
                } else if (link.href.includes('instagram.com')) {
                    link.innerHTML = '<i class="fa-brands fa-instagram"></i>';
                } else if (link.href.includes('github.com')) {
                    link.innerHTML = '<i class="fa-brands fa-github"></i>';
                } else if (link.href.includes('tel')) {
                    link.innerHTML = '<i class="fa-solid fa-phone"></i>';
                }
            }
        });
    } else {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (link.href) {
                if (link.href.includes('mailto:')) {
                    link.innerHTML = 'tuncaykhalisov@gmail.com';
                } else if (link.href.includes('instagram.com')) {
                    link.innerHTML = 'Instagram';
                } else if (link.href.includes('github.com')) {
                    link.innerHTML = 'Github';
                } else if (link.href.includes('tel')) {
                    link.innerHTML = '+9940509721170';
                }
            }
        });
    }
}
window.addEventListener('resize', updateLinkContent);
document.addEventListener('DOMContentLoaded', updateLinkContent);

