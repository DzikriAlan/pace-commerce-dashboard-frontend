import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-16 w-16 hover:opacity-80 transition-opacity" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-16 w-16 hover:opacity-80 transition-opacity animate-spin-slow" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-8">Pace Commerce Dashboard</h1>
        
        <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg p-6 border">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors font-medium"
          >
            count is {count}
          </button>
          <p className="text-muted-foreground text-center mt-4">
            Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-muted-foreground text-center mt-8">
          Click on the Vite and React logos to learn more
        </p>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Feature-Based Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium text-accent-foreground">Features</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• @features/auth/components</li>
                <li>• @features/product/components</li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium text-accent-foreground">Shared</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• @shared/api</li>
                <li>• @shared/components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
