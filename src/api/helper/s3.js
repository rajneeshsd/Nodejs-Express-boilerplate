// const AWS = require('aws-sdk');

// //
// const s3 = new AWS.S3({
//     region: process.env.REACT_APP_AWS_BUCKET_REGION,
//     signatureVersion: process.env.REACT_APP_AWS_SIGNATURE_VERSION,
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
// });
// const mainBucketName = process.env.REACT_APP_AWS_BUCKET_NAME;

// module.exports.deleteBucket = (bucketName) => {
//     return s3.deleteBucket({
//         Bucket: `${mainBucketName}/${bucketName}`
//     }).promise();

// }

// module.exports.deleteObject = (bucketName, key) => {
//     return s3.deleteObject({
//         Bucket: mainBucketName,
//         Key: `${bucketName}/${key}`
//     }).promise();
// }

// module.exports.putObject = (bucketName, key, file) => {

//     return new Promise((resolve, reject) => {
//         const fileName = `${key}-${file.originalname}`;
//         s3.putObject({
//             Bucket: mainBucketName,
//             Key: `${bucketName}/${fileName}`,
//             Body: file.buffer,
//             ContentType: file.mimetype,
//         }, function (err, data) {
//             if (err)
//                 reject(err)
//             resolve({
//                 fileName,
//                 fileType: file.mimetype,
//                 originalName: file.originalname
//             });
//         });
//     })

// }


// module.exports.getSignedUrl = (bucketName, key) => {

//     return s3.getSignedUrl('getObject', {
//         Bucket: mainBucketName,
//         Key: `${bucketName}/${key}`,
//         Expires: 3600,
//     });


// }