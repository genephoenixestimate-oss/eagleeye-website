import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  Calendar,
  Clock,
  Building,
  User,
  Phone,
  Mail,
  FileText,
  X,
  Shield,
  Loader2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface ServiceFormProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial';
  preferredDate: string;
  preferredTime: string;
  message: string;
  uploadedFileName: string;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({
  preselectedService,
  onClearPreselected
}) => {
  const serviceOptions = [
    'AC Installation',
    'AC Repair',
    'AC Maintenance',
    'AC Cleaning',
    'Heating',
    'Ductwork',
    'Ventilation',
    'Electrical Wiring',
    'Electrical Repair',
    'Lighting',
    'Electrical Panel',
    'Generator',
    'Commercial Electrical',
    'Other'
  ];

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: preselectedService || 'AC Repair',
    propertyType: 'Residential',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    message: '',
    uploadedFileName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedService) {
      // Check if it matches an option or set as custom
      const matched = serviceOptions.find(
        (opt) => opt.toLowerCase() === preselectedService.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        serviceType: matched || preselectedService
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: 'AC Repair',
        propertyType: 'Residential',
        preferredDate: '',
        preferredTime: 'Morning (8:00 AM – 12:00 PM)',
        message: '',
        uploadedFileName: ''
      });
      if (onClearPreselected) onClearPreselected();
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File exceeds 10MB limit' }));
        return;
      }
      setFormData((prev) => ({ ...prev, uploadedFileName: file.name }));
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, uploadedFileName: '' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            DIRECT TECHNICIAN DISPATCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Request a Service
          </h2>
          <p className="text-base text-slate-300">
            Fill out the details below. Our service coordinators will review your request and confirm your appointment window promptly.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Request Received
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Your service request has been received. Our team will contact you shortly to confirm your technician window.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold min-h-[44px]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
                {/* Preselected indicator notice */}
                {preselectedService && (
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-between text-xs text-blue-200">
                    <span>
                      Booking for: <strong className="text-amber-400 font-semibold">{preselectedService}</strong>
                    </span>
                    {onClearPreselected && (
                      <button
                        type="button"
                        onClick={onClearPreselected}
                        className="text-slate-400 hover:text-white"
                      >
                        Change
                      </button>
                    )}
                  </div>
                )}

                {/* Row 1: Full Name, Phone, Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 min-h-[48px] ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:ring-amber-400'
                        }`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="0328 6771816"
                      className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 min-h-[48px] ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:ring-amber-400'
                      }`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="john@example.com"
                      className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 min-h-[48px] ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:ring-amber-400'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Service Type & Property Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Type <span className="text-amber-400">*</span>
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 min-h-[48px]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Property Type <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Residential', 'Commercial', 'Industrial'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type })}
                          className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all min-h-[48px] ${
                            formData.propertyType === type
                              ? 'bg-blue-600 text-white border-blue-500'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Service Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 min-h-[48px]"
                    >
                      <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                      <option value="Urgent / Emergency ASAP">Urgent / Emergency ASAP</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Description / System Symptoms
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe issues (e.g. AC blowing warm air, breaker tripping, desire quote for new 200A panel, unit making noise)..."
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Upload Photo UI */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Upload Photo of System / Panel (Optional)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />

                  {formData.uploadedFileName ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2 text-slate-200 truncate">
                        <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="truncate">{formData.uploadedFileName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 rounded text-slate-400 hover:text-white"
                        aria-label="Remove uploaded file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-2 p-4 rounded-xl border border-dashed border-slate-700 hover:border-slate-500 bg-slate-950/50 cursor-pointer text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <Upload className="w-4 h-4 text-blue-400" />
                      <span>Click to upload AC unit tag, electrical panel, or wiring issue (Max 10MB)</span>
                    </label>
                  )}
                  {errors.file && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.file}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all min-h-[50px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Service Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Text */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                  <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Your information will only be used to respond to your service request.</span>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
