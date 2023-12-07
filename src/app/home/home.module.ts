import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ProjectComponentModule } from '../project/project.module';
import { InputModalModule } from '../input-modal/input-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectComponentModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    InputModalModule,
  ],
  declarations: [HomePage],
  exports: [],
})
export class HomePageModule {}
