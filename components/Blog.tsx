import React from 'react';
import Section from './Section';
import { ARTICLES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description, imageUrl, platform, url } = article;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-accent/30 transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full"
    >
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-accent-green mb-1 text-center">{platform}</p>
  <h3 className="font-serif text-xl font-bold text-light mb-2 flex-grow text-center">{title}</h3>
  <p className="text-muted text-base mb-4 text-center leading-relaxed px-2">{description}</p>
        <div className="flex items-center text-accent-green font-semibold group-hover:underline mt-auto justify-center">
          Read More <ArrowUpRight size={20} className="ml-1" />
        </div>
      </div>
    </a>
  );
};

const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Recent Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ARTICLES.map((article, index) => (
          <div key={article.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;