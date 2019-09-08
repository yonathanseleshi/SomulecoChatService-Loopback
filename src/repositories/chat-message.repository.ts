import {DefaultCrudRepository} from '@loopback/repository';
import {ChatMessage, ChatMessageRelations} from '../models';
import {ChatServiceDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChatMessageRepository extends DefaultCrudRepository<
  ChatMessage,
  typeof ChatMessage.prototype.chatMessageId,
  ChatMessageRelations
> {
  constructor(
    @inject('datasources.ChatServiceDb') dataSource: ChatServiceDbDataSource,
  ) {
    super(ChatMessage, dataSource);
  }
}
