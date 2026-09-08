import { useEffect, useRef } from 'react';
import { ExternalLink, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';
import profilePhoto from '../../assets/gz.jpeg';
import { personalInfo } from '../data/portfolioData';

interface ProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDialog({ isOpen, onClose }: ProfileDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const linkedinLabel = personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 backdrop-blur-sm sm:items-center sm:p-6 dark:bg-black/75"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <section
        id="profile-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-dialog-title"
        className="w-full max-h-[92dvh] overflow-y-auto rounded-t-[28px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#1C1C1E] sm:max-w-md sm:rounded-[28px]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/8 bg-white/90 px-5 py-4 backdrop-blur-md dark:border-white/8 dark:bg-[#1C1C1E]/90 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#86868B]">
            Contact card
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#6E6E73] transition-colors hover:bg-black/10 hover:text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white/8 dark:text-[#A1A1A6] dark:hover:bg-white/12 dark:hover:text-white"
            aria-label="Close profile"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-7 sm:pb-7">
          <div className="flex flex-col items-center text-center">
            <img
              src={profilePhoto}
              alt={`${personalInfo.name} profile portrait`}
              className="h-36 w-36 rounded-[32px] border border-black/10 object-cover shadow-lg dark:border-white/10 sm:h-44 sm:w-44"
            />
            <h2
              id="profile-dialog-title"
              className="mt-5 text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              {personalInfo.name}
            </h2>
            <p className="mt-1 text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
              {personalInfo.role}
            </p>
          </div>

          <div className="mt-7 divide-y divide-black/7 overflow-hidden rounded-2xl border border-black/8 bg-[#F5F5F7] dark:divide-white/8 dark:border-white/8 dark:bg-[#2C2C2E]">
            {personalInfo.phone ? (
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-black/4 dark:hover:bg-white/5"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#86868B]" />
                <span className="min-w-0 flex-1 text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {personalInfo.phone}
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3.5">
                <Phone className="h-4 w-4 shrink-0 text-[#86868B]" />
                <span className="text-sm text-[#86868B]">Phone number not provided</span>
              </div>
            )}

            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-black/4 dark:hover:bg-white/5"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#86868B]" />
              <span className="min-w-0 flex-1 truncate text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                {personalInfo.email}
              </span>
            </a>

            <div className="flex items-center gap-3 px-4 py-3.5">
              <MapPin className="h-4 w-4 shrink-0 text-[#86868B]" />
              <span className="text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                {personalInfo.location}
              </span>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-black/4 dark:hover:bg-white/5"
            >
              <Linkedin className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <span className="min-w-0 flex-1 truncate text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                {linkedinLabel}
              </span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#86868B] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
