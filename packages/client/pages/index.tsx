import type { NextPage } from 'next';
import { useCounter } from '@monorepo/shared';

const Home: NextPage = () => {
  const { count } = useCounter();
  return <div>{count}</div>;
};

export default Home;
