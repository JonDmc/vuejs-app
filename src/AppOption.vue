<script>
// Options API
export default {
    data() {
        return {
            name: 'Jon'
        }
    },
    computed: {
        greetings() {
            if (!this.name.length) {
                return 'Who are you?'
            }
            return `Hello ${this.name}`
        }
    }
}

</script>

<template>
    <input type="text" v-model="name" />
    <h1>Hello, {{ name }}</h1>
</template>