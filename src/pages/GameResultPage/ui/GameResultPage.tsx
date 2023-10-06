import { useTranslation } from 'react-i18next';

const GameResultPage = () => {
  const { t } = useTranslation();

  return <div>{t('Game Result page')}</div>;
};

export default GameResultPage;
