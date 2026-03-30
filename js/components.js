document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header.site-header');
    if (header) {
        const isAdmin = header.classList.contains('admin-header');
        const pathPrefix = isAdmin ? '../components/admin-header.html' : 'components/header.html';
        const finalPath = (window.location.pathname.includes('/admin/')) ? '../components/header.html' : 'components/header.html';

        let componentPath = 'components/header.html';
        if (window.location.pathname.includes('/admin/')) {
            componentPath = header.classList.contains('admin-header') ? '../components/admin-header.html' : '../components/header.html';
        }

        fetch(componentPath)
            .then(response => response.text())
            .then(data => {
                header.innerHTML = data;
                const currentFile = window.location.pathname.split('/').pop();
                header.querySelectorAll('a').forEach(a => {
                    if (a.getAttribute('href') === currentFile) {
                        a.classList.add('active');
                    }
                });
            });
    }

    const footer = document.querySelector('footer.site-footer');
    if (footer) {
        const componentPath = window.location.pathname.includes('/admin/') ? '../components/footer.html' : 'components/footer.html';
        fetch(componentPath)
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            });
    }
});
