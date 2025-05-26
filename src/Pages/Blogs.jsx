import React from "react";
import { useNavigate } from "react-router";
import { blogsData } from "../Data/Data";
import usefetch from "../hook/usefetch";

const Blogs = () => {
  const navigate = useNavigate();

  const handleReadmore = (id) => {
    navigate(`/readmore/${id}`);
  };

  //api
  const [posts, loading, error] = usefetch("http://localhost:3000/post");
  console.log(posts);

  return (
    <div className="bg-[#cbd5e1] min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-7xl px-4 mx-auto">
        <h1
          className="text-2xl lg:text-5xl lg:font-bold text-center lg:text-white mb-10"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
        >
          BLOGS
        </h1>
        <hr className="border-2 border-white mx-auto mb-10 lg:flex hidden" />
        <p className="text-2xl ml-10 lg:text-white">Top articles</p>

        {/* Blog Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-7"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden mb-10"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover p-3 rounded-[20px]"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <button
                  onClick={() => handleReadmore(blog.id)}
                  className="text-sm text-gray-700 hover:underline font-medium"
                >
                  Read more →
                </button>
              </div>
            </div>
          ))}

          {/* API Data */}
          <ul className="col-span-full">
            {loading && <p className="text-blue-500">Data is loading</p>}
            {error && <p className="text-red-500">{error.message}</p>}
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col text-white border-2 border-blue-500 rounded-lg p-3 m-2 overflow-x-auto"
              >
                <li className="mb-1">ID: {post.id}</li>
                <li className="mb-1">Title: {post.title}</li>
                <li className="mb-2">Content: {post.content}</li>
                <li>
                  {post.image && post.image.length > 0 ? (
                    <div className="flex flex-wrap">
                      {post.image.map((img, idx) => (
                        <img
                          key={idx}
                          src={`http://localhost:3000/${img}`}
                          className="w-20 h-20 m-2 rounded-md object-cover"
                          alt={post.title}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>No Image Available</p>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 px-4">
        <button
          onClick={() => navigate("/createablog")}
          className="text-sm rounded-full hover:underline font-medium bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ml-[2rem] lg:ml-[48rem]"
        >
          Create a blog
        </button>
      </div>
    </div>
  );
};

export default Blogs;
