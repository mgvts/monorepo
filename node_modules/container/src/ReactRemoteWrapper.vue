<script setup>
import { ref, onMounted } from "vue";
import React from "react";
import ReactDOM from "react-dom/client"; // Используем клиентский рендеринг

const reactContainer = ref(null);

async function fetchImport() {
  try {
    const res = (await import("reactRemote/mountReactComponent")).default;
    const reactElement = typeof res === "function" ? React.createElement(res) : res;

    if (reactContainer.value) {
      const root = ReactDOM.createRoot(reactContainer.value);
      root.render(reactElement);
    }
  } catch (err) {
    console.error("Ошибка при импорте React-компонента:", err);
  }
}

onMounted(() => {
  fetchImport();
});
</script>

<template>
  <!-- Контейнер для React-компонента -->
  <div ref="reactContainer"></div>
</template>