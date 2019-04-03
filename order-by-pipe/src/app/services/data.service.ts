
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

  public homeAppliancesData = [
    {id: 101, item: {name: 'Air Conditioner', price: 35000}, releaseDate: new Date('2010/02/13')},
    {id: 102, item: {name: 'Celling Fan', price: 2500}, releaseDate: new Date('1980/04/10')},
    {id: 103, item: {name: 'Clothes Dryer', price: 15000}, releaseDate: new Date('2005/06/07')},
    {id: 104, item: {name: 'Television', price: 50000}, releaseDate: new Date('1984/09/29')},
    {id: 105, item: {name: 'Refrigerator', price: 20000}, releaseDate: new Date('2002/01/21')},
    {id: 106, item: {name: 'Sewing Machine', price: 1500}, releaseDate: new Date('1968/03/15')},
    {id: 107, item: {name: 'Water Purifier', price: 17000}, releaseDate: new Date('2008/01/24')},
    {id: 108, item: {name: 'Oven', price: 4500}, releaseDate: new Date('2003/04/26')},
    {id: 109, item: {name: 'Stove', price: 9000}, releaseDate: new Date('1987/08/07')},
    {id: 110, item: {name: 'Iron', price: 1800}, releaseDate: new Date('1992/11/02')}
  ];

  public getHomeApplianceData() {
    return Observable.of(this.homeAppliancesData);
  }

}
