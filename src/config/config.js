export const config = {
    secret : process.env.NODE.ENV === 'production' ? process.env.SECRET : "GWtLdu8IrFNU0QCUkbvU",
    mongoUrl: process.env.NODE.ENV === 'production' ? process.env.MONGO_CONNECTION_STRING :'mongodb://localhost/seedalara',
    apiKey : process.env.NODE.ENV === 'production' ? '' : '',
};