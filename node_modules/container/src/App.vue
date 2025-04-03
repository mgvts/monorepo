<script setup>
import { defineAsyncComponent } from 'vue'
import ReactRemoteWrapper from './ReactRemoteWrapper.vue'

const RemoteVueComponent = defineAsyncComponent(() => import('vueRemote/VueComponent'));

</script>

<template>
  <Suspense>
    <div>
      <h1>Facade Container</h1>
      <RemoteVueComponent />
      <ReactRemoteWrapper />
    </div>
    <template #fallback>
      load
    </template>
  </Suspense>

</template>