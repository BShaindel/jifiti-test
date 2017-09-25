
import {Store} from "./store";

export class Product {
  constructor(
    public price: number,
    public title: string,
    public store: Store,
    public image?: any

  ){}
}
