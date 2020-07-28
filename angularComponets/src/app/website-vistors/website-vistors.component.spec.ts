import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteVistorsComponent } from './website-vistors.component';

describe('WebsiteVistorsComponent', () => {
  let component: WebsiteVistorsComponent;
  let fixture: ComponentFixture<WebsiteVistorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteVistorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteVistorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
