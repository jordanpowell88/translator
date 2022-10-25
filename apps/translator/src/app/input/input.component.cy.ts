import { MountConfig } from 'cypress/angular';
import { InputComponent } from './input.component';

describe(InputComponent.name, () => {
  const config: MountConfig<InputComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(InputComponent, config);
  })

  it('calls event emitter on keyup', () => {
    cy.mount(InputComponent, {
      ...config,
      autoSpyOutputs: true
    })
    cy.get('input').type('testing me')
    cy.get('@changedSpy').should('have.been.calledWith', 'testing me')
  })
})
