import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Factory } from '../store/app/factory.model';

@Injectable()
export class ApiService {
  constructor(
    protected http: HttpClient
  ) {}

  getFactories() {
    return this.http
      .get<Factory[]>('http://localhost:4200/factories')
      .toPromise();
  }

  createFactory(factory: Factory) {
    return this.http
      .post('http://localhost:4200/factories', factory)
      .toPromise();
  }

  updateFactory(factory: Factory) {
    return this.http
      .patch('http://localhost:4200/factories/' + factory._id, factory)
      .toPromise();
  }

  deleteFactory(factory: Factory) {
    return this.http
      .delete('http://localhost:4200/factories/' + factory._id)
      .toPromise();
  }

  generateChildren(factory: Factory) {
    return this.http
      .get('http://localhost:4200/factories/' + factory._id + '/generate')
      .toPromise();
  }
}
