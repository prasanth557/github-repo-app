import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoModalComponentComponent } from './repo-modal-component.component';

describe('RepoModalComponentComponent', () => {
  let component: RepoModalComponentComponent;
  let fixture: ComponentFixture<RepoModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoModalComponentComponent]
    });
    fixture = TestBed.createComponent(RepoModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
