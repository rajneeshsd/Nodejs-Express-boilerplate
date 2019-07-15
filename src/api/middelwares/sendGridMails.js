// import sg from '@sendgrid/mail';
// import {
//     config
// } from '../../config/config';


// sg.setApiKey(config.sendGridAPiKey);
// sg.setSubstitutionWrappers('{{', '}}');
// //let request = sg.emptyRequest();

// let generateMail = function (to, substitutions, templateId) {
//     return {
//         from: "noreply@thecanadianloadboard.com",
//         personalizations: [{
//             to: [{
//                 email: to
//             }],
//             dynamic_template_data: substitutions
//         }],
//         asm : { group_id : 10677 ,  groups_to_display : [10677]},
//         templateId: templateId
//     };
// };

// export const sendEmail = (to, substitutions, templateId) => {
//     console.log("in send mail --------------------");
//     let body = generateMail(to, substitutions, templateId);
//     console.log(to, body ,"body for email")
//     return new Promise(function (resolve, reject) {
//         sg.send(body, (error, result) => {
//             if (error) {
//                 reject(error);
//                 console.log(JSON.stringify(error));
//             } else {
//                 console.log("Mail Sent!");
//                 resolve(result);
//             }
//         });
//     });
// }