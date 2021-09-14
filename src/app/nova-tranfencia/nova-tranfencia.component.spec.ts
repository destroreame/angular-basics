import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTranfenciaComponent } from './nova-tranfencia.component';

describe('NovaTranfenciaComponent', () => {
  let component: NovaTranfenciaComponent;
  let fixture: ComponentFixture<NovaTranfenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTranfenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTranfenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
