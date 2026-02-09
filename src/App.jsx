import { Suspense } from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl font-medium animate-pulse">Loading projects...</p>
        </div>
      }>
        <Home />
      </Suspense>
    </div>
  )
}

export default App


