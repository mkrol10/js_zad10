var buttonAdd = document.getElementById('addElem'),
    listAdd = document.getElementById('Lista');

buttonAdd.addEventListener('click', function(e) {
    listAdd.innerHTML += '<li>item ' + document.getElementsByTagName('li').length +
        '</li>';
});