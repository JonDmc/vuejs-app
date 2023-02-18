<script setup>
// import { defineProps } from 'vue';

const props = defineProps({
    icon: String,
    link: String,
})

// const props = defineProps([
//     'to'
// ])
console.log(props)
</script>

<template>
    <router-link :to="props.link">
        <span>
            {{ props.icon }}
        </span>
        <slot />
    </router-link>
</template>

<style scoped>
a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: #FFF;
    font-size: .8rem;
    text-align: center;
}

span {
    font-size: 3rem;
}
</style>

<!-- <template>
    <div>
        <span>
            <slot name="icon"/>
        </span>
        <button><slot/></button>
    </div>
</template> -->