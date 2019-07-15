// import nodemailer from 'nodemailer';
// import constantObj from '../constants';
// import EmailTemplete from '../../../../../../budha/custom_modules/cms/models/emailTemplete';
// import Admins from '../../../../../../budha/custom_modules/admin/models/admin';

// exports.forgotPassword = async function (userDetails, from) {
//   let emailTemplate = await EmailTemplete.findOne({ "templete_id": 11 });
//   let mailBody = emailTemplate.template;
//   mailBody = mailBody.replace('{{user}}', userDetails.name);
//   mailBody = mailBody.replace('{{app_link}}', userDetails.app_link);
//   const transporter = nodemailer.createTransport({
//     host: constantObj.gmailSMTPCredentials.host,
//     auth: {
//       user: constantObj.gmailSMTPCredentials.username,
//       pass: constantObj.gmailSMTPCredentials.password
//     },
//     port: 465,
//     secure: true
//   });
//   if (!from) {
//     const from = 'releanatelemedicine@gmail.com';
//   }
//   const mailOptions = {
//     from, // sender address
//     to: userDetails.email, // list of receivers
//     subject: emailTemplate.subject, // Subject line
//     // text: mailBody, // plaintext body
//     html: mailBody // html body
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log("Error in forgot password email", error);
//     }
//     console.log("Forgot password email sent");
//   });
// };

// exports.patientRegistration = async function (patientDetails, from) {
//   const transporter = nodemailer.createTransport({
//     host: constantObj.gmailSMTPCredentials.host,
//     auth: {
//       user: constantObj.gmailSMTPCredentials.username,
//       pass: constantObj.gmailSMTPCredentials.password
//     },
//     port: 465,
//     secure: true
//   });
//   if (!from) {
//     const from = 'releanatelemedicine@gmail.com';
//   }

//   let patientRegistrationTemplate = await EmailTemplete.findOne({ "templete_id": 1 });
//   let adminRegistrationTemplate = await EmailTemplete.findOne({ "templete_id": 10 });
//   let adminEmails = await Admins.find({ "deleted" : false,"role" : 1 },{first_name:1,last_name:1,email:1});
//   let adminEmailArray = []
//    adminEmails.map(ele=>{
//     adminEmailArray.push(ele.email)
//   })

//   // Doctor Email Details
//   let mailPatientBody = patientRegistrationTemplate.template;
//   mailPatientBody = mailPatientBody.replace('{{user}}', patientDetails.name);
//   mailPatientBody = mailPatientBody.replace('{{username}}', patientDetails.username);
//   mailPatientBody = mailPatientBody.replace('{{password}}', patientDetails.password);

//   // Doctor Email Details
//   let mailAdminBody = adminRegistrationTemplate.template;
//   mailAdminBody = mailAdminBody.replace('{{patientname}}', patientDetails.name);
//   mailAdminBody = mailAdminBody.replace('{{email}}', patientDetails.email);

//   const mailPatientOptions = {
//     from, // sender address
//     to: patientDetails.email, // list of receivers
//     subject: patientRegistrationTemplate.subject, // Subject line
//     html: mailPatientBody // html body
//   };
//   const mailAdminOptions = {
//     from, // sender address
//     to: adminEmailArray, // list of receivers
//     subject: adminRegistrationTemplate.subject, // Subject line
//     html: mailAdminBody // html body
//   };
//   transporter.sendMail(mailPatientOptions, (error, info) => {
//     if (error) {
//       return console.log("Patient registration email", error);
//     }
//     console.log("Patient registration email sent");
//   });
//   transporter.sendMail(mailAdminOptions, (error, info) => {
//     if (error) {
//       return console.log("Error in Admin email for patient registration", error);
//     }
//     console.log("Admin email for patient registration success");
//   });
// };


// exports.doctorRegistration = async function (doctorDetails, from) {
//   const transporter = nodemailer.createTransport({
//     host: constantObj.gmailSMTPCredentials.host,
//     auth: {
//       user: constantObj.gmailSMTPCredentials.username,
//       pass: constantObj.gmailSMTPCredentials.password
//     },
//     port: 465,
//     secure: true
//   });
//   if (!from) {
//     const from = 'releanatelemedicine@gmail.com';
//   }

//   let doctorRegistrationTemplate = await EmailTemplete.findOne({ "templete_id": 2 });
//   let adminRegistrationTemplate = await EmailTemplete.findOne({ "templete_id": 9 });
//   let adminEmails = await Admins.find({ "deleted" : false,"role" : 1 },{first_name:1,last_name:1,email:1});
//   let adminEmailArray = []
//    adminEmails.map(ele=>{
//     adminEmailArray.push(ele.email)
//   })
//   // Doctor Email Details
//   let mailDoctorBody = doctorRegistrationTemplate.template;
//   mailDoctorBody = mailDoctorBody.replace('{{user}}', doctorDetails.name);
//   mailDoctorBody = mailDoctorBody.replace('{{username}}', doctorDetails.username);
//   mailDoctorBody = mailDoctorBody.replace('{{password}}', doctorDetails.password);

//   // Doctor Email Details
//   let mailAdminBody = adminRegistrationTemplate.template;
//   mailAdminBody = mailAdminBody.replace('{{doctorname}}', doctorDetails.name);
//   mailAdminBody = mailAdminBody.replace('{{doctoremail}}', doctorDetails.email);
//   mailAdminBody = mailAdminBody.replace('{{doctorstate}}', doctorDetails.state);

//   const mailDoctorOptions = {
//     from, // sender address
//     to: doctorDetails.email, // list of receivers
//     subject: doctorRegistrationTemplate.subject, // Subject line
//     html: mailDoctorBody // html body
//   };
//   const mailAdminOptions = {
//     from, // sender address
//     to: adminEmailArray, // list of receivers
//     subject: adminRegistrationTemplate.subject, // Subject line
//     html: mailAdminBody // html body
//   };
//   transporter.sendMail(mailDoctorOptions, (error, info) => {
//     if (error) {
//       return console.log("Doctor registration email", error);
//     }
//     console.log("Doctor registration email sent");
//   });
//   transporter.sendMail(mailAdminOptions, (error, info) => {
//     if (error) {
//       return console.log("Error in Admin email for doctor registration", error);
//     }
//     console.log("Admin email for doctor registration success");
//   });
// };

