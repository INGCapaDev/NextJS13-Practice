import PostCard from '@/components/PostCard';
import Posts from '../page';
import { Suspense } from 'react';

async function loadPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await loadPost(id);
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <PostCard post={post} isDetails />

      <h3>Otras Publicaciones</h3>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>
    </>
  );
};
export default PostPage;
