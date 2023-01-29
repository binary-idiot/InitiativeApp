import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TrackerItem} from "@modules/tracker/models/tracker-item.model";

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private items$: BehaviorSubject<TrackerItem[]> = new BehaviorSubject<TrackerItem[]>([]);

  getItems(): Observable<TrackerItem[]> {
    return this.items$.asObservable();
  }

  setItems(items: TrackerItem[]): void {
    this.items$.next(items);
  }

  addItem(item: TrackerItem): void {
    const items: TrackerItem[] = this.items$.getValue();
    items.push(item);
    this.setItems(items);
  }

  removeItem(item: TrackerItem): void {
    const items: TrackerItem[] = this.items$.getValue();
    const index: number = items.findIndex((i: TrackerItem) => i === item);
    items.splice(index,  1);
    this.setItems(items);
  }

  constructor() { }
}
