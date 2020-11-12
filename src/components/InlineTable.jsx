
import React from 'react';
import ReactDOM from 'react-dom';
// import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';

// import { sampleProducts } from './sample-products.jsx';
 import { MyCommandCell } from './myCommandCell.jsx';
 import { DropDownCell } from './myDropDownCell.jsx';

import {sampleProducts} from "./sampleProducts";

export default class InlineTable extends React.Component {
    editField = "inEdit";
    CommandCell;

    constructor(props) {
        super(props);

        this.state = {
            data: sampleProducts.slice(0)
        };

        this.CommandCell = MyCommandCell({
            edit: this.enterEdit,
            remove: this.remove,

            add: this.add,
            discard: this.discard,

            update: this.update,
            cancel: this.cancel,

            editField: this.editField
        });
    }

    enterEdit = (dataItem) => {
        this.setState({
            data: this.state.data.map(item =>
                item.ProductID === dataItem.ProductID ?
                { ...item, inEdit: true } : item
            )
        });
    }

    add = (dataItem) => {
        dataItem.inEdit = undefined;
        dataItem.ProductID = this.generateId(sampleProducts);

        sampleProducts.unshift(dataItem);
        this.setState({
            data: [ ...this.state.data ]
        });
    }

    update = (dataItem) => {
        const data = [ ...this.state.data ];
        const updatedItem = { ...dataItem, inEdit: undefined };

        this.updateItem(data, updatedItem);
        this.updateItem(sampleProducts, updatedItem);

        this.setState({ data });
    }

    updateItem = (data, item) => {
        let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            data[index] = { ...item };
        }
    }

    cancel = (dataItem) => {
        const originalItem = sampleProducts.find(p => p.ProductID === dataItem.ProductID);
        const data = this.state.data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item);

        this.setState({ data });
    }

    discard = (dataItem) => {
        const data = [ ...this.state.data ];
        this.removeItem(data, dataItem);

        this.setState({ data });
    }

    remove = (dataItem) => {
        const data = [ ...this.state.data ];
        this.removeItem(data, dataItem);
        this.removeItem(sampleProducts, dataItem);

        this.setState({ data });
    }

    itemChange = (event) => {
        const data = this.state.data.map(item =>
            item.ProductID === event.dataItem.ProductID ?
            { ...item, [event.field]: event.value } : item
        );

        this.setState({ data });
    }

    addNew = () => {
        const newDataItem = { inEdit: true, Discontinued: false };

        this.setState({
            data: [ newDataItem, ...this.state.data ]
        });
    }

    cancelCurrentChanges = () => {
        this.setState({ data: [ ...sampleProducts ] });
    }

    render() {
        const { data } = this.state;
        const hasEditedItem = data.some(p => p.inEdit);

        return (
            <Grid
                data={data}
                onItemChange={this.itemChange}
                editField={this.editField}
            >
                <GridToolbar>
                    <button
                        title="Add new"
                        className="k-button k-primary"
                        onClick={this.addNew}
                    >
                        Add new
                    </button>
                    {hasEditedItem && (
                        <button
                            title="Cancel current changes"
                            className="k-button"
                            onClick={this.cancelCurrentChanges}
                        >
                            Cancel current changes
                        </button>
                    )}
                </GridToolbar>
                <Column field="ProductID" title="Id" width="50px" editable={false} />
                <Column field="ProductName" title="Product Name" />
                <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
                <Column field="UnitsInStock" title="Units" editor="numeric" />
                <Column field="Discontinued" title="Discontinued" cell={DropDownCell} />
                <Column cell={this.CommandCell} width="240px" />
            </Grid>
        );
    }

    generateId = data => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

    removeItem(data, item) {
        let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            data.splice(index, 1);
        }
    }
}


