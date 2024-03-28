```vue
<template>
    <table class="my-table">
        <thead>
            <tr>
                <slot name="head"></slot>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="item.id">
                <slot name="body" :item="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    }
};
</script>
```
