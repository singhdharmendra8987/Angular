import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {
  homeAppliancesData = [
    {id: 101, name: 'Air Conditioner', price: 35000},
    {id: 102, name: 'Celling Fan', price: 2500},
    {id: 103, name: 'Clothes Dryer', price: 15000},
    {id: 104, name: 'Television', price: 50000},
    {id: 105, name: 'Refrigerator', price: 20000},
    {id: 106, name: 'Sewing Machine', price: 1500},
    {id: 107, name: 'Water Purifier', price: 17000},
    {id: 108, name: 'Oven', price: 4500},
    {id: 109, name: 'Stove', price: 9000},
    {id: 110, name: 'Iron', price: 1800}
  ];

  getHomeApplianceData() {
    return Observable.of(this.homeAppliancesData);
  }

  getHomeApplianceNames() {
    return Observable.of(this.homeAppliancesData.map(item => item.name));
  }
}
