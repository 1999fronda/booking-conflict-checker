<script setup>
import { onMounted } from 'vue';
import axios from 'axios';


console.log('asf');

axios.get('/sanctum/csrf-cookie').then((data) => {
    console.log(data);
});

// onMounted(async () => {
//     await axios.get('/sanctum/csrf-cookie');
// })
</script>

<template>
    <h1>Hi, World!</h1>
</template>