/*
Task: In mobile view, browse to `Products` -> `Aluminate for education` and get the value for every 
`href` on every anchor (`<a />` tag) on the page.

Output the `href` values to the console. Logging to cypress or the standard dev console is fine.

Please perform this entire task on the mobile site, including the navigation and link data fetching.
*/
describe('Get all links', () => {
	it('should be able to browse to the product page in mobile view and real all links', () => {
		// Navigate to the products page in mobile view
		cy.viewport('iphone-6')

			// Visit the Aluminate for Education page
			.visit('/aluminate-for-education-alumni-engagement-software')

			// Log the href values for every anchor tag on the page
			.get('a').each(($link) => {
				if ($link.attr('href')) {
					cy.log($link.attr('href'));
				}
			})
	});
});