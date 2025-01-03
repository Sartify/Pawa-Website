export default function Loading() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }
  