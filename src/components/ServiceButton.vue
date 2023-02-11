<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: String
})

</script>

<template>
    <div>
        <span>
            {{ props.icon }}
        </span>
        <button>
            <slot />
        </button>
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