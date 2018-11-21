import { FilterPostsPipe } from './filterPosts.pipe';

describe('EasyPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPostsPipe();
    expect(pipe).toBeTruthy();
  });
});
