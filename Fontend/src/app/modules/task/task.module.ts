import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './pages/addtask/addtask.component';
import { TaskhistoryComponent } from './pages/taskhistory/taskhistory.component';
import { MaintaskComponent } from './pages/maintask/maintask.component';
import { FormsModule } from '@angular/forms';
import { PendingtaskComponent } from './pages/pendingtask/pendingtask.component';
import { MaterialsModule } from '../materials/materials.module';


@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    TaskhistoryComponent,
    MaintaskComponent,
    PendingtaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    MaterialsModule
  ]
})
export class TaskModule { }
