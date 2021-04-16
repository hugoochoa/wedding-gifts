import {Entity, model, property} from '@loopback/repository';

@model()
export class Gift extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  reserved_by?: string;

  @property({
    type: 'string',
  })
  image_url?: string;


  constructor(data?: Partial<Gift>) {
    super(data);
  }
}

export interface GiftRelations {
  // describe navigational properties here
}

export type GiftWithRelations = Gift & GiftRelations;
