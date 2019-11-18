import AWS from 'aws-sdk';

class CarDbService {
  private _response: any;

  constructor() {
    const fakeDynamoDb = require('@server/services/dynamodb.export.json');
    this._response = {
      items: fakeDynamoDb.Items.map(AWS.DynamoDB.Converter.unmarshall),
      count: fakeDynamoDb.Count,
    }
  }

  getList(): any[] {
    return this._response.items
      .filter((item: { visible: Boolean}) => item.visible)
      .sort((a: any, b: any) => a.pricing.price - b.pricing.price);
  }

  getById(id: string) {
    const list = this.getList();
    return list.find(item => item.id === id);
  }
}

export default new CarDbService();
