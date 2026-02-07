<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';

onMounted(async() => {
  const res = await axios.get('sanctum/csrf-cookie');

  console.log(res);
})
</script>