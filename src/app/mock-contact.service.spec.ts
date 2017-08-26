import { TestBed, inject, async} from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ContactService Mock', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpTestingController, ContactService]
    });
  });

  beforeEach(inject([ContactService, HttpTestingController], (s, http) => {
    service = s;
    httpMock = http;
  }));

  it('should has 2 item in list', () => {
    const users = [
      { name: 'John' },
      { name: 'Doe' }
    ];
    service.getContacts().subscribe((res: any[]) => {
      expect(res.length).toEqual(2);
      expect(res).toEqual(users);
      const req = httpMock.expectOne('http://localhost:4200/assets/contact.json');
      expect(req.request.method).toBe('GET');
      req.flush(users);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
