<template>
  <div>
    <div>
      <div v-for="item in items" :key="item.BrokerID" class="list-wrapper">
        <div class="list-name">{{ item.BrokerName }}</div>

        <div :class="{ active: item.BrokerActive, inactive: !item.BrokerActive }">
          {{ item.BrokerActive ? "Active" : "Inactive" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.active {
  color: green;
}
.inactive {
  color: red;
}
.list-wrapper {
  display: flex;
  gap: 20px;
}
.list-wrapper .list-name {
  width: 20%;
}
</style>
