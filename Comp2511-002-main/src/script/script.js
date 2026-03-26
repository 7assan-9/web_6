// Literally for smaller simple features I wanted to add.
$(document).ready(function () {
    const now = new Date();
    $(".notif time").text(`${now.toLocaleTimeString('en-US', { hour12: false })}`);
});