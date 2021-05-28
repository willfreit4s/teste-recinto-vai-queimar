import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HeaderData {
  pageTitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    pageTitle: ' ',
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
