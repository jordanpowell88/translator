import { MountConfig } from 'cypress/angular';
import { TranslationComponent } from './translation.component';

describe(TranslationComponent.name, () => {
  const config: MountConfig<TranslationComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
    cy.mount(TranslationComponent, {
          ...config,
          componentProperties: {
              translation:  null,
        }
      });
  })

  it('displays translation', () => {
    cy.mount(TranslationComponent, {
      ...config,
      componentProperties: {
        translation: 'Hola'
      }
    })
    cy.contains('Hola')
  })
})
