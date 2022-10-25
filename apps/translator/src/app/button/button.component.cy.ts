import { MountConfig } from 'cypress/angular';
import { ButtonComponent } from './button.component';

describe(ButtonComponent.name, () => {
  const config: MountConfig<ButtonComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(ButtonComponent, {
           ...config,
           componentProperties: {
               position:  'end',
          }
      });
  })

  it('displays label via context projection', () => {
    cy.mount('<caribbean-developers-conference-button>Click Me</caribbean-developers-conference-button>', config)
    cy.get('button').contains('Click Me')
  })

  it('fires an event emitter on button click', () => {
    cy.mount(ButtonComponent, {
      ...config,
      autoSpyOutputs: true
    })
    cy.get('button').click()
    cy.get('@clickedSpy').should('have.been.called')
  })

  it('renders in the center', () => {
    cy.mount(ButtonComponent, {
      ...config,
      componentProperties: {
        position: 'center'
      }
    })
  })
})
