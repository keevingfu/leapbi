import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, BarChart3, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // All text is in English - no Chinese characters
  const texts = {
    brandName: 'LeapAI',
    tagline: 'Intelligent Content Creation Platform',
    welcomeBack: 'Welcome Back',
    createAccount: 'Create Account',
    signInDescription: 'Sign in to your LeapAI account',
    signUpDescription: 'Join LeapAI to start creating amazing content',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    enterFullName: 'Enter your full name',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password',
    confirmYourPassword: 'Confirm your password',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    help: 'Help',
    allRightsReserved: 'All rights reserved',
    // Validation messages
    emailRequired: 'Email is required',
    emailInvalid: 'Email format is invalid',
    passwordRequired: 'Password is required',
    passwordTooShort: 'Password must be at least 6 characters',
    fullNameRequired: 'Full name is required',
    passwordsDontMatch: 'Passwords do not match',
    processing: 'Processing...'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = texts.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = texts.emailInvalid;
    }

    if (!formData.password) {
      newErrors.password = texts.passwordRequired;
    } else if (formData.password.length < 6) {
      newErrors.password = texts.passwordTooShort;
    }

    if (isSignUp) {
      if (!formData.fullName) {
        newErrors.fullName = texts.fullNameRequired;
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = texts.passwordsDontMatch;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await onLogin({
          email: formData.email,
          password: formData.password
        });
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{texts.brandName}</h1>
          </div>
          <p className="text-gray-600 text-lg">
            {texts.tagline}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isSignUp ? texts.createAccount : texts.welcomeBack}
            </h2>
            <p className="text-gray-600">
              {isSignUp ? texts.signUpDescription : texts.signInDescription}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {texts.fullName}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={texts.enterFullName}
                    disabled={isLoading}
                  />
                </div>
                {errors.fullName && (
                  <div className="mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-sm text-red-600">{errors.fullName}</p>
                  </div>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {texts.emailAddress}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={texts.enterEmail}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <div className="mt-1 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-sm text-red-600">{errors.email}</p>
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {texts.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={texts.enterPassword}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="mt-1 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-sm text-red-600">{errors.password}</p>
                </div>
              )}
            </div>

            {/* Confirm Password (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  {texts.confirmPassword}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={texts.confirmYourPassword}
                    disabled={isLoading}
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                  </div>
                )}
              </div>
            )}

            {/* Forgot Password (Sign In Only) */}
            {!isSignUp && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  disabled={isLoading}
                >
                  {texts.forgotPassword}
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{texts.processing}</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? texts.createAccount : texts.signIn}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Sign Up/Sign In */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? texts.alreadyHaveAccount : texts.dontHaveAccount}
              {' '}
              <button
                onClick={toggleMode}
                disabled={isLoading}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors disabled:opacity-50"
              >
                {isSignUp ? texts.signIn : texts.signUp}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 {texts.brandName}. {texts.allRightsReserved}
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              {texts.privacyPolicy}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              {texts.termsOfService}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              {texts.help}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;