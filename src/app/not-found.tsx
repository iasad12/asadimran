import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a001f] text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold font-mono text-[#00ff9d] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-[#00ff9d] text-[#0a001f] font-bold uppercase tracking-wider rounded hover:bg-[#00e68d] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
