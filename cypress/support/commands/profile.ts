export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastName)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'afasdfa' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 23,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://www.nicepng.com/png/detail/137-1379898_anonymous-headshot-icon-user-png.png',
        },
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            updateProfile(firstName: string, lastName: string): Chainable<void>
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
