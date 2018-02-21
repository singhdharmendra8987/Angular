import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  homeApplianceData: any;
  homeApplianceNames: string[];
  sortBy: string;
  isDesc: boolean;
  isNameDesc: boolean;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getHomeApplianceData().subscribe(response => this.homeApplianceData = response);
    this.dataService.getHomeApplianceNames().subscribe(response => this.homeApplianceNames = response);
  }

  sort(sortBy: string): void {
    if (sortBy && this.sortBy !== sortBy) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortBy = sortBy;
  }

  toggleNameOrder(): void {
    this.isNameDesc = !this.isNameDesc;
  }
}
