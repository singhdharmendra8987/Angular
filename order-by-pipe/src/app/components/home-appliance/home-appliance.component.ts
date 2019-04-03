
import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home-appliance',
  templateUrl: './home-appliance.component.html',
  styleUrls: ['./home-appliance.component.css']
})
export class HomeApplianceComponent implements OnInit {

  homeApplianceData: any;
  column: string;
  isDesc: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHomeApplianceData()
      .subscribe(response => this.homeApplianceData = response);
  }

  sort(columnName: string): void {
    if (columnName && this.column !== columnName) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.column = columnName;
  }

}
