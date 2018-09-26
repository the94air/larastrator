<template>
    <div class="content" id="content">
        <Breadcrumb />
        <h1 class="panel-title">Page title</h1>
        <div class="panel-card">
            <HorizontalForm />
        </div>
        <!-- <div class="panel-card">
            <VerticalForm />
            <hr>
            <Pagination />
        </div>
        <Alerts />
        <Buttons />
        <div class="panel-card">
            <Table class="mb-5" />
            <DataTable />
        </div> -->
    </div>
</template>

<script>
    import Breadcrumb from './Breadcrumb';
    import HorizontalForm from './HorizontalForm';
    import VerticalForm from './VerticalForm';
    import Pagination from './Pagination';
    import Buttons from './Buttons';
    import Alerts from './Alerts';
    import Table from './Table';
    import DataTable from './DataTable';

    export default {
        components: { Breadcrumb, HorizontalForm, VerticalForm, Pagination, Buttons, Alerts, Table, DataTable },
    }
</script>
