'use client';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
        excepturi hic adipisci voluptate accusamus distinctio facilis qui, aut a
        ad quas, odio id eum nam sequi modi? Aut, nemo veritatis! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Architecto consequatur quia
        exercitationem rerum velit nihil adipisci labore voluptatum placeat
        facilis quaerat autem reiciendis in fugiat dolor facere, repellat quasi
        accusamus!
      </p>
      <button
        className='bg-sky-400 px-3 py-2 rounded-md'
        onClick={() => {
          // query to the server
          router.push('/');
        }}>
        Click to go home
      </button>
    </section>
  );
};
export default About;
