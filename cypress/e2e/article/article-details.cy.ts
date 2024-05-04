let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`/articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it('видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it('видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })
    it('оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddNewComment').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('ставит оценку', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        })
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})

export {}
