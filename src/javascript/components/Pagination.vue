<template>
    <nav class="paginate">
        <a class="previous" href="#"><Fa :icon="['fas', 'arrow-left']" /> Prev</a>
        <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><span>&hellip;</span></li>
            <li><a href="#">6</a></li>
            <li><a class="select">7</a></li>
            <li><a href="#">8</a></li>
            <li><span>&hellip;</span></li>
            <li><a href="#">12</a></li>
            <li><a href="#">13</a></li>
        </ul>
        <a class="next" href="#">Next <Fa :icon="['fas', 'arrow-right']" /></a>
    </nav>
</template>
