// App.tsx
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2s) - you can replace with actual loading logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-zinc-900">
        {loading ? (
          <Loader />
        ) : (
          <main>
            <Outlet />
          </main>
        )}
      </div>
      <Analytics />
    </>
  );
}

export default App;
