import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;                  // to access properties and methods
  let fixture: ComponentFixture<ProfileComponent>;
  let element;                                      // to access DOM element
  let debug;                                        // to access test helper

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should print `Username: `', async(() => {
    expect(element.querySelector('h2').innerText).toBe('Username:');
    expect(debug.query(By.css('h2')).nativeElement.innerText).toBe('Username:');
  }));

  it('should print `Username: Tiep`', async(() => {
    component.user = {name: 'Tiep'};
    fixture.detectChanges();
    expect(element.querySelector('h2').innerText).toBe('Username: Tiep');
    expect(debug.query(By.css('h2')).nativeElement.innerText).toBe('Username: Tiep');
  }));

  it('should emit event when `AfterViewInit`', async(() => {
    component.didInit.subscribe(res => {
      expect(res).toBeTruthy();
    });
    component.ngAfterViewInit();
  }));
});
