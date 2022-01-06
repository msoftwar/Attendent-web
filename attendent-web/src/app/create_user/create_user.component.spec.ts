import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create_UserComponent } from './create_user.component';

describe('Create_UserComponent', () => {
  let component: Create_UserComponent;
  let fixture: ComponentFixture<Create_UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Create_UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Create_UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
