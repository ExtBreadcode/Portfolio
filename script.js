// Example of adding interactivity (e.g., scroll animations, form validation)
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded!");
    // Add additional JS functionality here
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

});
