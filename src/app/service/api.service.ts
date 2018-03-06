import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Factory } from '../store/app/factory.model';

@Injectable()
export class ApiService {
  // This should come from the environments file eventually
  baseUrl = 'http://52.3.10.162/';

  constructor(
    protected http: HttpClient
  ) {}

  getFactories() {
    return this.http
      .get<Factory[]>(this.baseUrl + 'factories')
      .toPromise();
  }

  createFactory(factory: Factory) {
    return this.http
      .post(this.baseUrl + 'factories', factory)
      .toPromise();
  }

  updateFactory(factory: Factory) {
    return this.http
      .patch(this.baseUrl + 'factories/' + factory._id, factory)
      .toPromise();
  }

  deleteFactory(factory: Factory) {
    return this.http
      .delete(this.baseUrl + 'factories/' + factory._id)
      .toPromise();
  }

  generateChildren(factory: Factory) {
    return this.http
      .get(this.baseUrl + 'factories/' + factory._id + '/generate')
      .toPromise();
  }
}
