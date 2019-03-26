import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchPage } from './twitch.page';

describe('TwitchPage', () => {
  let component: TwitchPage;
  let fixture: ComponentFixture<TwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
