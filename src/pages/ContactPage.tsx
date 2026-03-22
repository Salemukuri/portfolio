import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CtaButton } from '../components/CtaButton';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget as HTMLFormElement;
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'salemukuri@gmail.com',
      href: 'mailto:salemukuri@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote & Local Projects',
      href: null
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
       
        {/* Header with responsive text alignment */}
<div className="text-left md:text-center mb-12 md:mb-20">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
    Let's Work Together
  </h1>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-auto">
    Have a project in mind? I'd love to help bring your ideas to life.
  </p>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{info.label}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-base text-gray-600 hover:text-accent transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-accent/5 rounded-lg border border-gray-100">
              <h3 className="text-base font-medium text-gray-900 mb-1">Response Time</h3>
              <p className="text-sm text-gray-600">
                I typically respond within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/salemukuri@gmail.com" 
            method="POST"
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100"
          >
            {/* FormSubmit hidden fields */}
            <input type="hidden" name="_subject" value="New contact form submission!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> {/* Replace with your actual domain */}
            <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Send a Message</h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <CtaButton
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </CtaButton>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-700 text-sm">
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-700 text-sm">
                  Message sent! I'll get back to you soon.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;