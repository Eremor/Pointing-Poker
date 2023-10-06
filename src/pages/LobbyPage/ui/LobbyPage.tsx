import { useTranslation } from 'react-i18next';

const LobbyPage = () => {
  const { t } = useTranslation();

  return <div>{t('Lobby page')}</div>;
};

export default LobbyPage;
