import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../services/rest.service';
import { TaskDTO } from '../domain/TaskDTO';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: Array<TaskDTO>;
  @Output() outputItemToUpdate = new EventEmitter<TaskDTO>();

  constructor(private restService: RestService) {
    this.getData();
  }

  public getData(): void {
    this.restService.get<TaskDTO []>('list')
    .hideTitleSuccess(true).observable()
      .subscribe(tasks => this.list = tasks.reverse());
  }

  ngOnInit() {
  }

  public update(item: TaskDTO): void {
    this.outputItemToUpdate.emit(item);
    this.list.splice(this.list.indexOf[`${item}`], 1);
  }

  public remove(item: TaskDTO): void {
    this.restService.delete<TaskDTO>(`delete/${item._id}`)
      .hideTitleSuccess(false).observable()
        .subscribe(_ => this.list.splice(this.list.indexOf[`${item}`], 1) );
  }

  public isNullOrEmptyList(): boolean {
    return (this.list) ? this.list.length === 0 : true;
  }
}
