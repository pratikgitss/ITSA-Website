import { Code2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Code2 className="h-16 w-16 text-indigo-600 animate-bounce" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-200 rounded-full">
            <div className="absolute inset-0 bg-indigo-600 rounded-full animate-loading-bar" />
          </div>
        </div>
        <p className="mt-4 text-gray-600 animate-pulse">Loading ITSA...</p>
      </div>
    </div>
  );
}