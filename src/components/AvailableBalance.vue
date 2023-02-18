<script setup>
import { onMounted, ref } from 'vue'

const balance = ref(0)

const getBalance = async () => {
    const response = await fetch('https://api.m3o.com/v1/wallet/Balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ZTViNDk3NjktMjYxNi00ZGI4LThlYWUtMWFhMjgwOTZjNTdm'
        },
        body: JSON.stringify({
            id: '09123456789',
        }),
    }).then((response) => response.json())

    balance.value = response.balance
}

onMounted(async () => {
    await getBalance()
})
</script>

<template>
    <div class="container">
        <header>Available Balance</header>
        <div class="values">
            <p>PHP {{ balance }}</p>
            <router-link to="/cash-in">+ Cash In</router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--primary-dark-color);
    border-radius: 0.5rem;
    padding: 1rem;
}

header {
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 0.7rem;
}

.values {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

p {
    font-size: 2rem;
    margin: 0;
}

a {
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    background-color: #fff;
    color: var(--primary-color);
    font-weight: 600;
    border: 0;
    text-decoration: none;
}
</style>