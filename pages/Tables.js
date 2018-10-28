const Page = require('./PageModel');

class Tables extends Page {

    // page elements
    get headers() {
        const headers = [];

        // get all header nodes from table 1 and store them in the headers array
        const nodes = browser.elements('//table[@id="table1"]//thead//tr//th');
        nodes.value.forEach(node => {
            headers.push(node); 
        });
        return headers;
    }

    get titles() {
        const titles = [];
        // get actual text of headers nodes
        this.headers.forEach(head => titles.push(head.getText()));
        return titles;
    }

    get rows() {
        const rows = [];

        // extract text for all cells on the page
        let cells = browser.elements('//table[@id="table1"]//tbody//tr//td').getText();
        const length = cells.length;
        const rowLength = this.titles.length;
        // push cell values into the row array based on the row length
        // push a single row into rows array
        for(let i = 0; i < length; i += rowLength) {
            const row = cells.slice(i, i + rowLength);
            rows.push(row);
        }
        return rows;
    }

    column(header) {  
                
        const column = [];

        // find index of the specified header in titles array
        const index = this.titles.indexOf(header);

        // get all the elements from rows at header index
        this.rows.forEach((row) => {
            column.push(row[index]);
        });
        return column;
    }

    // page services 
    navigate() {
        super.navigate('tables');
    }

    clickHeader(header) {
        const index = this.titles.indexOf(header);
        this.headers[index].click();
    }
}

module.exports = new Tables();