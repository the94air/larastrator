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
                perPage: 100,
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
        >
            <div slot="table-actions">
                <button class="button success">Completed</button>
                <button class="button warning">Pending</button>
                <button class="button danger">Rejected</button>
            </div>
            <div slot="emptystate">
                No data for table!
            </div>
        </DataTable>
    </div>
</template>

<script>
    import { VueGoodTable as DataTable } from 'vue-good-table';

    export default {
        data() {
            return {
                columns: [
                    { label: 'Name', field: 'name' },
                    { label: 'Age', field: 'age' },
                    { label: 'Created On', field: 'createdAt', dateInputFormat: 'YYYY-MM-DD', dateOutputFormat: 'MMM Do YY' },
                    { label: 'Percent', field: 'score' },
                ],
                rows: [
                    { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
                    { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                    { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                    { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                    { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                    { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
                ],
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
