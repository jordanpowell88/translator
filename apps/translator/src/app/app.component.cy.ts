import { MountConfig } from 'cypress/angular';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe(AppComponent.name, () => {
  const config: MountConfig<AppComponent> = {
    declarations: [],
    imports: [AppModule],
    providers: []
  }

  it('renders', () => {
     cy.mount(AppComponent, config);
  })

  it('can successfully create a translation', () => {
    cy.mount(AppComponent, config)
    cy.get('input').type('hello')
    cy.intercept('**/api/translate', { statusCode: 200, body: { translation: 'Hola' } })
    cy.get('button').contains('Translate').click()
    cy.get('caribbean-developers-conference-translation').contains('Hola')
  })

  it('throws an alert when translation fails', () => {
    cy.mount(AppComponent, config)
    cy.get('input').type('bad translation')
    cy.intercept('**/api/translate', { statusCode: 500 })
    cy.get('button').contains('Translate').click()
    cy.get('caribbean-developers-conference-error').contains('Sorry, but there was a problem fetching an accurate translation')
  })
})
