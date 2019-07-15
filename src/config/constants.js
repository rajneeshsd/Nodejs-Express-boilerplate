const Messages = {
  EmailExist: 'Email already exist. Please use another email.',
  UsernameExist: 'Username already exist. Please use another username.',
  DeleteErr: 'Sorry! This account has been deleted. Please use another email.',
  StatusErr: 'Sorry! This account has been deactivated . Please contact admin.',
  BadErr: 'Sorry! Something went wrong, Please try again.',
  RegistrationSuccess: "Registration has been completed successfully.",
  RequiredFields: 'All fields are required',
  LoginErrMessage: 'Invalid credentials',
  UpdateSuccess: 'Update has been successful',
  UpdateFail: 'Fail to update Data',
  UserNotLoggedIn: 'User isn\'t logged In',
  SuccessForgot: "Reset password link has been sent to your email.",
  EmailDoesNotExist: "Email does not exist",
  ResetPassword: "Your password has been reset",
  ExpiredResetLink: "Link has been expired",
  NoAdminFound:"No admin found",
  AdminFound:"Admins found",
  NoAdminType: "Error.You are not a admin",
  NoUserFound: 'No record found',
  AdminUpdated: 'Admin updated successfully',
  PdfCreateSuccess: 'Pdf Saved Successfully.',
  PdfUpdatedSuccess:'Pdf updated successfully.',
  PdfDeleted: 'Pdf deleted successfully',
 
  EmailTemplateUpdatedSuccess:"Email Template updated successfully.",
  CMSSuccess:"CMS Page updated successfully.",
  EmailTemplateNotFound:"Email template not found.",
  CMSNotFound:"Cms page not found.",
  LinkNotFound:"YouTube link not found.",
  YoutubeLinkUpdatedSuccess:"Youtube Link updated successfully.",
  YoutubeCreateSuccess: 'Youtube link Saved Successfully.',
  LinkCreateErr:"Error in creating youtube Link",
  LinkCreateSuccess: 'You tube link Saved Successfully.',
  // Cms Content
  CmsContentSaved: 'Data Saved Successfully',
  CmsPackageContent: 'You are not authorized to add package.',
  CmsPackageContentSaved: 'Package Saved Successfully.',
  CmsPackageContentErr: 'Fail to Save Package.',

}

const GmailSMTPCredentials = {
  Service: 'gmail',
  Host: 'smtp.gmail.com',
  Username: 'test70870@gmail.com',
  Password: 'Qwerty_123456'
};

const HttpStatus = {
  Processing: 102,
  Success: 200, // Go to success
  Created: 201, // Go to success
  Accepted: 202, // Go to success
  NonAuthInfo: 203, // Go to success
  NoContent: 204, // Give data null and go to success
  Found: 302,
  BadRequest: 400,
  Unauthorized: 401,
  SubscriptionRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  Conflict: 409,
  NoDataFound: 410,
  Unprocessable: 422,
  InternalServerErr: 500,
  TimeoutError:599
};

// const ApiBaseUrl = 'http://localhost:3000'; // For api page redirection
// const WebBaseUrl = 'http://localhost:3001'; // For Web page redirection
// const apiBaseUrl = 'http://54.71.18.74:4555'; // For api page redirection
// const webBaseUrl = 'http://54.71.18.74:4554'; // For Web page redirection

const constObj = {
  Messages,
  HttpStatus,
  GmailSMTPCredentials
};

export default constObj;

