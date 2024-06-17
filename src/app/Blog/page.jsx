'use client';
import { useEffect, useState } from 'react';
import BlogCarts from '../Compment/BlogCarts';
const page = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="mb-[120px] bg-white px-12 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCarts key={blog.id} blog={blog}></BlogCarts>
        ))}
      </div>
    </div>
  );
};

export default page;
