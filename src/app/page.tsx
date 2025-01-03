import Link from "next/link"; // Import Link from next

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6">
        {/* Use Link to navigate to other pages */}
        <Link href="/signup">
          <button
            className="w-72 px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-lg 
            border-2 border-blue-600 shadow-lg transform transition-all duration-200 
            hover:scale-105 hover:bg-blue-600 hover:shadow-xl 
            active:scale-95 active:shadow-md"
          >
            Sign Up
          </button>
        </Link>
        <Link href="/signin">
          <button
            className="w-72 px-8 py-4 bg-green-500 text-white text-lg font-medium rounded-lg 
            border-2 border-green-600 shadow-lg transform transition-all duration-200 
            hover:scale-105 hover:bg-green-600 hover:shadow-xl 
            active:scale-95 active:shadow-md"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
