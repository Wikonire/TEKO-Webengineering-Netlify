import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowntismComponent } from './knowntism.component';

describe('KnowntismComponent', () => {
  let component: KnowntismComponent;
  let fixture: ComponentFixture<KnowntismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowntismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowntismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
