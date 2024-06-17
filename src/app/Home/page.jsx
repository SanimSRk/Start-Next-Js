import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h2>This is Home pages</h2>
      <Link href={'/Home/Hostry'}>
        {' '}
        <button>Hostry</button>
      </Link>
      <Link href={'/Home/Payment'}>
        <button>Payment</button>
      </Link>
    </div>
  );
};

export default page;
