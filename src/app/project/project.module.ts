import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectComponent } from './project.component';
import { InputModalModule } from '../input-modal/input-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    InputModalModule,
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
})
export class ProjectComponentModule {}
