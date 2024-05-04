import { type Article } from '../../../src/entities/Article'

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
}

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'afasdfa' },
            body: article ?? defaultArticle,
        })
        .then((response) => response.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'afasdfa' },
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            createArticle(article?: Article): Chainable<Article>
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
