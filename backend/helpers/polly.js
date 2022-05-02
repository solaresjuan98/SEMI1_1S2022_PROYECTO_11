require('dotenv').config();

const {
    StartSpeechSynthesisTaskCommand,
} = require("@aws-sdk/client-polly");

const { pollyClient } = require('./polllyClient');



const run = async ( params ) => {
    try {
      const data = await pollyClient.send(
        new StartSpeechSynthesisTaskCommand(params)
      );
      let url = data.SynthesisTask.OutputUri
      console.log(url)
      return url

    } catch (err) {
      console.log("Error putting object", err);
    }
};

module.exports = {
    run
}
