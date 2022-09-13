import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';


//on va importer les modules (PrimeNG, etc) ET on les exporte

@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[]
})
export class SharedModule { }
