import Link from "next/link";

const NotFound =() => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-6xl font-bold text-[#830707] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#830707] hover:bg-red-700 transition-colors text-white py-2 px-6 rounded-full text-sm font-medium shadow-lg"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
