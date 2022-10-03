import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormulariosComponent } from './home-formularios.component';

describe('HomeFormulariosComponent', () => {
  let component: HomeFormulariosComponent;
  let fixture: ComponentFixture<HomeFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFormulariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
