import { InformationCircleIcon, PlayCircleIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export const TABS = [
  { id: 'description', label: 'Description', icon: InformationCircleIcon },
  { id: 'video', label: 'Vidéo', icon: PlayCircleIcon },
  { id: 'reviews', label: 'Avis', icon: ChatBubbleLeftIcon }
];

export const PRODUCT_RANGES = [
  {
    id: 'signature',
    name: 'Signature',
    description: 'Les Grands Crus',
    color: 'purple'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'L\'Excellence',
    color: 'amber'
  },
  {
    id: 'decouverte',
    name: 'Découverte',
    description: 'L\'Initiation',
    color: 'emerald'
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'flower',
    name: 'Fleur',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,2c1.11,0,2,0.89,2,2c0,0.52-0.2,0.99-0.53,1.34 C14.39,5.99,15.56,7.38,16,9c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.34,0-0.68-0.04-1-0.13c-0.44,1.62-1.61,3.01-3.13,3.66 C12.2,21.01,12,21.48,12,22c0,1.11-0.89,2-2,2s-2-0.89-2-2c0-0.52,0.2-0.99,0.53-1.34C7.61,18.01,6.44,16.62,6,15 c-2.21,0-4-1.79-4-4s1.79-4,4-4c0.34,0,0.68,0.04,1,0.13c0.44-1.62,1.61-3.01,3.13-3.66C9.8,2.99,10,2.52,10,2C10,0.89,10.89,0,12,0 S14,0.89,14,2z"/>
      </svg>
    )
  },
  {
    id: 'hash',
    name: 'Hash',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M19,3H5C3.89,3,3,3.89,3,5v14c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5C21,3.89,20.11,3,19,3z M17,13h-4v4h-2v-4H7v-2h4 V7h2v4h4V13z"/>
      </svg>
    )
  },
  {
    id: 'capsule',
    name: 'Capsule',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M19,8l-4,4l4,4l-4,4H9l4-4l-4-4l4-4H19z M5,8l4,4l-4,4h10l-4-4l4-4H5z"/>
      </svg>
    )
  },
  {
    id: 'patch',
    name: 'Patch',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M19,3H5C3.89,3,3,3.89,3,5v14c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5C21,3.89,20.11,3,19,3z M17,13h-4v4h-2v-4H7v-2h4 V7h2v4h4V13z"/>
      </svg>
    )
  },
  {
    id: 'roll-on',
    name: 'Roll-on',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/>
      </svg>
    )
  },
  {
    id: 'gummy',
    name: 'Bonbon',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6 S15.31,18,12,18z"/>
      </svg>
    )
  },
  {
    id: 'vape',
    name: 'Vape',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M2,16h15v3H2V16z M20,16h2v3h-2V16z M18,16v3h-1v-3H18z M18,5v9H2V5H18z M20,5h2v9h-2V5z"/>
      </svg>
    )
  }
];