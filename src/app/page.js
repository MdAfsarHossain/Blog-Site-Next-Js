import BlogTitle from "@/components/BlogTitle";
import { getBlogs } from "@/utls/blogApi";

const Home = async () => {
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const blogs = await data.json();

  const blogsPost = await getBlogs();

  // console.log(blogsPost.length);
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-row justify-center items-center pt-16 pb-10">
        <h1 className="text-5xl font-bold uppercase text-green-500">
          All Blogs
        </h1>
      </div>

      {/* All Blogs Title */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20 px-5 lg:px-0">
        {/* {blogsPost?.slice(0, 15)?.map((blog) => ( */}
        {blogsPost?.map((blog) => (
          <BlogTitle key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// Rafc
