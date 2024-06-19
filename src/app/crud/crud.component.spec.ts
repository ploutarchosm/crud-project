import { TestBed } from '@angular/core/testing';
import { CrudComponent } from '@app/crud/crud.component';

describe('CrudComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudComponent],
    }).compileComponents();
  });

  it('should create the crud component', () => {
    const fixture = TestBed.createComponent(CrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
