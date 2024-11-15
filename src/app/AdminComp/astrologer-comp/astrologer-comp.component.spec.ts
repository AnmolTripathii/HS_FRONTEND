import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerCompComponent } from './astrologer-comp.component';

describe('AstrologerCompComponent', () => {
  let component: AstrologerCompComponent;
  let fixture: ComponentFixture<AstrologerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologerCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AstrologerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
