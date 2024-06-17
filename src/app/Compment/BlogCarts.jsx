import Link from 'next/link';

const BlogCarts = ({ blog }) => {
  const { title, content, author, date, id } = blog;
  return (
    <div className="rounded-lg shadow-md border border-green-400 p-4 h-full items-end grid">
      <p className="text-xl font-bold text-green-400">{title}</p>
      <p className="my-3">{content}</p>
      <div className="flex justify-between">
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <Link href={`/Blog/${id}`}>
        <button className="btn w-full mt-6 bg-green-500 text-white">
          View Deatils
        </button>
      </Link>
    </div>
  );
};

export default BlogCarts;
