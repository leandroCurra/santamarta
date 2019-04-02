import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavBArComponent } from './mobile-nav-bar.component';

describe('MobileNavBArComponent', () => {
  let component: MobileNavBArComponent;
  let fixture: ComponentFixture<MobileNavBArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavBArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavBArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
