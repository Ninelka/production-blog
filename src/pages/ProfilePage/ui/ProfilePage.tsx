import { useParams } from 'react-router-dom'

import { EditableProfileCard } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Page } from '@/widgets/Page'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  if (__PROJECT__ !== 'storybook' && !id) {
    return null
  }

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack max gap={'16'}>
        <EditableProfileCard id={id}/>
        <ProfileRating profileId={id ?? ''}/>
      </VStack>
    </Page>
  )
}

export default ProfilePage
