import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Chat extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  chatId: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  users: string[];

  @property({
    type: 'date',
    required: true,
  })
  lastMessageTime: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerId: string;

  @property({
    type: 'date',
    required: true,
  })
  createdDate: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
