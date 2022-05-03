var AWS = require('aws-sdk');

require('dotenv').config();

const bucketName=process.env.AWS_BUCKET_NAME;
const region=process.env.AWS_BUCKET_REGION;
const accessKeyId=process.env.AWS_ACCESS_KEY;
const secretAccessKey=process.env.AWS_SECRET_ACCESS_KEY;

// const config = new AWS.Config({
//   accessKeyId: accessKeyId,
//   secretAccessKey: secretAccessKey,
// });

// AWS.config.update( { region: region } );


const client = new AWS.Rekognition({ accessKeyId, region, secretAccessKey });


const compararcaras = (source, target) => {
  /*console.log(source)
  console.log(target)*/

  const params = {

    TargetImage: {
      S3Object: {
        Bucket: bucketName,
        Name: target
      },
    },
    SourceImage: {
      Bytes: Buffer.from(source, 'base64')
    },

    SimilarityThreshold: 85
  }

    return client.compareFaces(params).promise()

}

module.exports = {
  client,
  compararcaras
}
