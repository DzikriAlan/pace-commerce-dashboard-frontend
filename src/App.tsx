import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar, StickyHeader } from '@shared/components'
import { AddProduct, Dashboard, AllProducts } from '@features/product/components'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        {/* Main Content */}
        <div className={`transition-all duration-300 ease-in-out min-h-screen ${
          sidebarOpen ? 'lg:ml-64' : 'ml-0'
        }`}>
          {/* Sticky Header */}
          <StickyHeader onToggleSidebar={toggleSidebar} />
          
          {/* Routes */}
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/categories" element={<Dashboard />} />
                <Route path="/products/inventory" element={<Dashboard />} />
                <Route path="/orders" element={<Dashboard />} />
                <Route path="/customers" element={<Dashboard />} />
                <Route path="/analytics" element={<Dashboard />} />
                <Route path="/settings" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
