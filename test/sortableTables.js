const expect = require('chai').expect;
const Tables = require('../pages/Tables');
const { sortAsc, sortDesc, compareArrays, extractNumbers } = require('../utils/helpers')


describe('Sortable Table Test', function () {

    before(() => {
        Tables.navigate();
    });

    describe('Sorting data in ascending and descending order', () => {
        
        it('by last name', () => {
                const header = 'Last Name';
                const columnToCheck = Tables.column(header);

                Tables.clickHeader(header);
                const sortedAsc = Tables.column(header);
                
                Tables.clickHeader(header);
                const sortedDesc = Tables.column(header);

                expect(compareArrays(sortedAsc, sortAsc(columnToCheck))).to.be.true;
                expect(compareArrays(sortedDesc, sortDesc(columnToCheck))).to.be.true;
        });

        it('by first name', () => {
            const header = 'First Name';
            const columnToCheck = Tables.column(header);

            Tables.clickHeader(header);
            const sortedAsc = Tables.column(header);
            
            Tables.clickHeader(header);
            const sortedDesc = Tables.column(header);

            expect(compareArrays(sortedAsc, sortAsc(columnToCheck))).to.be.true;
            expect(compareArrays(sortedDesc, sortDesc(columnToCheck))).to.be.true;
        });

        it('by email', () => {
            const header = 'Email';
            const columnToCheck = Tables.column(header);

            Tables.clickHeader(header);
            const sortedAsc = Tables.column(header);
            
            Tables.clickHeader(header);
            const sortedDesc = Tables.column(header);

            expect(compareArrays(sortedAsc, sortAsc(columnToCheck))).to.be.true;
            expect(compareArrays(sortedDesc, sortDesc(columnToCheck))).to.be.true;
        });

        it('amount due', () => {
            const header = 'Due';
            let columnToCheck = extractNumbers(Tables.column(header));

            Tables.clickHeader(header);
            const sortedAsc = extractNumbers(Tables.column(header));
            
            Tables.clickHeader(header);
            const sortedDesc = extractNumbers(Tables.column(header));

            expect(compareArrays(sortedAsc, sortAsc(columnToCheck))).to.be.true;
            expect(compareArrays(sortedDesc, sortDesc(columnToCheck))).to.be.true;
        });

        it('website', () => {
            const header = 'Web Site';
            let columnToCheck = Tables.column(header);

            Tables.clickHeader(header);
            const sortedAsc = Tables.column(header);
            
            Tables.clickHeader(header);
            const sortedDesc = Tables.column(header);

            expect(compareArrays(sortedAsc, sortAsc(columnToCheck))).to.be.true;
            expect(compareArrays(sortedDesc, sortDesc(columnToCheck))).to.be.true;
        });
    });
});