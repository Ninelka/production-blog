import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const readonly = useSelector(getProfileReadonly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Text title={t('Профиль')}/>
      {canEdit && (
        <>
          {readonly
            ? (
              <Button theme={ButtonVariant.OUTLINE} onClick={onEdit}>{t('Редактировать')}</Button>
              )
            : (
              <HStack gap={'8'}>
                <Button theme={ButtonVariant.OUTLINE_RED} onClick={onCancelEdit}>{t('Отменить')}</Button>
                <Button theme={ButtonVariant.OUTLINE} onClick={onSave}>{t('Сохранить')}</Button>
              </HStack>
              )}
        </>
      )}
    </HStack>
  )
})

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader'
