'use client';
import { useEffect, useState } from 'react';
const page = ({ params }) => {
  console.log(params.id);
  const [data, setData] = useState([]);

  const finleData = data.find(item => params?.id === item?.id);
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(finleData);
  return (
    <div>
      this is Deatils pages
      <p>{finleData?.content}</p>
    </div>
  );
};
export default page;
