// import jwt from 'jsonwebtoken';
// export const Auth = (req, res, next) => {

//     const token = req.header('');

//     if (!token) {
//         console.log('Errr no token');
//         return res.status(200).json({
//             code: 599,
//             message: 'Access denied.No token found',
//             data: []
//         });
//     } else {
//         try {
//             const decoded = jwt.verify(token, process.env.secret);
//             req.user = decoded;
//             next();
//         } catch (err) {
//             console.log('Errr session out');
//             return res.status(200).json({
//                 code: 599,
//                 message: 'Session timeout',
//                 data: []
//             });
//         }
//     }



//     if (req.user.role !== ARTIST_ROLE)
//         return res.json({
//             error: 'Unathorised, Not Artist'
//         });
//     next();


// }




// function auth(req, res, next) {

// }
// module.exports = auth;