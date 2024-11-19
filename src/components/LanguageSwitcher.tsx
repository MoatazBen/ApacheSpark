// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook from react-i18next

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation(); // This gives you access to the i18n instance

  // Handle language change
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value; // Get selected language
    i18n.changeLanguage(selectedLanguage); // Change the language dynamically
  };

  return (
    <div>
      <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
        
        <option value="en">En</option>
        <option value="fr">Fr</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
