$(document).ready(function () {
    $('form').each(function () {
      $(this).validate({
        rules: {
          name: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          mobile: {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10,
            /*remote: {
              url: "./SendSms.php?sendotp=true",
              type: "post",
            },*/
          },
          /*otp: {
            required: true,
            minlength: 6,
            maxlength: 6,
            remote: {
              url: "./SendSms.php?verifyotp=true",
              type: "post",
            },
          },*/
          project: {
            required: true,
          },
          comment: {
            required: true,
          }
        },
        messages: {
          name: {
            required: "Please Enter Your Name",
          },
          email: {
            required: "Please enter your email address",
            email: "Please enter a VALID email address",
          },
          mobile: {
            required: "Please enter VALID mobile no",
            digits: "Mobile should be no format only",
            minlength: "Mobile No should be minimum 10 digit",
            maxlength: "Mobile No should be maximum 10 digit",
            remote: "Please enter correct mobile no"
          },
          otp: {
            required: "Please Enter Vailid OTP",
            minlength: "OTP should be minimum 6 digit",
            maxlength: "OTP should be maximum 6 digit",
            remote: "Please enter correct OTP"
          },
          project: {
            required: "Please select project name",
          },
          comment: {
            required: "Please enter your comment",
          }
        },
        submitHandler: function (form) {
          form.submit();
        },
      });
    });
  });
  