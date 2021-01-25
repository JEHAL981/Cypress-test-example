describe('Music Band', () => {
    const members = ['matt bellamy', 'chris wolstenholme', 'dominic howard'];

    it('load band Member', () => {
        cy.visit('/music-band');

        cy.log('Members list is not visible');
        cy.findByText(members[0]).should('not.be.visible');

        cy.log('Load Muse band Members');
        cy.findByRole('button', {name: /muse/i}).click();

        cy.log('All members appear on the screen');
        for (const member of members) {
            cy.findByText(member).should('be.visible');
        }

        cy.log('The button is not clickable anymore');
        cy.findByRole('button', {name: /muse/i}).should('be.disabled');
    });

    it('shows an error message', () => {
        cy.visit('/music-band');

        cy.window().then((window) => {
            const {worker, rest} = window.msw;
            worker.use(
                rest.get('https://httpbin.org/anything', (req, res, ctx) => {
                    return res.once(ctx.status(500));
                })
            );
        });

        cy.log('members list is not visible');
        cy.findByText(members[0]).should('not.be.visible');

        cy.log('Load band members');
        cy.findByRole('button', {name: /muse/i}).click();

        cy.log('MUSE band members list is still not visible and error message appears');
        cy.findByText(members[0]).should('not.be.visible');
        cy.findByText(/something went wrong/i).should('be.visible');
    });
});
