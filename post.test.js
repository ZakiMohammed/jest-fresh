const axios = require('axios').default;
const post = require('./post');

jest.mock('axios');

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'Title 1',
    body: 'Body 1',
  },
  {
    userId: 1,
    id: 2,
    title: 'Title 2',
    body: 'Body 2',
  },
];

describe('Post', () => {
  it('should get all posts', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockPosts));
    const posts = await post.getAll();

    expect(posts).toEqual(mockPosts);
    expect(axios.get).toBeCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
