'use client'

import { Users, Heart, MessageCircle, Repeat2, Bookmark } from 'lucide-react'

export default function CommunityPage({ params }: { params: { id: string } }) {
  const communityId = params.id

  const community = {
    id: communityId,
    name: 'Abundance Builders',
    description: 'A community dedicated to building abundance-focused products and services for the future.',
    members: 12400,
    posts: 8934,
    image: 'bg-gradient-to-br from-[#7c3aed] to-[#4f46e5]',
  }

  const posts = [
    {
      id: 1,
      avatar: '👨‍💼',
      name: 'Marcus Johnson',
      handle: '@marcusbuilds',
      time: '3h',
      content: 'Excited to announce our new abundance framework for community builders. Open source, free, and ready for anyone.',
      likes: 234,
      comments: 56,
      reposts: 89,
      bookmarks: 45,
    },
    {
      id: 2,
      avatar: '👩‍🎨',
      name: 'Emma Design',
      handle: '@emmadesign',
      time: '5h',
      content: 'Design thinking meets abundance mindset. How we\'re rethinking UX for collaborative communities.',
      image: true,
      likes: 198,
      comments: 42,
      reposts: 67,
      bookmarks: 56,
    },
    {
      id: 3,
      avatar: '🧑‍💻',
      name: 'Dev Masters',
      handle: '@devmasters',
      time: '8h',
      content: 'Building the API layer for abundance. Technology that scales with human values.',
      likes: 412,
      comments: 103,
      reposts: 145,
      bookmarks: 89,
    },
  ]

  return (
    <main className="max-w-2xl mx-auto">
      {/* Community Header */}
      <div className={`${community.image} h-48 w-full opacity-60`}></div>

      {/* Community Info */}
      <div className="bg-[#0f0f13] border-b border-[#2d2d3d] px-6 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white">{community.name}</h1>
            <p className="text-[#9ca3af] mt-2">{community.description}</p>
            <div className="flex space-x-6 mt-4 text-sm">
              <div>
                <span className="font-bold text-white">{community.members.toLocaleString()}</span>
                <span className="text-[#9ca3af] ml-1">Members</span>
              </div>
              <div>
                <span className="font-bold text-white">{community.posts.toLocaleString()}</span>
                <span className="text-[#9ca3af] ml-1">Posts</span>
              </div>
            </div>
          </div>
          <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2 rounded-full font-semibold transition">
            Join Community
          </button>
        </div>
      </div>

      {/* Posts in Community */}
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
