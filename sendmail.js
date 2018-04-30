var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: 'n*****.*****@gmail.com',
    pass: '********'
  }
});

var mailOptions = {
  from: 'n*****.*****@gmail.com',
  to: 't*****.******@gmail.com',
  subject: 'sendte denne via node.js',
  html: '<h1>Men</h1><p>Jeg bruker også html for denne mailen</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
