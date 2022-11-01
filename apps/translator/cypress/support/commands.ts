import { mount } from 'cypress/angular';

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

type MountParams = Parameters<typeof mount>;

Cypress.Commands.add(
  'mount',
  (component: MountParams[0], config: MountParams[1] = {}) => {
    return mount(component, config);
  }
);
