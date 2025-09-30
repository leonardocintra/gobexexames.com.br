'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

const ConditionalHeader = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return !isHomePage ? <Header /> : null;
};

export default ConditionalHeader;
