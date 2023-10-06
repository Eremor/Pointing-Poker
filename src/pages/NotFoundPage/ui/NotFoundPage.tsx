import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>{t('Not Found Page')}</div>;
};

export { NotFoundPage };
