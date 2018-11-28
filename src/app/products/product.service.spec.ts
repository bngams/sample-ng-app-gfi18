import { TestBed, async, inject } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiService } from '../share/api.service';

describe('ProductSerice', () => {
    let httpSpy;
    let httpMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductService
            ],
            imports: [HttpClientModule],
        }).compileComponents();
        // create spy
        httpSpy = jasmine.createSpyObj('Http', ['get']);
        httpMock = TestBed.get(HttpClient);
    }));

    it('should be created', inject([ProductService], (service: ProductService) => {
        expect(service).toBeTruthy();
    }));

    it('should fetch products', inject([ProductService], (service: ProductService) => {
        const products = [{ id: 1, name: 'Surface' }];
        // spy on http.get
        httpSpy.get.and.returnValue(products);
        service.fetchProducts().subscribe(data => {
            expect(products[0]).toEqual(data[0]);
        });
    }));

    // it('should fetch products other mocking', () => {
    //     const api = new ApiService();
    //     let productService: ProductService = new ProductService(httpMock, api);
    //     expect(true).toBe(true);
    // });

});
