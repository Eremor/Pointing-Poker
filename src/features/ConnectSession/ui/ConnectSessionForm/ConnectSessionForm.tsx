import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Avatar, Button, FileInput, Group, Stack, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { SessionUserDTO, getSessionID, joinSession } from 'entities/Session';
import { UserRole } from 'entities/User';

import styles from './ConnectSessionForm.module.scss';

interface ConnectSessionFormProps {
  onCloseModal: () => void;
}

const ConnectSessionForm = ({ onCloseModal } : ConnectSessionFormProps ) => {
  const { t } = useTranslation();
  const { buttonColor } = useThemeColors();
  const [avatarValue, setAvatarValue] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const sessionID = useSelector(getSessionID)!;

  const form = useForm<SessionUserDTO>({
    initialValues: {
      role: UserRole.GAMER,
      firstName: '',
      lastName: undefined,
      position: undefined,
      avatar: undefined
    },
    validate: {
      firstName: hasLength({ min: 2}, `${t('Error first name')}`)
    }
  });

  const joinToSession = (values: SessionUserDTO) => {
    dispatch(joinSession({sessionID, ...values}))
    onCloseModal()
  };

  const onCancel = () => {
    form.reset();
    onCloseModal();
  };

  return (
    <form
      className={styles.ConnectSessionForm}
      onSubmit={form.onSubmit(joinToSession)}
    >
      <TextInput
        label={t('Form first name')}
        withAsterisk
        {...form.getInputProps('firstName')}
      />
      <TextInput
        label={t('Form last name')}
        {...form.getInputProps('lastName')}
      />
      <TextInput
        label={t('Form position')}
        {...form.getInputProps('position')}
      />
      <Stack mt="lg">
        <FileInput
          label={t('Form image')}
          placeholder={t('Form download')}
          accept="image/png, image/jpeg"
          value={avatarValue}
          onChange={setAvatarValue}
        />
        {avatarValue !== null && (
          <Avatar
            src={URL.createObjectURL(avatarValue as Blob)}
            size="xl"
          />
        )}
      </Stack>
      <Group
        justify="space-between"
        mt="lg"
      >
        <Button
          type="submit"
          color={buttonColor}
        >
          {t('Form create')}
        </Button>
        <Button
          onClick={onCancel}
          color={buttonColor}
          variant="outline"
        >
          {t('Form cancel')}
        </Button>
      </Group>
    </form>
  );
};

export { ConnectSessionForm };
