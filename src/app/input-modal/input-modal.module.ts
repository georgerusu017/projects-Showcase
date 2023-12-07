import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModalComponent } from './input-modal.component';
import { DataService } from '../services/data.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InputModalComponent],
  exports: [InputModalComponent],
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  providers: [DataService], // Provide the DataService here
})
export class InputModalModule {}
