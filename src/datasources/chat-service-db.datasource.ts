import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './chat-service-db.datasource.json';

export class ChatServiceDbDataSource extends juggler.DataSource {
  static dataSourceName = 'ChatServiceDb';

  constructor(
    @inject('datasources.config.ChatServiceDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
