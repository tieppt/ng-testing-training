import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './contact.service';

describe('ContactService clean', () => {
  let service: ContactService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ContactService]
    });
  });

  beforeEach(inject([ContactService], s => service = s));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create new contact', () => {
    expect(service.fakeCreateNewContact({name: 'Tiep'})).toBeTruthy();
  });

  xit('should has 1 item in list', async(() => {
    service.getContacts().subscribe((res: any[]) => {
      expect(res.length).toEqual(1);
    });
  }));

  it('should get value after 500ms', fakeAsync(() => {
    let value;
    service.fakeAsyncTask().then(v => value = v);
    expect(value).toBeUndefined();
    tick(400);
    expect(value).toBeUndefined();
    tick(100);
    expect(value).toEqual(300);
  }));
});
