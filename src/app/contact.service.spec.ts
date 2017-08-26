import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './contact.service';

import 'rxjs/add/operator/delay';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ContactService]
    });
  });

  it('should be created',
    inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should create new contact',
    inject([ContactService], (service: ContactService) => {
    expect(service.fakeCreateNewContact({name: 'Tiep'})).toBeTruthy();
  }));

  xit('should has 1 item in list',
    async(inject([ContactService], (service: ContactService) => {
      service.getContacts()
        .delay(1000).subscribe((res: any[]) => {
        expect(res.length).toEqual(1);
      });
    })));
});
