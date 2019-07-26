import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotelistComponent } from './quotelist.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuotelistComponent', () => {
  let component: QuotelistComponent;
  let fixture: ComponentFixture<QuotelistComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ QuotelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
