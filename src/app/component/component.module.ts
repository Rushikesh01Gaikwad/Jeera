import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    EditComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule
  ]
})
export class ComponentModule { }
