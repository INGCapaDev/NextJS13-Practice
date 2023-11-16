'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PostCard = ({ post, isDetails }) => {
  const router = useRouter();
  return (
    <div>
      {isDetails ? (
        <h3>
          {post.id}. {post.title}
        </h3>
      ) : (
        <Link href={`/posts/${post.id}`}>
          <h3>
            {post.id}. {post.title}
          </h3>
        </Link>
      )}
      <p>{post.body}</p>
      {isDetails && (
        <button
          onClick={() => {
            router.back();
          }}>
          Volver
        </button>
      )}
    </div>
  );
};
export default PostCard;
