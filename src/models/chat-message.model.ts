import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ChatMessage extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  chatMessageId: string;

  @property({
    type: 'string',
    required: true,
  })
  chatId: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
  })
  messageText?: string;

  @property({
    type: 'string',
  })
  imgUrl?: string;

  @property({
    type: 'string',
  })
  videoUrl?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ChatMessage>) {
    super(data);
  }
}

export interface ChatMessageRelations {
  // describe navigational properties here
}

export type ChatMessageWithRelations = ChatMessage & ChatMessageRelations;
