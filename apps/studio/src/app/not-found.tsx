import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Artwork Not Found</h1>
      <p className="text-gray-400 mb-6">The artwork you are looking for does not exist.</p>
      <Link href="/" className="text-purple-400 hover:underline">Return to gallery</Link>
    </div>
  );
}
