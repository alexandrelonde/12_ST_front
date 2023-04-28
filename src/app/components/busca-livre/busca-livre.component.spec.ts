import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaLivreComponent } from './busca-livre.component';

describe('BuscaLivreComponent', () => {
  let component: BuscaLivreComponent;
  let fixture: ComponentFixture<BuscaLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
