// blog/BlogPostPage.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPostTemplate from './BlogPostTemplate';
import { blogPosts } from './posts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <BlogPostTemplate
      title={post.title}
      date={post.date}
      content={post.content}
      backgroundImage={post.backgroundImage}
    />
  );
}