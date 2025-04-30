import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  to,
  href,
  className = '',
  onClick,
}) => {
  const cardContent = (
    <>
      {icon && (
        <div className="mb-4 text-green-500">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  const baseClasses = "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {cardContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${className}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div 
      className={`${baseClasses} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {cardContent}
    </div>
  );
};

export default Card;