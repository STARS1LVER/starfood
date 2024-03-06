import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSearchComponent } from './not-search.component';

describe('NotSearchComponent', () => {
  let component: NotSearchComponent;
  let fixture: ComponentFixture<NotSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
