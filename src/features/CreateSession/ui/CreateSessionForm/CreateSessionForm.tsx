import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hasLength, useForm, isNotEmpty } from '@mantine/form';
import {
  Stack,
  Group,
  TextInput,
  FileInput,
  Button,
  Avatar,
} from '@mantine/core';

import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { CreateSessionDTO, createSession } from 'entities/Session';

import styles from './CreateSessionForm.module.scss';

interface CreateSessionFormProps {
  onCloseModal: () => void;
}

const CreateSessionForm = ({ onCloseModal }: CreateSessionFormProps) => {
  const { t } = useTranslation();
  const { buttonColor } = useThemeColors();
  const [avatarValue, setAvatarValue] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const form = useForm<CreateSessionDTO>({
    initialValues: {
      title: '',
      firstName: '',
      lastName: undefined,
      position: undefined,
      avatar: undefined,
    },
    validate: {
      title: isNotEmpty(`${t('Error game title')}`),
      firstName: hasLength({ min: 2 }, `${t('Error first name')}`),
    },
  });

  const createGame = (values: CreateSessionDTO) => {
    console.log(values);
    dispatch(createSession(values));
    onCloseModal();
  };

  const onCancel = () => {
    form.reset();
    onCloseModal();
  };

  useEffect(() => {
    form.setFieldValue('avatar', avatarValue?.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatarValue]);

  return (
    <form
      className={styles.CreateSessionForm}
      onSubmit={form.onSubmit(createGame)}
    >
      <TextInput
        data-autofocus
        label={t('Form title')}
        withAsterisk
        {...form.getInputProps('title')}
      />
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
      <Stack>
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

export { CreateSessionForm };
