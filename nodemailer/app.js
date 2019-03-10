var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testingcorinthians@gmail.com',
    pass: 'qazwsxedc9685'
  }
});

var mailOptions = {
  from: 'cassioelias9685@gmail.com',
  to: 'cassio_qwe@Outlook.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
