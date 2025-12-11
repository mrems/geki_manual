import { useTranslation } from 'react-i18next';

function ManualContent() {
  const { t } = useTranslation();

  return (
    <div className="manual-content">
      <h1 className="title-h1">{t('header.title')}</h1>
      <h2>{t('manualContent.analysisModels.title')}</h2>
      <h3>{t('manualContent.analysisModels.standardModel.title')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('manualContent.analysisModels.standardModel.description') }}></p>

      <h3>{t('manualContent.analysisModels.advancedModel.title')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('manualContent.analysisModels.advancedModel.description') }}></p>

      <h3>{t('manualContent.analysisModels.expertModel.title')}</h3>
      <p className="last-paragraph" dangerouslySetInnerHTML={{ __html: t('manualContent.analysisModels.expertModel.description') }}></p>

      <h2>{t('manualContent.creditsUsage.title')}</h2>
      <p>{t('manualContent.creditsUsage.objective')}</p>

      <h3>{t('manualContent.creditsUsage.goldenRule.title')}</h3>
      <p>{t('manualContent.creditsUsage.goldenRule.instruction')}</p>
      <p>{t('manualContent.creditsUsage.goldenRule.explanation')}</p>

      <h2>{t('manualContent.identificationStrategy.title')}</h2>
      <p>{t('manualContent.identificationStrategy.note')}</p>
      <p>{t('manualContent.identificationStrategy.step1')}</p>
      <p>{t('manualContent.identificationStrategy.step2')}</p>

      <h3>{t('manualContent.identificationStrategy.lastResort.title')}</h3>
      <p className="last-paragraph">{t('manualContent.identificationStrategy.lastResort.usage')}</p>

      <h2>{t('manualContent.imageIdentificationLimits.title')}</h2>
      <p>{t('manualContent.imageIdentificationLimits.introduction')}</p>

      <h3>{t('manualContent.imageIdentificationLimits.whyNotAbsolute.title')}</h3>
      <p>{t('manualContent.imageIdentificationLimits.whyNotAbsolute.expertDifficulty')}</p>
      <p>
        {t('manualContent.imageIdentificationLimits.whyNotAbsolute.youngPlants')}<br/><br/>
        {t('manualContent.imageIdentificationLimits.whyNotAbsolute.closeRelatives')}<br/><br/>
        {t('manualContent.imageIdentificationLimits.whyNotAbsolute.naturalDiversity')}<br/><br/>
      </p>
      <p className="bold-text">{t('manualContent.imageIdentificationLimits.conclusion')}</p>
    </div>
  );
}

export default ManualContent;
