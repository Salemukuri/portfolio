import React, { useState, useEffect } from 'react';
import { X, Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  correctPassword: string;
  projectTitle: string;
}

const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  correctPassword,
  projectTitle
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError('');
      setIsLoading(false);
      setShowPassword(false);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (password === correctPassword) {
      onSuccess();
      onClose();
    } else {
      setError('Incorrect password. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 32px;
          width: 90%;
          max-width: 480px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.3s ease-out;
          position: relative;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #757575;
          margin-bottom: 24px;
        }

        .form-label {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          display: block;
          margin-bottom: 8px;
        }

        .password-input-container {
          position: relative;
          margin-bottom: 16px;
        }

        .password-input {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          width: 100%;
          padding: 12px 48px 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .password-input:focus {
          outline: none;
          border-color: #D6FD3A;
          background: white;
          box-shadow: 0 0 0 3px rgba(214, 253, 58, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.3s ease;
        }

        .password-toggle:hover {
          color: #374151;
        }

        .error-message {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #dc2626;
          margin-bottom: 16px;
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
        }

        .submit-button {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          background-color: #000000;
          color: #ffffff;
          width: 100%;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #333333;
          transform: translateY(-1px);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.3s ease;
          padding: 8px;
          border-radius: 8px;
        }

        .close-button:hover {
          color: #374151;
          background: #f3f4f6;
        }

        .lock-icon-container {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #D6FD3A, #c5e82a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff40;
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .modal-content {
            margin: 16px;
            padding: 24px;
          }
          
          .modal-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="lock-icon-container">
            <Lock className="w-8 h-8 text-black" />
          </div>

          <h2 className="modal-title text-center">Protected Content</h2>
          <p className="modal-subtitle text-center">
            "{projectTitle}" is under NDA. Please enter the access code to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="password" className="form-label">
              Access Code
            </label>
            
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                placeholder="Enter access code"
                required
                disabled={isLoading}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="submit-button"
            >
              {isLoading ? (
                <>
                  <div className="spinner" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Access Project</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordModal;