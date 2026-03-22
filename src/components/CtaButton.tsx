import React from 'react';
import { Link } from 'react-router-dom';

const ctaStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 300,
  lineHeight: 1.6,
  letterSpacing: '0.06em',
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '12px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.3s ease, transform 0.3s ease',
  border: 'none',
  cursor: 'pointer',
};

const hoverStyle: React.CSSProperties = {
  color: '#D6FD3A',
  transform: 'scale(1.04)',
};

interface CtaLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

interface CtaButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const CtaLink: React.FC<CtaLinkProps> = ({ to, children, className }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={to}
      className={className}
      style={hovered ? { ...ctaStyle, ...hoverStyle } : ctaStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

export const CtaButton: React.FC<CtaButtonProps> = ({ onClick, type = 'button', disabled, children, className }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={hovered && !disabled ? { ...ctaStyle, ...hoverStyle } : { ...ctaStyle, opacity: disabled ? 0.7 : 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};
