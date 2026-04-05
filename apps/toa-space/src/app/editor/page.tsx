'use client'

import { Puck, Config } from '@measured-co/puck'
import '@measured-co/puck/puck.css'
import { ReactNode } from 'react'

// Define component types
interface HeroProps {
  headline: string
  subheadline: string
  ctaText: string
  ctaUrl: string
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  title: string
  features: Feature[]
}

interface TextSectionProps {
  content: string
  align: 'left' | 'center' | 'right'
}

interface CTABannerProps {
  text: string
  buttonLabel: string
  bg: string
}

// Hero Component
const Hero = ({ headline, subheadline, ctaText, ctaUrl }: HeroProps) => (
  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6 rounded-lg">
    <h1 className="text-4xl font-bold mb-4">{headline}</h1>
    <p className="text-xl mb-8 max-w-2xl">{subheadline}</p>
    <a href={ctaUrl} className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
      {ctaText}
    </a>
  </div>
)

// Feature Grid Component
const FeatureGrid = ({ title, features }: FeatureGridProps) => (
  <div className="py-12">
    <h2 className="text-3xl font-bold mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl mb-3">{feature.icon}</div>
          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
)

// Text Section Component
const TextSection = ({ content, align }: TextSectionProps) => (
  <div className={`py-12 text-lg leading-relaxed text-${align}`}>
    <p className="max-w-2xl mx-auto text-gray-700">{content}</p>
  </div>
)

// CTA Banner Component
const CTABanner = ({ text, buttonLabel, bg }: CTABannerProps) => (
  <div className={`py-16 px-6 rounded-lg text-white text-center`} style={{ backgroundColor: bg }}>
    <p className="text-2xl font-bold mb-6">{text}</p>
    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
      {buttonLabel}
    </button>
  </div>
)

// Default props for components
const defaultHeroProps: HeroProps = {
  headline: 'Welcome to Your Site',
  subheadline: 'Create something amazing',
  ctaText: 'Get Started',
  ctaUrl: '#',
}

const defaultFeatureGridProps: FeatureGridProps = {
  title: 'Our Features',
  features: [
    { icon: '🎨', title: 'Beautiful Design', description: 'Stunning visual designs' },
    { icon: '⚡', title: 'Fast Performance', description: 'Lightning quick load times' },
    { icon: '🛡️', title: 'Secure', description: 'Enterprise-grade security' },
  ],
}

const defaultTextSectionProps: TextSectionProps = {
  content: 'Write your compelling content here. This text section can be aligned left, center, or right.',
  align: 'center',
}

const defaultCTABannerProps: CTABannerProps = {
  text: 'Ready to get started?',
  buttonLabel: 'Start Now',
  bg: '#4f46e5',
}

// Puck Configuration
const config: Config = {
  components: {
    Hero: {
      fields: {
        headline: {
          type: 'text',
        },
        subheadline: {
          type: 'text',
        },
        ctaText: {
          type: 'text',
        },
        ctaUrl: {
          type: 'text',
        },
      },
      defaultProps: defaultHeroProps,
      render: ({ headline, subheadline, ctaText, ctaUrl }: HeroProps) => (
        <Hero headline={headline} subheadline={subheadline} ctaText={ctaText} ctaUrl={ctaUrl} />
      ),
    },
    FeatureGrid: {
      fields: {
        title: {
          type: 'text',
        },
        features: {
          type: 'array',
          arrayFields: {
            icon: {
              type: 'text',
            },
            title: {
              type: 'text',
            },
            description: {
              type: 'text',
            },
          },
        },
      },
      defaultProps: defaultFeatureGridProps,
      render: ({ title, features }: FeatureGridProps) => (
        <FeatureGrid title={title} features={features} />
      ),
    },
    TextSection: {
      fields: {
        content: {
          type: 'text',
        },
        align: {
          type: 'select',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      },
      defaultProps: defaultTextSectionProps,
      render: ({ content, align }: TextSectionProps) => (
        <TextSection content={content} align={align} />
      ),
    },
    CTABanner: {
      fields: {
        text: {
          type: 'text',
        },
        buttonLabel: {
          type: 'text',
        },
        bg: {
          type: 'text',
        },
      },
      defaultProps: defaultCTABannerProps,
      render: ({ text, buttonLabel, bg }: CTABannerProps) => (
        <CTABanner text={text} buttonLabel={buttonLabel} bg={bg} />
      ),
    },
  },
}

// Initial data
const initialData = {
  content: [
    {
      type: 'Hero',
      props: {
        headline: 'Build Your Dream Website',
        subheadline: 'Create beautiful, professional websites without coding',
        ctaText: 'Start Building',
        ctaUrl: '#',
      },
    },
  ],
  root: {
    title: 'My Site',
  },
}

// Editor Page
export default function EditorPage() {
  const handlePublish = (data: any) => {
    console.log('Publishing:', data)
    alert('Site published! (This is a demo)')
  }

  return (
    <div className="w-full h-screen">
      <Puck
        config={config}
        data={initialData}
        onPublish={handlePublish}
      />
    </div>
  )
}
