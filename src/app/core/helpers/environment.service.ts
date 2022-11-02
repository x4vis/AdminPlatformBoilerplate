import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { EnvironmentProject } from '../model/types/environment-project.type';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  get apiURL(): string {
    return environment.api;
  }

  get project(): EnvironmentProject {
    return environment.project;
  }
}
