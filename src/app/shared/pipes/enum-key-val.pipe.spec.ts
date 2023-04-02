import { EnumKeyValPipe } from './enum-key-val.pipe';

describe('EnumKeyValPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumKeyValPipe();
    expect(pipe).toBeTruthy();
  });
});
