/*export default {
   // MONGODB_URL:process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/myg',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'

}*/

import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://venkey2486:mydear123@@myvill.bn7sc.mongodb.net/geedam?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};
