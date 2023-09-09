
const selectSection = (id) => {
    if (document.querySelector(id)) {
        document.querySelectorAll('nav>a')?.forEach(link => link.classList.remove('active'))
        document.querySelectorAll('main>section')?.forEach(section => section.classList.remove('active'))
        document.querySelector(`[href="${id}"]`)?.classList.add('active')
        document.querySelector(id)?.classList.add('active')
    }
}

if (window.location.hash) {
    selectSection(window.location.hash)
}

document.querySelectorAll('nav>a')?.forEach(link => link.addEventListener('click', () => selectSection(link.hash)))