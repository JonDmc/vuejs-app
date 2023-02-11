<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    iconName: String
})

</script>

<template>
    <div>
        <span>💰</span>
        <button>{{ props.iconName }}</button>
    </div>
</template>

<!-- <template>
    <div>
        <span>
            <slot name="icon"/>
        </span>
        <button><slot/></button>
    </div>
</template> -->