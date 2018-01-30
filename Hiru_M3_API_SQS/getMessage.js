let AWS = require('aws-sdk');
const sns = new AWS.SNS();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '5',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (data) {
		data.forEach(message => {
			console.log(message);
		})
	}, function (error) {
		console.log(error);
	});
	


	callback(null, 'Successfully executed');
}