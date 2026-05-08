export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 animate-pulse">
      <div className="space-y-6">
        
        {/* Top bar */}
        <div className="flex gap-4">
          <div className="h-10 w-40 rounded bg-zinc-800"></div>
          <div className="h-10 flex-1 rounded bg-zinc-800"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 p-4 space-y-4"
            >
              <div className="h-6 w-1/2 rounded bg-zinc-800"></div>
              <div className="h-4 w-full rounded bg-zinc-800"></div>
              <div className="h-4 w-5/6 rounded bg-zinc-800"></div>
              <div className="h-40 rounded bg-zinc-800"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}