import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function SideNav({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
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
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}