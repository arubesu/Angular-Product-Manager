import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { MatCardModule } from '@angular/material/card';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  exports:[
    CommonModule,
    FormsModule,
    MatCardModule,
    StarComponent,
    RouterModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
