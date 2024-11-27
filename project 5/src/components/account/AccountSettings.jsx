import React, { useState } from 'react';
import AccountLayout from './AccountLayout';
import { showToast } from '../Toast';

const genders = [
  { id: 'male', label: 'M' },
  { id: 'female', label: 'Mme' },
  { id: 'other', label: 'Non spécifié' }
];

export default function AccountSettings({ onClose }) {
  const [formData, setFormData] = useState({
    gender: 'male',
    name: 'Alexis Olympique',
    email: 'alexis.oclasc@gmail.com',
    address: '13 rue mauconseil',
    phone: '07 87 12 48 11',
    postalCode: '94120'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Informations sauvegardées avec succès !');
  };

  return (
    <AccountLayout title="GESTION DU COMPTE" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Genre <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            {genders.map(gender => (
              <label key={gender.id} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender.id}
                  checked={formData.gender === gender.id}
                  onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  className="mr-2"
                />
                {gender.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prénom et Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adresse <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code Postal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.postalCode}
              onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Sauvegarder mes informations
        </button>
      </form>
    </AccountLayout>
  );
}