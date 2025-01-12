import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Accueil</span>
            </a>
          </div>
        </li>
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={item.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}