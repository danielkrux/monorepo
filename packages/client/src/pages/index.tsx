import type { NextPage } from 'next';
import { useCounter } from '@monorepo/shared';

const Home: NextPage = () => {
  const { count, incrementByOne, reduceByOne } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementByOne}>Increment</button>
      <button onClick={reduceByOne}>Decrement</button>
    </div>
  );
};

export default Home;
