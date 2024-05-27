import { Project, SyntaxKind, type JsxAttribute, type Node } from 'ts-morph'

const removedFeatureName = process.argv[2]
const featureState = process.argv[3]

const toggleFunctionName = 'toggleFeatures'
const toggleComponentName = 'ToggleFeatures'

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага')
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)')
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное состояние фичи (on или off)')
}

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFunction(node: Node) {
    let isToggleFeatures = false

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

    return identifier?.getText() === toggleComponentName
}

const replaceToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstAncestorByKind(
        SyntaxKind.ObjectLiteralExpression,
    )

    if (!objectOptions) return

    const offFunctionProperty = objectOptions.getProperty('off')
    const onFunctionProperty = objectOptions.getProperty('on')
    const nameFunctionProperty = objectOptions.getProperty('name')

    const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    )
    const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    )
    const featureName = nameFunctionProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)

    if (featureName !== removedFeatureName) return

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
    }
    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
    }
}

const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => {
    return jsxAttributes.find((node) => node.getName() === name)
}

const replaceToggleComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

    const onAttribute = getAttributeNodeByName(attributes, 'on')
    const offAttribute = getAttributeNodeByName(attributes, 'off')

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature')
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue()

    if (featureName !== removedFeatureName) return

    const offValue = offAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
    const onValue = onAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue.getText())
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue.getText())
    }
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node)
            return
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceToggleComponent(node)
        }
    })
})

project.save()
