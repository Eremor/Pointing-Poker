import LogoIcon from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Logo.module.scss';

interface LogoProp {
  className?: string;
}

const Logo = (props: LogoProp) => {
  const { className } = props;
  return (
    <div className={classNames(styles.Logo, [className as string])}>
      <LogoIcon />
    </div>
  );
};

export { Logo };
