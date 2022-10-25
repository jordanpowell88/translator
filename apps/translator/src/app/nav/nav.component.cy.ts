import { MountConfig } from 'cypress/angular';
import { NavComponent } from './nav.component';

describe(NavComponent.name, () => {
  const config: MountConfig<NavComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(NavComponent, config);
  })
})
