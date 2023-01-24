import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogComponentComponent } from './dilog-component.component';

describe('DilogComponentComponent', () => {
  let component: DilogComponentComponent;
  let fixture: ComponentFixture<DilogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
