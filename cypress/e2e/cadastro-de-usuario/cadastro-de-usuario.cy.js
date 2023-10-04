import { generateEmail } from "../../utils/generate-input";

describe('Cadastro de Pessoa Usuária', () => {
  
  beforeEach(() =>{
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/');
    cy.get('button[class="sc-b64703cb-1 hHyGpa button"]').contains('Criar conta').click();
  })
  
  it('Cadastro com dados válidos', () => {
    cy.get('h2[class="sc-44565085-0 lfZHty"]').should('contain', 'Crie sua conta Lacrei Saúde');
    cy.get('#first_name').type('Melissa');
    cy.get('#last_name').type('Teste');
    cy.get('#email').type(generateEmail());
    cy.get('#password1').type('123abcDEF@');
    cy.get('#password2').type('123abcDEF@');
    
    cy.get('div[class="terms-checkbox-text"]').click();
    cy.get("div:nth-child(2)>label:nth-child(1)>span:nth-child(2)>span:nth-child(1)").click();

    cy.get('button[class="sc-b64703cb-1 daZiYh button"]').contains('Cadastrar').click();

    cy.get('div[class="presentation"]').should('contain', 'Estamos quase lá...');
  })
})
