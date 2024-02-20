/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe('Contact form', () =>
{
	it('should be able to fill out the contact form', () =>
	{
		cy.visit('/')

			// Find and click on the link to navigate to the Contact page or form
			.get('#menu-item-1040 a.fusion-bar-highlight').click()
		
			// Fill out the contact form with appropriate details
			.get('[name="firstname"]').type('Khoghulan')
			.get('[name="lastname"]').type('Task Testing')
			.get('[name="email"]').type('khoghu@gmail.com')
			.get('[name="phone"]').type('01116345979')
			.get('[name="field[1]"]').type('Aluminati')
			.get('[name="field[10]"]').type('Tester')
			.get('[name="field[5]"]').type('Testing Purpose')
		
			// Submit the form
			// Comment the submit button because duplicate contact form record created
			// .get('form[action="https://aluminati.activehosted.com/proc.php"]').submit()
		
			// Log a message indicating that the form submission is attempted
			.log('Form submission attempted')
	});
});
