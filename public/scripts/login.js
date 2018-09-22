function signInButton (){
  $('.login-dropdown').on('submit', async (event) => {
    event.preventDefault();
    const username = $('input[type="username"]').val();
    const password = $('input[type="password"]').val();
    await $.ajax('/login', {method: 'GET', data: {username, password}});
    document.location = '/'
  });
}

function faded (e){
    window.onload = function (){
        $('.login-dropdown').animate({opacity: 1},{duration: 2500})
        $('.login-header').animate({opacity: 1},{duration: 1500})
        $('.login-text').animate({opacity: 1},{duration: 1500})
    }
}

$(document).ready(function() {
  signInButton();
  faded();
});
