import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistory } from './history.component';

describe('SearchHistory', () => {
  let component: SearchHistory;
  let fixture: ComponentFixture<SearchHistory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
