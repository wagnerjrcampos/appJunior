import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchVideoPage } from './twitch-video.page';

describe('TwitchVideoPage', () => {
  let component: TwitchVideoPage;
  let fixture: ComponentFixture<TwitchVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
