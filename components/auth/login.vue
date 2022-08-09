<script setup>
  const props = defineProps(['pageState'])

  // TODO LOGIN IF NEED_AUTH
  // SEND CALLBACK TO MAIN PAGE (JWT)
  // UPDATE CURRENT PAGE STATE 
  // AFTER VALIDATE JWT
  // PUSH ROUTE TO CHAT PAGE
  console.log('props', props.pageState)
</script>

<template>
  <section class="bg-white dark:bg-gray-700 shadow-md rounded p-8 w-96 h-96 m-auto">
    <div v-if="props.pageState === 'LOADING'" class="flex flex-col items-center w-full h-full">
      <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-black dark:text-white m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>

    <div v-if="props.pageState === 'NEED_AUTH'" class="flex flex-col items-center w-full h-full">
      <img src="assets/images/qr-placeholder.png" class="w-48" alt="qr-image">
      <h3 class="mt-6 text-lg font-semibold dark:text-white">Sign In with Scan QR Code</h3>
      <h5 class="mt-3 text-sm dark:text-white">Scan the QR code above via the Karlota Mobile App that has a QR code scan feature.</h5>
    </div>
  </section>
</template>