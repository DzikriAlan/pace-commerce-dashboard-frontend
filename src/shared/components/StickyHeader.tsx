import React from 'react';
import { useLocation } from 'react-router-dom';

interface StickyHeaderProps {
  onToggleSidebar?: () => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onToggleSidebar }) => {
  const location = useLocation();

  // Function to generate title based on route path
  const getPageTitle = (pathname: string): string => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathname === '/' || pathname === '/dashboard') {
      return 'Dashboard';
    }
    
    if (pathname.startsWith('/products')) {
      if (pathname === '/products') {
        return 'All Products';
      } else if (pathname === '/products/add') {
        return 'Add New Product';
      } else if (pathname === '/products/categories') {
        return 'Product Categories';
      } else if (pathname === '/products/inventory') {
        return 'Product Inventory';
      }
    }
    
    if (pathname === '/orders') {
      return 'Orders';
    }
    
    if (pathname === '/customers') {
      return 'Customers';
    }
    
    if (pathname === '/analytics') {
      return 'Analytics';
    }
    
    if (pathname === '/settings') {
      return 'Settings';
    }
    
    // Fallback: capitalize and format path segments
    return pathSegments
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' ');
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 py-6 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Toggle Button - Always visible */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              aria-label="Toggle sidebar"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          
          {/* Page Title */}
          <div className="flex flex-col justify-center h-10">
            <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
          </div>
        </div>
        
        {/* Optional: Add breadcrumbs or additional actions here */}
        <div className="flex items-center space-x-4">
          {/* You can add user menu, notifications, etc. here */}
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
