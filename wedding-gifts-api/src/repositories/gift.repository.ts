import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Gift, GiftRelations} from '../models';

export class GiftRepository extends DefaultCrudRepository<
  Gift,
  typeof Gift.prototype._id,
  GiftRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Gift, dataSource);
  }
}
