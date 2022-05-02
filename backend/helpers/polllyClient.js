require('dotenv').config();

const { PollyClient } = require( "@aws-sdk/client-polly");

const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const pollyClient = new PollyClient({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    }
});
module.exports = { pollyClient };
