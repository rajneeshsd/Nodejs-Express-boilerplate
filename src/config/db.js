import mongoose from 'mongoose';
import {
  config
} from './config';
mongoose.Promise = global.Promise;


export const connect = () => mongoose.connect(config.mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true
}).then(res => {
  console.log(`Database connected :)`);
}).catch(err => {
  console.log(`Database not connected :-( ${JSON.stringify(err)} `)
});