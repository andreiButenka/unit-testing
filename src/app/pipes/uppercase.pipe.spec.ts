import { UppercasePipe } from './uppercase.pipe';

xdescribe('UppercasePipe', () => {
  let pipe;
  beforeEach((() => {
    pipe = new UppercasePipe();
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform string to uppercase', () => {
    expect(pipe.transform('text')).toBe('TEXT');
  });
});
