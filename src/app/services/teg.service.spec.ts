import { TestBed, async, getTestBed } from '@angular/core/testing';

import { TegService } from './teg.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('TegService', () => {


  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
    }).compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  it('should be created', () => {
    const service: TegService = TestBed.get(TegService);
    expect(service).toBeTruthy();
  });
});
