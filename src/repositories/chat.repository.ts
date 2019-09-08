import {DefaultCrudRepository} from '@loopback/repository';
import {Chat, ChatRelations} from '../models';
import {ChatServiceDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChatRepository extends DefaultCrudRepository<
  Chat,
  typeof Chat.prototype.chatId,
  ChatRelations
> {
  constructor(
    @inject('datasources.ChatServiceDb') dataSource: ChatServiceDbDataSource,
  ) {
    super(Chat, dataSource);
  }
}
