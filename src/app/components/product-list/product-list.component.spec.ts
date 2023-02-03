import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {spyOnClass} from 'jasmine-es6-spies'

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent, NgbPagination],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [
        {provide: ProductService, useFactory: () => spyOnClass(ProductService) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find category name on the page', () => {
    expect(fixture.nativeElement.querySelector('[data-test="category-name"]')).toBeTruthy();
  });

  it('should show a list of products on the page', ()=>{
    expect(fixture.nativeElement.querySelector('[data-test="products-list"]')).toBeTruthy();
  });
});
