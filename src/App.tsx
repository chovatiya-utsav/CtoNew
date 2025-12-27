import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Search from './pages/Search';

type Page = 'landing' | 'search';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/search') {
        setCurrentPage('search');
      } else {
        setCurrentPage('landing');
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = new URL(anchor.href);
        window.history.pushState({}, '', url.pathname);
        handleNavigation();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <MainLayout>
      {currentPage === 'landing' && <Landing />}
      {currentPage === 'search' && <Search />}
    </MainLayout>
  );
}

export default App;
