<template>
    <div class="w-full">
        <h2 class="mb-4">DataTable example</h2>
        <DataTable
            :columns="columns"
            :rows="rows"
            :lineNumbers="true"
            :search-options="{
                enabled: true,
                placeholder: 'Search this table',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 3,
                position: 'bottom',
                perPageDropdown: [3, 7, 9],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page', // for 'pages' mode
                allLabel: 'All',
            }"
            :selectOptions="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
            }"
            @on-row-click="onRowClick"
            :groupOptions="{
  	            enabled: false
            }"
        >
            <div slot="table-actions">
                <button class="button success">Completed</button>
                <button class="button warning">Pending</button>
                <button class="button danger">Rejected</button>
            </div>
            <div slot="emptystate" class="text-center">
                <em>No data for table!</em>
            </div>
        </DataTable>
    </div>
</template>

<script>
    import { VueGoodTable as DataTable } from 'vue-good-table';

    let btn = `
        <div class="action">
            <button class="button info">Open</button>
            <button class="button success">Edit</button>
            <button class="button danger">Delete</button>
        </div>
    `;

    export default {
        data() {
            return {
                columns: [
                    { label: 'Name', field: 'name', filterOptions: {
  	  enabled: false, // enable filter for this column
      placeholder: 'Filter This Thing', // placeholder for filter input
      filterDropdownItems: [], // dropdown (with selected values) instead of text input
    }, },
                    { label: 'Age', field: 'age' },
                    { label: 'Created On', field: 'createdAt', dateInputFormat: 'YYYY-MM-DD', dateOutputFormat: 'MMM Do YY' },
                    { label: 'Percent', field: 'score' },
                    { label: 'Action', field: 'btn', html: true, },
                ],
                rows: [
                    { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343, btn: btn, },
                    { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343, btn: btn, },
                    { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343, btn: btn, },
                    { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343, btn: btn, },
                    { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343, btn: btn, },
                    { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343, btn: btn, },
                ],
                // rows: [
                //     {
                //         mode: 'span', // span means this header will span all columns
                //         label: 'Header One', // this is the label that'll be used for the header
                //         html: false, // if this is true, label will be rendered as html
                //         children: [
                //             { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
                //             { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                //         ]
                //     },
                //     {
                //         mode: 'span', // span means this header will span all columns
                //         label: 'Header Two', // this is the label that'll be used for the header
                //         html: false, // if this is true, label will be rendered as html
                //         children: [
                //             { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                //             { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                //         ]
                //     }
                // ]
            };
        },
        components: { DataTable },
        methods: {
            onRowClick(params) {
                console.log('Clicked!');
            }
        }
    }
</script>
