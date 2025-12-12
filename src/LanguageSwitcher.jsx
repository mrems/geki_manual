import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select 
      onChange={changeLanguage}
      value={i18n.language}
      style={{
        padding: '5px 8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="it">Italiano</option>
      <option value="pt">Português</option>
      <option value="ru">Русский</option>
      <option value="zh">中文</option>
      <option value="ar">العربية</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}

export default LanguageSwitcher;
