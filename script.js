const iconsTalent = document.querySelectorAll('.icon');
const sections = document.querySelectorAll('.card-content');

iconsTalent.forEach(icon => {
    icon.addEventListener('click', () => {
        // Hilangkan semua section yang aktif
        sections.forEach(sec => {
            sec.classList.remove('active');
            // Tampilkan section target
            const target = icon.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

function activateSvg(el) {

    // MATIKAN semua icon
    document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('active');
    });

    // HIDUPKAN icon yang diklik
    el.classList.add('active');

    // MATIKAN semua section
    sections.forEach(sec => sec.classList.remove('active'));

    // HIDUPKAN section sesuai data-target
    const target = el.dataset.target;
    document.getElementById(target).classList.add('active');
}
