import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  private data$ = new BehaviorSubject<any>({});
  getData$ = this.data$.asObservable();

  setData(data: any) {
    this.data$.next(data);
  }
}
