import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompZixComponent } from './comp-zix.component';

describe('CompZixComponent', () => {
  let component: CompZixComponent;
  let fixture: ComponentFixture<CompZixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompZixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompZixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
