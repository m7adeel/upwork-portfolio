import { Button } from '@/components';
import dynamic from 'next/dynamic';

// dynamic import for Layout
const Layout = dynamic(() => import('@/containers/layout/Layout'), { ssr: false });
const ShowLottie = dynamic(() => import('@/components/ui/ShowLottie'), { ssr: false });

const NotFound = () => {
  return (
    <Layout className="grid h-screen place-items-center">
      <div className="w-full max-w-xl text-center">
        <ShowLottie path="/lotties/404.json" className="mx-auto" />

        <p className="mt-5 text-3xl capitalize md:text-4xl text-dark-2">
          page not found
        </p>

        <Button type="link" href="/" size="lg" className="mt-20" sameTab center>
          go home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
