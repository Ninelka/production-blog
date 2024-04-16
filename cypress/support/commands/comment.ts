export const addComment = (text: string) => {
  cy.getByTestId('AddNewComment.Input').type(text)
  cy.getByTestId('AddNewComment.Button').click()
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      addComment(text: string): Chainable<void>
    }
  }
}
