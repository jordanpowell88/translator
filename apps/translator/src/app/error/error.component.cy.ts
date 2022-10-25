import { MountConfig } from 'cypress/angular';
import { ErrorComponent } from './error.component';

describe(ErrorComponent.name, () => {
  const config: MountConfig<ErrorComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
    cy.mount(ErrorComponent, {
        ...config,
        componentProperties: {
            error:  null,
      }
    });
  })

  it('displays an error', () => {
    cy.mount(ErrorComponent, {
      ...config,
      componentProperties: {
        error: 'This is an error'
      }
    })
    cy.contains('This is an error')
  })
})
