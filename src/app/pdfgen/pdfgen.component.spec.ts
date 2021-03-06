/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfgenComponent } from './pdfgen.component';

describe('PdfgenComponent', () => {
  let component: PdfgenComponent;
  let fixture: ComponentFixture<PdfgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
