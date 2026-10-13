document.getElementById('signup')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './signup.html';
});

document.getElementById('signup')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('./signup.html', '_blank'); //Open in a new TAB
});