import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPersonageComponent } from './box-personage.component';

describe('BoxPersonageComponent', () => {
  let component: BoxPersonageComponent;
  let fixture: ComponentFixture<BoxPersonageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPersonageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPersonageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
