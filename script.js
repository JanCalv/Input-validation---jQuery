$(function(){
    /* 
    * This is the code for the registration
    */
    oRegistrationController = {
        /*
        * Variables
        * DOM elements declared in variables
        * first letter in variables indicates their data type
        * ex: s = string, i = integer, o = object etc..
        */
       oGetElements: {
          sName: $('#name'),
          sUsername: $('#username'),
          sEmail: $('#email'),
          sPassword: $('#password'),
          form: $('#form'),
          registerBtn: ('#regBtn')
       },

       /*
       * binding a function to submit button
       */
       setEventListeners: function() {
          this.oGetElements.form.on('submit', this.registerUser);
       },

       /*
        * method for user registration
        */
       registerUser: function(e) {
          if (oRegistrationController.oGetElements.sName.val() == '') {
               $('#nameError').text('Please input your name.');
               e.preventDefault();
          } else if (oRegistrationController.oGetElements.sName.val().match(/[0-9^&*()_+=]/)) {
               $('#nameError').text('Invalid name format');
               e.preventDefault();
          } else if (oRegistrationController.oGetElements.sUsername.val() == '') {
               $('#usernameError').text('Please input your username.');
               e.preventDefault();
          } else if (oRegistrationController.oGetElements.sEmail.val() == '') {
               $('#emailError').text('Please input your email.');
               e.preventDefault();
          } else if (oRegistrationController.oGetElements.sPassword.val().length < 5) {
               $('#passwordError').text('Password must be 5 characters above.');
               e.preventDefault();
          } else {
               alert('Registration Complete!');
          }
       },

       /* name length counter */
       nameCharCounter: function() {
          this.oGetElements.sName.keyup(function(){
               $('.name-count').text(oRegistrationController.oGetElements.sName.val().length);
          });
       },

       /* username length counter */
       usernameCharCounter: function() {
          this.oGetElements.sUsername.keyup(function(){
               $('.uname-count').text(oRegistrationController.oGetElements.sUsername.val().length);
          });
       },

       /*
        * method that needs to run as soon
        * as the program starts
        */
       init: function() {
          this.setEventListeners();
          this.nameCharCounter();
          this.usernameCharCounter();
       }
    };
    // Initialization function declaration
    oRegistrationController.init();
});