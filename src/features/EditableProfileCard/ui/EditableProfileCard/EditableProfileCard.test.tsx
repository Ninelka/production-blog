import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { type Profile } from '@/entities/Profile'
import { $api } from '@/shared/api/api'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { EditableProfileCard } from './EditableProfileCard'
import { profileReducer } from '../../model/slice/profileSlice'

const profile: Profile = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'admin123',
    first: 'admin',
    city: 'asf',
    currency: Currency.USD,
    avatar: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe('features/EditableProfileCard', () => {
    test('режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        )
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument()
    })

    test('при отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        )
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        )

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            'admin123',
        )
    })

    test('должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        )

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument()
    })

    test('если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        )

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        )

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        )

        expect(mockPutReq).toHaveBeenCalled()
    })
})
