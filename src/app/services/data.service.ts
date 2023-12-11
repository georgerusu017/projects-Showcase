import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { personAddSharp } from 'ionicons/icons';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

export interface Project {
  name: string;
  content: string;
  id: string;
  title: string;
  link: string;
  listingNumber: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public projectsData!: Observable<any>;

  public projects: Project[] = [];
  constructor(private firestore: Firestore) {
    this.getData();
  }

  getData() {
    const projectsInstance = collection(this.firestore, 'projects');
    collectionData(projectsInstance, { idField: 'id' }).subscribe(
      (data: any) => {
        this.projects = [];
        data.forEach((project: any, iter: number) => {
          this.projects.push({
            name: project.name,
            link: project.link,
            title: project.title,
            id: project.id,
            content: project.content,
            listingNumber: iter,
            image: project.image,
          });
        });
      },
    );
    this.projectsData = collectionData(projectsInstance, { idField: 'id' });
  }

  addData(data: any) {
    const projectInstance = collection(this.firestore, 'projects');
    addDoc(projectInstance, data.values)
      .then(() => {
        console.log('Data transmitted successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateData(id: string) {
    const docInstance = doc(this.firestore, 'projects', id);
    const updateData = {
      name: 'Edit works',
    };
    updateDoc(docInstance, updateData)
      .then(() => {
        console.log('Data updated');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // +1

  deleteData(id: string) {
    const docInstance = doc(this.firestore, 'projects', id);
    deleteDoc(docInstance).then(() => {
      console.log('Data deleted', docInstance);
    });
  }
  public getProjects(): Project[] {
    return this.projects;
  }

  public getProjectById(id: number): Project {
    return this.projects[id];
  }
}
