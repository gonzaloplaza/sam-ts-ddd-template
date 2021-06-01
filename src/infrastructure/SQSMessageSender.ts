import { AWSError } from 'aws-sdk';
import SQS from 'aws-sdk/clients/sqs';
import { PromiseResult } from 'aws-sdk/lib/request';
import { Item } from '../domain/Item';
import { MessageSender } from '../domain/MessageSender';

export class SQSMessageSender implements MessageSender {
  private sqsClient: SQS;
  constructor() {
    this.sqsClient = new SQS({ region: 'eu-central-1' });
  }

  async send(item: Item): Promise<PromiseResult<SQS.SendMessageResult, AWSError>> {
    console.log('Queue url: ' + process.env.QUEUE_URL);
    const params: SQS.SendMessageRequest = {
      MessageBody: JSON.stringify(item),
      QueueUrl: process.env.QUEUE_URL || ''
    };

    return await this.sqsClient.sendMessage(params).promise();
  }
}
