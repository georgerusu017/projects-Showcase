import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Project } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private dataService = inject(DataService);
  isLoading: boolean = true;

  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getProjects(): Project[] {
    return this.dataService.getProjects();
  }

  addProject(data: {}) {
    this.dataService.addData(data);
  }
}
