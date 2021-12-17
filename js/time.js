let startTime = 0;

(function () {
    startTime = (new Date).getTime();
})();

window.onload = function () {
    let endTime = (new Date).getTime();
    let footer = document.querySelector('footer div');
    footer.textContent += ('Время загрузки страницы: ' + (endTime - startTime) + 'ms.');

    document.querySelector('body').addEventListener('click', function () {
        const c = document.querySelector('footer div').classList;
        c.toggle('close');
    });
}