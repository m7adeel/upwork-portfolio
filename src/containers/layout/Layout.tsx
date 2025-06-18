'use client'
import dynamic from 'next/dynamic';

// dynamic import of the components
const Email = dynamic(() => import('@/containers/Email'), { ssr: false });
const Footer = dynamic(() => import('@/containers/layout/Footer'), { ssr: false });
const Navbar = dynamic(() => import('@/containers/layout/Navbar'), { ssr: false });
const Social = dynamic(() => import('@/containers/Social'), { ssr: false });


type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
    </div>
  );
};

export default Layout;
