import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export abstract class SseEvent<M> {

  public abstract getData(): M;
}

export class SseOpenEvent<M> extends SseEvent<M> {

  constructor(public event: Event) {
    super();
  }

  public getData(): M {
    throw new Error('Method not implemented.');
  }

}

export class SseErrorEvent<M> extends SseEvent<M> {

  constructor(public event: Event) {
    super();
  }

  public getData(): M {
    throw new Error('Method not implemented.');
  }

}

export class SseMessageEvent<M> extends SseEvent<M> {

  constructor(public event: MessageEvent) {
    super();
  }

  public getData(): M {
    return this.event.data;
  }

}

@Injectable({
  providedIn: 'root'
})
export class SseClientService {

  constructor() { }

  public watch<M>(url: string): Observable<SseEvent<M>> {

    const observable = new Observable<SseEvent<M>>((subject) => {
      const eventSource = new EventSource(url);
      eventSource.addEventListener('message', (message) => {
        subject.next(new SseMessageEvent(message.data));
      });
      eventSource.addEventListener('error', (err) => {
        subject.next(new SseErrorEvent(err));
      });
      eventSource.addEventListener('open', (open) => {
        subject.next(new SseOpenEvent(open));
      });
      return () => eventSource.close();
    });

    return observable;
  }

}

export class SseClientServiceMock extends SseClientService {

  private calls = new Map<string, Subject<any>>();

  constructor() {
    super();
  }

  public watch(url: string): Observable<SseEvent<any>> {
    const subject = new Subject<any>();
    this.calls[url] = subject;
    return subject.asObservable() as Observable<SseEvent<any>>;
  }


  public expectOne(url: string): Subject<any> {
    return this.calls[url];
  }

  public createMockEvent(eventData: any): MessageEvent {
    const message = {
      data: eventData
    };
    return message as MessageEvent;
  }
}


