import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { AppTestingModule } from '../app.module.testing.spec';

xdescribe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule(AppTestingModule));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('should get single user', inject([UsersService, HttpTestingController],
    (service: UsersService, httpMock: HttpTestingController) => {
        const mockUser = {
          data: {},
        };

        service.getSingleUser('1').subscribe((user) => {
          expect(user).toEqual(mockUser);
        });

        const req = httpMock.expectOne(
          `https://reqres.in/api/users/1`,
        );

        expect(req.request.method).toEqual('GET');
        req.flush(mockUser);
        httpMock.verify();
    }
  ));
});
