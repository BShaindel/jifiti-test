import {Product} from './product';

export class Store {
  constructor(
  public name: string,
  public id: string,
  public products: Array<Product>,
  public logo?: any
  ){}
}
