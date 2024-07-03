import { createMock } from 'ts-auto-mock';
interface Interface {
  a: string;
  b: number;
}
describe('Example tests', () => {
  let mock: Interface;
  beforeEach(() => {
    mock = createMock<Interface>();
  });
  it('should work', () => {
    expect(mock.a).toBe('');
  });
  it('should return sum values', () => {
    expect(1 + 1).toBe(2);
  });
});