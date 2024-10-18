module.exports = {
  app: {
    name: 'Mern Ecommerce',
    apiURL: process.env.BASE_API_URL || 'http://localhost:3000/api',
    clientURL: process.env.CLIENT_URL || 'http://localhost:8080',
  },
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern_ecommerce', // Provide a default local MongoDB URI
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'default_jwt_secret',
    tokenLife: '7d',
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY || 'default_mailchimp_key',
    listKey: process.env.MAILCHIMP_LIST_KEY || 'default_mailchimp_list_key',
  },
  mailgun: {
    key: process.env.MAILGUN_KEY || 'default_mailgun_key',
    domain: process.env.MAILGUN_DOMAIN || 'default_mailgun_domain',
    sender: process.env.MAILGUN_EMAIL_SENDER || 'default@mailgun.com',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID || 'default_google_client_id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'default_google_client_secret',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/api/auth/google/callback',
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID || 'default_facebook_client_id',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'default_facebook_client_secret',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3000/api/auth/facebook/callback',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'default_aws_access_key',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'default_aws_secret_key',
    region: process.env.AWS_REGION || 'us-east-2',
    bucketName: process.env.AWS_BUCKET_NAME || 'default_bucket_name',
  },
};
