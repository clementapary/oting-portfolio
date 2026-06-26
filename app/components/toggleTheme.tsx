"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

// Simple subscription to wait until the browser window object exists
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();

  // Returns false on server, true on client once mounted (no useEffect needed)
  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Return a structural placeholder layout during server rendering
  if (!isMounted) return <div className="h-10 w-10" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-xl border bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-500" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
      )}
    </button>
  );
}
