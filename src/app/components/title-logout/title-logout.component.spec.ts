import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLogoutComponent } from './title-logout.component';

describe('TitleLogoutComponent', () => {
  let component: TitleLogoutComponent;
  let fixture: ComponentFixture<TitleLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
