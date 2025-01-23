export const getBlogs = async () => {
  const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await blogs.json();

  return data;
};

export const getSingleBlogPost = async (id) => {
  const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await blog.json();
  return data;
};
