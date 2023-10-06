import { useTranslation } from 'react-i18next';

const GamePage = () => {
  const { t } = useTranslation();
  return <div>{t('Game page')}</div>;
};

export default GamePage;
