import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisegundocomponentComponent } from './misegundocomponent.component';

describe('MisegundocomponentComponent', () => {
  let component: MisegundocomponentComponent;
  let fixture: ComponentFixture<MisegundocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisegundocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisegundocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
