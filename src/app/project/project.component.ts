import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService, Project } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  private platform = inject(Platform);
  private data: DataService = inject(DataService);
  @Input() project?: Project;

  constructor(private router: Router) {}

  updateData(id: string, event: Event) {
    // event.stopPropagation();
    this.data.updateData(id);
    event.stopPropagation();
  }
  deleteData(id: string, event: Event) {
    this.data.deleteData(id);
    event.stopPropagation();
  }

  onClickItem($event: MouseEvent) {
    // [routerLink]="'/project/' + project.listingNumber"
    this.router.navigate(['/project/' + this.project?.listingNumber]);
    $event.preventDefault();
  }
}
