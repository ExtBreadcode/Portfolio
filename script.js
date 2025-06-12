document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded!");

    function showProjects(type) {
        const software = document.getElementById('softwareProjects');
        const hardware = document.getElementById('hardwareProjects');
        const softwareBtn = document.getElementById('softwareBtn');
        const hardwareBtn = document.getElementById('hardwareBtn');

        if (type === 'software') {
            software.classList.add('active');
            hardware.classList.remove('active');
            softwareBtn.classList.add('active');
            hardwareBtn.classList.remove('active');
        } else {
            hardware.classList.add('active');
            software.classList.remove('active');
            hardwareBtn.classList.add('active');
            softwareBtn.classList.remove('active');
        }
    }

    // 🔽 Add event listeners here:
    document.getElementById('softwareBtn').addEventListener('click', () => showProjects('software'));
    document.getElementById('hardwareBtn').addEventListener('click', () => showProjects('hardware'));

    // Optional: Set default view
    showProjects('software');
});
