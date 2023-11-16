import PostCard from '@/components/PostCard';

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

const Posts = async () => {
  const post = await loadPosts();

  return (
    <div>
      {post.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
