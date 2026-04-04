// Article types (wiki)
export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category_id: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

// Artwork types (studio)
export interface Artwork {
  id: string;
  prompt: string;
  image_url: string;
  model: string;
  user_id: string | null;
  width: number;
  height: number;
  created_at: string;
}

// Post types (pulse)
export interface Post {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category_id: string;
  author_id: string;
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  app: 'wiki' | 'pulse';
}

export interface Reaction {
  id: string;
  post_id: string;
  user_id: string;
  type: 'like' | 'bookmark';
  created_at: string;
}

export interface Profile {
  id: string;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// AI Gateway types
export interface AIGenerateTextParams {
  prompt: string;
  system?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface AIGenerateTextResult {
  text: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
  };
}

export interface AIStreamTextParams extends AIGenerateTextParams {
  onChunk?: (chunk: string) => void;
}

export interface AIGenerateObjectParams<T> {
  prompt: string;
  system?: string;
  schema: T;
}
