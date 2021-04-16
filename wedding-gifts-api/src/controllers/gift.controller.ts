import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Gift} from '../models';
import {GiftRepository} from '../repositories';

export class GiftController {
  constructor(
    @repository(GiftRepository)
    public giftRepository : GiftRepository,
  ) {}

  @post('/gifts')
  @response(200, {
    description: 'Gift model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gift)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gift, {
            title: 'NewGift',
            exclude: ['_id'],
          }),
        },
      },
    })
    gift: Omit<Gift, '_id'>,
  ): Promise<Gift> {
    return this.giftRepository.create(gift);
  }

  @get('/gifts/count')
  @response(200, {
    description: 'Gift model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gift) where?: Where<Gift>,
  ): Promise<Count> {
    return this.giftRepository.count(where);
  }

  @get('/gifts')
  @response(200, {
    description: 'Array of Gift model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gift, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gift) filter?: Filter<Gift>,
  ): Promise<Gift[]> {
    return this.giftRepository.find(filter);
  }

  @patch('/gifts')
  @response(200, {
    description: 'Gift PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gift, {partial: true}),
        },
      },
    })
    gift: Gift,
    @param.where(Gift) where?: Where<Gift>,
  ): Promise<Count> {
    return this.giftRepository.updateAll(gift, where);
  }

  @get('/gifts/{id}')
  @response(200, {
    description: 'Gift model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gift, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Gift, {exclude: 'where'}) filter?: FilterExcludingWhere<Gift>
  ): Promise<Gift> {
    return this.giftRepository.findById(id, filter);
  }

  @patch('/gifts/{id}')
  @response(204, {
    description: 'Gift PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gift, {partial: true}),
        },
      },
    })
    gift: Gift,
  ): Promise<void> {
    await this.giftRepository.updateById(id, gift);
  }

  @put('/gifts/{id}')
  @response(204, {
    description: 'Gift PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() gift: Gift,
  ): Promise<void> {
    await this.giftRepository.replaceById(id, gift);
  }

  @del('/gifts/{id}')
  @response(204, {
    description: 'Gift DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.giftRepository.deleteById(id);
  }
}
