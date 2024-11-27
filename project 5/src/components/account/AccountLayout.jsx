import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function AccountLayout({ title, onClose, children }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 md:p-6 border-b">
        <h2 className="text-xl md:text-2xl font-bold pl-8 md:pl-0">{title}</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={clsx(
          'flex-1 overflow-y-auto',
          'p-4 md:p-6',
          'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}