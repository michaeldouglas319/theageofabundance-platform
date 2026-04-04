export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          app: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          app: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          app?: string;
        };
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          summary: string;
          content: string;
          category_id: string;
          image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          summary: string;
          content: string;
          category_id: string;
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          summary?: string;
          content?: string;
          category_id?: string;
          image_url?: string | null;
          updated_at?: string;
        };
      };
      artworks: {
        Row: {
          id: string;
          prompt: string;
          image_url: string;
          model: string;
          user_id: string | null;
          width: number;
          height: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          prompt: string;
          image_url: string;
          model: string;
          user_id?: string | null;
          width?: number;
          height?: number;
          created_at?: string;
        };
        Update: {
          prompt?: string;
          image_url?: string;
          model?: string;
          user_id?: string | null;
          width?: number;
          height?: number;
        };
      };
      posts: {
        Row: {
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
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          summary: string;
          content: string;
          category_id: string;
          author_id: string;
          cover_image_url?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          summary?: string;
          content?: string;
          category_id?: string;
          author_id?: string;
          cover_image_url?: string | null;
          published_at?: string | null;
          updated_at?: string;
        };
      };
      authors: {
        Row: {
          id: string;
          name: string;
          bio: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          bio?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          bio?: string | null;
          avatar_url?: string | null;
        };
      };
      reactions: {
        Row: {
          id: string;
          post_id: string;
          user_id: string;
          type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          user_id: string;
          type: string;
          created_at?: string;
        };
        Update: {
          post_id?: string;
          user_id?: string;
          type?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
