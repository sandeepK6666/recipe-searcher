<template>
  <CustomDropdown
    id="broker-filter"
    :options="dropdownOptions"
    label="Filter by status:"
    @change="handleFilterChange"
  />
  <BrokerList :items="paginatedBrokers" />

  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import BrokerList from "../components/BrokerList.vue";
import brokersData from "../utils/broker.json";
import CustomDropdown from "../components/CustomDropdown.vue";

const brokers = ref(brokersData);
const filterStatus = ref("all");
const currentPage = ref(1);
const itemsPerPage = 5;

const dropdownOptions = ref([
  { value: "all", text: "All" },
  { value: "active", text: "Active" },
  { value: "inactive", text: "Inactive" },
]);

const filteredBrokers = computed(() => {
  if (filterStatus.value === "all") {
    return brokers.value;
  }
  const isActive = filterStatus.value === "active";
  return brokers.value.filter((broker) => broker.BrokerActive === isActive);
});

const totalPages = computed(() => {
  return Math.ceil(filteredBrokers.value.length / itemsPerPage);
});

const paginatedBrokers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredBrokers.value.slice(start, end);
});

const handleFilterChange = (value) => {
  filterStatus.value = value;
  currentPage.value = 1;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<style>
.pagination {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination button {
  margin: 0 10px;
}
button {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
