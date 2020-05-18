import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [UsersService],
  }));

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
    }
  ));
});
