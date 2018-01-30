let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveAndDeleteMessages({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '3',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			console.log(message);
			
		})
		 return receivedMessages;	
	}, function (deleteSuccessData) {
		// implement delete success state here
		console.log(deleteSuccessData);
	}, function (error) {
		// implement error handling logic here
		console.log(error);
	});


	callback(null, 'Successfully executed');
}