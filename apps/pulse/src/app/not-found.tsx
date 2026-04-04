import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
      <Link href="/" className="text-red-600 hover:underline">Return to homepage</Link>
    </div>
  );
}
