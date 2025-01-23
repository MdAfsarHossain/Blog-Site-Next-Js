import { getSingleBlogPost } from "@/utls/blogApi";

const Blog = async ({ params }) => {
  //   console.log("Blog Params: ", params);

  const blog = await getSingleBlogPost(params?.slug);

  return (
    <div className="px-5 lg:px-0 min-h-screen container mx-auto">
      <div className="mt-8 border-2 p-5 rounded-md border-orange-500">
        {/* User Id */}
        <div className="flex flex-row gap-5 items-center justify-start">
          <p className="font-bold text-2xl">User ID:</p>
          <p className="text-xl">{blog?.userId}</p>
        </div>

        {/* ID */}
        <div className="flex flex-row gap-5 items-center justify-start">
          <p className="font-bold text-2xl">ID:</p>
          <p className="text-xl">{blog?.id}</p>
        </div>

        {/* Title */}
        <div className="flex flex-row gap-5 items-center justify-start">
          <p className="font-bold text-2xl">Title: </p>
          <p className="text-xl">{blog?.title}</p>
        </div>

        {/* Body */}
        <div className="flex flex-row gap-5 items-center justify-start">
          <p className="font-bold text-2xl">Body: </p>
          <p className="text-xl">{blog?.body}</p>
        </div>
        {/* End of blog */}
      </div>
    </div>
  );
};

export default Blog;
