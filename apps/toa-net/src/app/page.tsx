'use client'

import { Heart, MessageCircle, Repeat2, Bookmark } from 'lucide-react'

export default function Home() {
  const stories = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: i === 0 ? 'Your Story' : `User ${i}`,
    gradient: `linear-gradient(135deg, hsl(${i * 45}, 70%, 50%), hsl(${i * 45 + 60}, 70%, 60%))`,
  }))

  const posts = [
    {
      id: 1,
      avatar: '👤',
      name: 'Sarah Chen',
      handle: '@sarahchen',
      time: '2h',
      content:
        'Just finished my first week with the new abundance mindset framework. The shift in perspective is incredible. Already seeing different opportunities everywhere.',
      likes: 124,
      comments: 38,
      reposts: 12,
      bookmarks: 8,
    },
    {
      id: 2,
      avatar: '🚀',
      name: 'Alex Rodriguez',
      handle: '@alextech',
      time: '4h',
      content:
        'The future of work is here and it\'s collaborative. Watching teams leverage AI agents to amplify human creativity is the real story.',
      likes: 342,
      comments: 87,
      reposts: 56,
      bookmarks: 32,
    },
    {
      id: 3,
      avatar: '🧘',
      name: 'Maya Patel',
      handle: '@mayawellness',
      time: '6h',
      content:
        'Wellness isn\'t a destination, it\'s a continuous practice. Today\'s reminder: take three minutes to breathe intentionally.',
      image: true,
      likes: 203,
      comments: 45,
      reposts: 23,
      bookmarks: 67,
    },
    {
      id: 4,
      avatar: '🌱',
      name: 'Jordan Blake',
      handle: '@sustainablefuture',
      time: '8h',
      content:
        'Green technology adoption is accelerating faster than predictions. Communities building sustainable infrastructure are becoming the blueprints for tomorrow.',
      likes: 456,
      comments: 123,
      reposts: 89,
      bookmarks: 145,
    },
    {
      id: 5,
      avatar: '💡',
      name: 'Priya Sharma',
      handle: '@priya_innovates',
      time: '12h',
      content:
        'Abundance thinking challenges scarcity mindset. When we believe there\'s enough for everyone, we naturally create systems that work for everyone.',
      likes: 567,
      comments: 234,
      reposts: 178,
      bookmarks: 203,
    },
  ]

  return (
    <main className="max-w-2xl mx-auto">
      {/* Stories Section */}
      <div className="bg-[#0f0f13] border-b border-[#2d2d3d] p-4 sticky top-0 z-10">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl border-2 border-[#7c3aed] hover:border-[#6d28d9] transition"
                style={story.id === 0 ? { backgroundColor: '#1a1a24' } : { background: story.gradient }}
              >
                {story.id === 0 ? '+' : story.name[0]}
              </div>
              <span className="text-xs text-[#9ca3af] mt-2 text-center w-16 truncate">
                {story.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="bg-[#0f0f13] border-b border-[#2d2d3d] p-4">
        <div className="flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex-shrink-0"></div>
          <div className="flex-1">
            <textarea
              placeholder="What's on your mind?"
              className="w-full bg-[#1a1a24] border border-[#2d2d3d] rounded-lg p-3 text-white placeholder-[#6b7280] resize-none focus:border-[#7c3aed] focus:outline-none"
              rows={3}
            />
            <div className="mt-3 flex justify-end">
              <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2 rounded-full font-semibold transition">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#0f0f13] border-b border-[#2d2d3d] p-4 hover:bg-[#1a1a1f] transition cursor-pointer"
          >
            <div className="flex space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center text-xl flex-shrink-0">
                {post.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white hover:underline">{post.name}</span>
                  <span className="text-[#6b7280]">{post.handle}</span>
                  <span className="text-[#6b7280]">·</span>
                  <span className="text-[#6b7280]">{post.time}</span>
                </div>
                <p className="text-white mt-2">{post.content}</p>

                {post.image && (
                  <div className="mt-3 w-full h-48 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-lg opacity-50"></div>
                )}

                <div className="flex justify-between mt-3 text-[#6b7280] max-w-md text-sm">
                  <div className="flex items-center space-x-2 hover:text-[#7c3aed] transition">
                    <MessageCircle size={16} />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-[#7c3aed] transition">
                    <Repeat2 size={16} />
                    <span>{post.reposts}</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-[#7c3aed] transition">
                    <Heart size={16} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-[#7c3aed] transition">
                    <Bookmark size={16} />
                    <span>{post.bookmarks}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
