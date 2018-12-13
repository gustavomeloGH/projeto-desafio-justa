import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { TaskDTO } from '../domain/TaskDTO';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public form: FormGroup;
  public title: string;
  private isUpdate: boolean;
  public desableButton: boolean;
  @Output() outputSubmitedSuccess = new EventEmitter();

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.isUpdate = false;
   }

  ngOnInit() {
    this.title = 'Inserir Tarefas';
    this.form = this.fb.group({
      name:            [null, Validators.required],
      description:     [null, Validators.required],
      _id:              null
    });
  }

  submit(): void {
    this.desableButton = true;
    const fValue = this.form.value;
    let url = 'insert';

    if (this.isUpdate) { url = 'update'; }

    this.restService.post<TaskDTO []>(url, fValue)
      .hideTitleSuccess(false).observable()
        .subscribe(_ => {
          this.desableButton = false;
          this.isUpdate = false;
          this.form.reset();
            this.outputSubmitedSuccess.emit('');
        }, (_ => this.desableButton = false));
  }


  update(event: TaskDTO) {
    this.title = 'Atualizar tarefa';
    this.isUpdate = true;
    this.form.get('name').setValue(event.name);
    this.form.get('description').setValue(event.description);
    this.form.get('_id').setValue(event._id);
  }

}
