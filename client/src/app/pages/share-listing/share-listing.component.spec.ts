import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareListingComponent } from './share-listing.component';

describe('AddListingComponent', () => {
  let component: ShareListingComponent;
  let fixture: ComponentFixture<ShareListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
