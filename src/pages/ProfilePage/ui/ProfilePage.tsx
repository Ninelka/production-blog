import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { ProfileRating } from '@/features/ProfileRating'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap={'16'}>
        <EditableProfileCard id={id}/>
        <ProfileRating profileId={id}/>
      </VStack>
    </Page>
  )
}

export default ProfilePage
