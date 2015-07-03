$(document).ready(function(){
  if (cookieParser(document.cookie).username !== undefined) {
      $('.btn-launch').hide();
      $(".logout").css('visibility', 'visible');
  }
  else {
    $(".logout").css('visibility', 'hidden');
    $(".btn-launch").css('visibility', 'visible');
  }
  if ($('.errorLogin').html() !== "") {
    $('.btn-launch').click();
  }
  $(document).on('click','.signup-tab',function(e){
    e.preventDefault();
    $('#signup-taba').tab('show');
  });
  $(document).on('click','.signin-tab',function(e){
    e.preventDefault();
    $('#signin-taba').tab('show');
  });
  $(document).on('click', '#login_btn', function (e) {
    error.errorsArr = [];
    var username = $('#login_username').val();
    var password = $('#login_password').val();
    error.validateInput(username, "username");
    error.validateInput(password, "password");
    if (error.errorsArr.length > 0) {
      $('.errorLogin').empty();
      $('.errorLogin').html(logArray(error.errorsArr));
      e.preventDefault();
    }
  })
  $(document).on('click', '#signup_btn', function (e) {
    error.errorsArr = [];
    var username = $('#signup_username').val();
    var email = $('#signup_email').val();
    var password = $('#signup_password').val();
    error.validateInput(username, "username");
    error.validateInput(email, "email");
    error.validateInput(password, "password");
    if (error.errorsArr.length > 0) {
      $('.errorSignup').empty();
      $('.errorSignup').html(logArray(error.errorsArr));
      e.preventDefault();
    }
  })
});
