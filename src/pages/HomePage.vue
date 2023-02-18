<script setup>
import AvailableBalance from '../components/AvailableBalance.vue';
import ServiceButton from '../components/ServiceButton.vue';

const link = '/send'
</script>

<template>
    <div>
        <AvailableBalance />
        <div class="services">
            <ServiceButton icon="💰" link="/send">Send</ServiceButton>
            <ServiceButton icon="👓" link="/load">Load</ServiceButton>
            <ServiceButton icon="✅" link="/transfer">Transfer</ServiceButton>
            <ServiceButton icon="💲" link="/bills">Bills</ServiceButton>
        </div>
    </div>
</template>

<style scoped>
.services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
