let startTime = 0;

(function () {
    startTime = (new Date).getTime();
})();

window.onload = function () {
    let endTime = (new Date).getTime();
    let footer = document.querySelector('footer');
    var elem = document.createElement("div");
    var text = document.createTextNode('Время загрузки страницы: ' + (endTime - startTime) + 'ms.');
    elem.appendChild(text)
    footer.appendChild(elem)

    document.querySelector('body').addEventListener('click', function () {
        const c = document.querySelector('footer div').classList;
        c.toggle('close');
    });
}