import { Then, When, Given } from "cypress-cucumber-preprocessor/steps";
const textbox_selector='.public-DraftStyleDefault-block'
const error_selector='[class="styled__Top-sc-1naxbon-4 nfFBQ"]'
const menu_selector='[class="select__menu css-1lmnvla"]'
const dropdown_selector='.select__control'
const history_selector='[class="ReactVirtualized__Grid__innerScrollContainer"] > div'
const time_selector='time'
const POST_selector='[data-testid=post-question-btn-active]'
const url = 'https://aqa.int.sellercrowd.com/api/testing/auth-user/admin'
const question='Would you hire a guy who can write automated tests in BDD (Cucumber) style with Cypress?'

Then(`posts are updated correctly`, () => {
    cy.get(history_selector).first().should('include.text', question)
})
Then(`posts should not be updated`, () => {
  cy.get(time_selector).first().invoke('attr', 'datetime')
  .then(($dtm)=>{
    const now_dtm= new Date()
    const last_post=new Date($dtm)
    const long_time=10000
    if(now_dtm-last_post>long_time){return 'Pass'}else{return 'Fail'}
  }).should('be.eq','Pass')
})
When(`user types in a question`, () => {
    cy.get(textbox_selector).type(question)     
})
When(`user types in only one letter`, () => {
  cy.get(textbox_selector).type('x')     
})
And(`open chanel selector`, () => {
    cy.get('.select__control').click()     
})
When(`user picks {string} chanel`, (chanel) => {
  cy.get(menu_selector).contains(chanel).click()
})
And(`press ENTER key`, () => {
    cy.get(textbox_selector).type('{enter}')     
})
And(`clicks "Post" button`, () => {
  cy.get(POST_selector).click()     
})
Given('Chanel selection is available', () => {
    cy.get(dropdown_selector)
  })
Then(`Mandatory chanel selection warning is displayed`, () => {
  cy.get(error_selector).should('include.text', 'Please select at least one of your channels.')
})
Then(`warning message is displayed`, () => {
  cy.get(error_selector).should('include.text', 'Please type at least 20 characters.')
})
Given('SellerCrowd website is opened', () => {
  cy.visit(url)
})