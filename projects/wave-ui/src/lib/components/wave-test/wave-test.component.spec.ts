import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveTestComponent } from './wave-test.component';

describe('WaveTestComponent', () => {
  let component: WaveTestComponent;
  let fixture: ComponentFixture<WaveTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaveTestComponent]
    });
    fixture = TestBed.createComponent(WaveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
