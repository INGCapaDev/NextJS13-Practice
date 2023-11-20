'use client';
import { useParams } from 'next/navigation';

const Users = () => {
  const { userID } = useParams();
  if (userID == '1') return <div>User 1</div>;
  return (
    <>
      <div>User not allowed</div>
    </>
  );
};
export default Users;
