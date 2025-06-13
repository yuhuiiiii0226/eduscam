export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 w-2/3 bg-white/20 rounded-lg mx-auto mb-6" />
            <div className="h-8 w-1/2 bg-white/20 rounded-lg mx-auto" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <div className="h-8 w-8 bg-white/20 rounded-full mb-4" />
                <div className="h-6 w-2/3 bg-white/20 rounded-lg mb-2" />
                <div className="h-4 w-full bg-white/20 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section Skeleton */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="h-8 w-48 bg-gray-200 rounded-lg" />
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-4">
              <div className="h-48 bg-gray-200 rounded-lg mb-4" />
              <div className="h-6 w-3/4 bg-gray-200 rounded-lg mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <div className="h-8 w-24 bg-gray-200 rounded-lg" />
                <div className="h-8 w-24 bg-gray-200 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 