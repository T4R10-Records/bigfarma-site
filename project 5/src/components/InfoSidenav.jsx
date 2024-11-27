import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import AboutSection from './info/AboutSection';
import GuideSection from './info/GuideSection';
import BlogSection from './info/BlogSection';
import FaqSection from './info/FaqSection';
import ContactSection from './info/ContactSection';
import TermsSection from './info/TermsSection';
import PrivacySection from './info/PrivacySection';

const INFO_SECTIONS = [
  {
    id: 'about',
    title: 'À propos de nous',
    component: AboutSection
  },
  {
    id: 'guide',
    title: 'Guide du CBD',
    component: GuideSection
  },
  {
    id: 'blog',
    title: 'Blog',
    component: BlogSection
  },
  {
    id: 'faq',
    title: 'FAQ',
    component: FaqSection
  },
  {
    id: 'contact',
    title: 'Contact',
    component: ContactSection
  },
  {
    id: 'terms',
    title: 'Conditions générales',
    component: TermsSection
  },
  {
    id: 'privacy',
    title: 'Politique de confidentialité',
    component: PrivacySection
  }
];

export default function InfoSidenav({ isOpen, onClose, activeSection: initialSection }) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const ActiveComponent = INFO_SECTIONS.find(s => s.id === activeSection)?.component;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              if (!activeSection) onClose();
              else setActiveSection(null);
            }}
          />
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={clsx(
              'fixed inset-y-0 left-0 bg-white shadow-lg z-50',
              'w-full sm:max-w-md md:max-w-lg lg:max-w-xl',
              'flex flex-col'
            )}
          >
            {activeSection ? (
              <>
                <div className="flex items-center justify-between p-4 md:p-6 border-b">
                  <button
                    onClick={() => setActiveSection(null)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                  <h2 className="text-xl font-bold flex-1 text-center">
                    {INFO_SECTIONS.find(s => s.id === activeSection)?.title}
                  </h2>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                  {ActiveComponent && <ActiveComponent />}
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center p-4 md:p-6 border-b">
                  <h2 className="text-xl md:text-2xl font-bold">
                    INFORMATIONS
                  </h2>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 md:p-6">
                  <div className="space-y-2">
                    {INFO_SECTIONS.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={clsx(
                          'w-full p-4 text-left rounded-lg transition-colors',
                          'flex items-center justify-between',
                          'hover:bg-gray-50',
                          activeSection === section.id ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
                        )}
                      >
                        <span className="font-medium">{section.title}</span>
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </nav>

                <div className="border-t p-4 md:p-6">
                  <div className="text-sm text-gray-500">
                    Besoin d'aide ? Contactez notre service client
                  </div>
                  <button
                    onClick={() => setActiveSection('contact')}
                    className="mt-2 w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Nous contacter
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}