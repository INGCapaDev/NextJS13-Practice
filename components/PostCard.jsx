'use client';

import { useRouter } from 'next/navigation';

const PostCard = ({ post, isDetails }) => {
  const router = useRouter();
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      {isDetails ? (
        <button
          onClick={() => {
            router.back();
          }}>
          Volver
        </button>
      ) : (
        <button
          onClick={() => {
            router.push(`/posts/${post.id}`);
          }}>
          Ir a detalles
        </button>
      )}
    </div>
  );
};
export default PostCard;
