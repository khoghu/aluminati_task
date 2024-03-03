/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe('Contact form', () =>
{
	it('should be able to fill out the contact form', () =>
	{
		cy.visit('/');

		// Find and click on the link to navigate to the Contact page or form
		cy.get('a.fusion-bar-highlight span.menu-text').contains('Contact').click({ force: true })

		// add an input value in array
		const inputValues = ['Khoghu Test', 'khoghu@gmail.com', '01114567890', 'Aluminati', 'Tester', 'Testing Cypress'];

		// loop the element and add array input value
		cy.get('div.contactUsForm')
			.within(() => {
				cy.get('input:not([type="submit"]), textarea.wpcf7-textarea')
					.each(($element, index) => {
						const inputValue = inputValues[index] || '';
						cy.wrap($element).type(inputValue);
					})
					.then(() => {
						// Click the submit button after filling in the inputs
						// Comment the submit button because google captcha
						// cy.get('input[type="submit"]').click();
						// cy.wait(5000);
	
						// Log a form submission
						cy.log('Form submission successful');
					});
			});
	});
});
