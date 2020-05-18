import { of } from 'rxjs';

export const usersServiceMock = {
  getSingleUser: jasmine.createSpy('getSingleUser').and.returnValue(of({ data: []})),
};
