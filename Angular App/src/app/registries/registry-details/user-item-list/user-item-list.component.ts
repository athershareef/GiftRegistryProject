import {Component, OnInit} from '@angular/core';
import {Item} from '../../../model/item';
import {ItemComService} from '../../../services/item-com.service';
import {Router} from '@angular/router';
import {RegistryDetailsService} from '../registry-details.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-user-item-list',
  templateUrl: './user-item-list.component.html',
  styleUrls: ['./user-item-list.component.css']
})
export class UserItemListComponent implements OnInit {
  itemList: Item[];
  selectedItemList: number[] = [];

  constructor(private itemComService: ItemComService, private router: Router, private registryDetailService: RegistryDetailsService) {
  }

  addToSelectedItemList(checked: boolean, itemId: number) {
    if (checked) {
      this.selectedItemList.unshift(itemId);
      this.registryDetailService.selectedItemListChanged.next(this.selectedItemList);
    } else {
      this.selectedItemList.splice(this.selectedItemList.indexOf(itemId), 1);
      this.registryDetailService.selectedItemListChanged.next(this.selectedItemList);
    }
  }

  getItemList() {
    this.itemComService.getItemList().subscribe(
      res => {
        this.itemList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getItemList();
  }

}
