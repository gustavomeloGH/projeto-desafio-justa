import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild ('listComponent') listComponent: ListComponent;
  @ViewChild ('saveComponent') saveComponent: SaveComponent;

  constructor() { }

  ngOnInit() {
  }

  public refresh(): void {
    this.listComponent.getData();
  }

  public update(event): void {
    this.saveComponent.update(event);
  }

}
