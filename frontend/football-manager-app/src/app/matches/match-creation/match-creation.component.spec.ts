import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCreationComponent } from './match-creation.component';

describe('MatchCreationComponent', () => {
  let component: MatchCreationComponent;
  let fixture: ComponentFixture<MatchCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
