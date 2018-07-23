import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckbox, MatRipple, MatButton, MatFormField, MatInputModule } from '../../../node_modules/@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatTableModule,
    MatInputModule,

  ],
  declarations: [AdminComponent,
    MatCheckbox,
    MatRipple,
    MatButton,



  ]
})
export class AdminModule { }
