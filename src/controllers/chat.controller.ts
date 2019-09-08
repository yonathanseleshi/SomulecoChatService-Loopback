import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Chat} from '../models';
import {ChatRepository} from '../repositories';

export class ChatController {
  constructor(
    @repository(ChatRepository)
    public chatRepository : ChatRepository,
  ) {}

  @post('/chats', {
    responses: {
      '200': {
        description: 'Chat model instance',
        content: {'application/json': {schema: getModelSchemaRef(Chat)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chat, {exclude: ['chatId']}),
        },
      },
    })
    chat: Omit<Chat, 'chatId'>,
  ): Promise<Chat> {
    return this.chatRepository.create(chat);
  }

  @get('/chats/count', {
    responses: {
      '200': {
        description: 'Chat model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Chat)) where?: Where<Chat>,
  ): Promise<Count> {
    return this.chatRepository.count(where);
  }

  @get('/chats', {
    responses: {
      '200': {
        description: 'Array of Chat model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Chat)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Chat)) filter?: Filter<Chat>,
  ): Promise<Chat[]> {
    return this.chatRepository.find(filter);
  }

  @patch('/chats', {
    responses: {
      '200': {
        description: 'Chat PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chat, {partial: true}),
        },
      },
    })
    chat: Chat,
    @param.query.object('where', getWhereSchemaFor(Chat)) where?: Where<Chat>,
  ): Promise<Count> {
    return this.chatRepository.updateAll(chat, where);
  }

  @get('/chats/{id}', {
    responses: {
      '200': {
        description: 'Chat model instance',
        content: {'application/json': {schema: getModelSchemaRef(Chat)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Chat> {
    return this.chatRepository.findById(id);
  }

  @patch('/chats/{id}', {
    responses: {
      '204': {
        description: 'Chat PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chat, {partial: true}),
        },
      },
    })
    chat: Chat,
  ): Promise<void> {
    await this.chatRepository.updateById(id, chat);
  }

  @put('/chats/{id}', {
    responses: {
      '204': {
        description: 'Chat PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() chat: Chat,
  ): Promise<void> {
    await this.chatRepository.replaceById(id, chat);
  }

  @del('/chats/{id}', {
    responses: {
      '204': {
        description: 'Chat DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.chatRepository.deleteById(id);
  }
}
