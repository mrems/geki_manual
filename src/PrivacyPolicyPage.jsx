import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy-container manual-content">
      <h1 className="title-h1">{t('privacy_policy.title')}</h1>
      <p>{t('privacy_policy.intro')}</p>

      <h2>{t('privacy_policy.what_info_title')}</h2>

      <h3>{t('privacy_policy.user_provided_info_subtitle')}</h3>
      <p>{t('privacy_policy.user_provided_info_text1')}</p>
      <p>{t('privacy_policy.user_provided_info_text2')}</p>

      <h3>{t('privacy_policy.auto_collected_info_subtitle')}</h3>
      <p>{t('privacy_policy.auto_collected_info_text')}</p>

      <h2>{t('privacy_policy.real_time_location_title')}</h2>
      <p style={{ display: 'none' }}>{t('privacy_policy.real_time_location_text1')}</p>
      <div>
        <p>{t('privacy_policy.real_time_location_text2')}</p>
        <ul>
          <li>{t('privacy_policy.geolocation_services')}</li>
          <li>{t('privacy_policy.analytics_improvements')}</li>
          <li>{t('privacy_policy.third_party_services')}</li>
        </ul>
      </div>

      <h2>{t('privacy_policy.third_parties_access_title')}</h2>
      <p>{t('privacy_policy.third_parties_access_text1')}</p>
      <div>

        <p>{t('privacy_policy.third_parties_access_text2')}</p>
        <ul>
          <li>
            <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
              {t('privacy_policy.google_play_services')}
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
              {t('privacy_policy.google_analytics_firebase')}
            </a>
          </li>
        </ul>
      </div>
      <p>{t('privacy_policy.service_provider_disclose_info')}</p>
      <ul>
        <li>{t('privacy_policy.disclose_law')}</li>
        <li>{t('privacy_policy.disclose_good_faith')}</li>
        <li>{t('privacy_policy.disclose_trusted_providers')}</li>
      </ul>
      <p></p>

      <h2>{t('privacy_policy.opt_out_rights_title')}</h2>
      <p>{t('privacy_policy.opt_out_rights_text')}</p>

      <h2>{t('privacy_policy.data_retention_title')}</h2>
      <p>{t('privacy_policy.data_retention_text')}</p>

      <h2>{t('privacy_policy.children_title')}</h2>
      <p>{t('privacy_policy.children_text1')}</p>
      <div>

        <p>{t('privacy_policy.children_text2')}</p>
      </div>

      <h2>{t('privacy_policy.security_title')}</h2>
      <p>{t('privacy_policy.security_text')}</p>

      <h2>{t('privacy_policy.changes_title')}</h2>
      <p>{t('privacy_policy.changes_text1')}</p>
      <p>{t('privacy_policy.changes_text2')}</p>

      <p>{t('privacy_policy.effective_date')}</p>

      <h2>{t('privacy_policy.your_consent_title')}</h2>
      <p>{t('privacy_policy.your_consent_text')}</p>

      <h2>{t('privacy_policy.contact_us_title')}</h2>
      <p>{t('privacy_policy.contact_us_text')}</p>
    </div>
  );
}

export default PrivacyPolicyPage;
