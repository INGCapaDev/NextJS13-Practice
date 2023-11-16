import PostCard from '@/components/PostCard';

async function loadPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await loadPost(id);
  if (!post) return <div>Post not found</div>;

  return <PostCard post={post} isDetails />;
};
export default PostPage;
