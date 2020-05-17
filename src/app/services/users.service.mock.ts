import { of } from 'rxjs';

export const usersServiceMock = {
  getUsers: jasmine.createSpy('getUsers').and.returnValue(of({ data: 'data'})),
  getSingleUser: jasmine.createSpy('getSingleUser').and.returnValue(of({ data: 'data'})),
};
