import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitercercomponenteComponent } from './mitercercomponente.component';

describe('MitercercomponenteComponent', () => {
  let component: MitercercomponenteComponent;
  let fixture: ComponentFixture<MitercercomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitercercomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitercercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
