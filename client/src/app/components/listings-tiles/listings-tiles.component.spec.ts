import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingsTilesComponent } from './listings-tiles.component';

describe('ListingsTilesComponent', () => {
  let component: ListingsTilesComponent;
  let fixture: ComponentFixture<ListingsTilesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingsTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
