import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';

@Injectable()
export class ItemComService {

  private itemPathURL = 'http://localhost:8080/item/';

  constructor(private http: HttpClient) {
  }

  removeItem(itemId: number) {
    return this.http.post(this.itemPathURL + 'remove', itemId, {withCredentials: true});
  }

  getItemList() {
    return this.http.get<Item[]>(this.itemPathURL + 'itemList', {withCredentials: true});
  }

  addItem(item: Item) {
    return this.http.post(this.itemPathURL + 'add', item, {withCredentials: true});
  }

}
