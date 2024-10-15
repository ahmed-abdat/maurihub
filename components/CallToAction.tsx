"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    toast({
      title: "Success!",
      description: "Thank you for signing up. We'll be in touch soon!",
    });
    setEmail('');
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Learning?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 lg:mx-auto">
            Join MauriHub today and unlock a world of educational resources.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <Input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-white bg-blue-500 text-white"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button type="submit" variant="secondary" size="lg">
              Get Started
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;