import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import i18n from './i18n'; // Importer explicitement l'objet i18n
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManualContent from './ManualContent.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter basename="/geki_manual">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ManualContent />} />
          <Route path="privacy_policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </I18nextProvider>,
)
