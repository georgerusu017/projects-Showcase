import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
})
export class InputModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @Output() newItemEvent = new EventEmitter();

  name: string = 'name';
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  onWillDismiss(event: Event) {}

  inputForm: any;
  validation_messages = {
    name: [
      { type: 'required', message: 'Name required' },
      {
        type: 'minlength',
        message: 'Username must be at least 5 characters long.',
      },
      {
        type: 'maxlength',
        message: 'Username cannot be more than 25 characters long.',
      },
      {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters.',
      },
    ],
    link: [{ type: 'required', message: 'Project link is required' }],
    image: [{ type: 'required', message: 'Please provide an image link' }],
    content: [
      {
        type: 'required',
        message: 'Please complete a few words about your project',
      },
      {
        type: 'minlength',
        message: 'Username must be at least 5 characters long.',
      },
      {
        type: 'maxlength',
        message: 'Username cannot be more than 255 characters long.',
      },
      {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters.',
      },
    ],
  };

  ngOnInit() {
    this.inputForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // this.dataService.addData({ values: this.inputForm.value });
    this.newItemEvent.emit({ values: this.inputForm.value });
    this.inputForm.reset();
    this.modal.dismiss(this.name, 'confirm');
  }
}
