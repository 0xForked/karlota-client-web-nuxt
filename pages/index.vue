<script setup>
  definePageMeta({
    layout: "custom",
  });

  const LOCAL_STORAGE_JWT = 'jwt';
  const jwtToken = useState(LOCAL_STORAGE_JWT, () => null);
  const pageState = useState('PAGE_STATE', () => 'LOADING');

  const setJWT = (jwt) => {
    localStorage.setItem(LOCAL_STORAGE_JWT, jwt);
    jwtToken.value = jwt;
  };

  onMounted(() => { 
    pageState.value = 'LOADING'
    const currentJWT = localStorage.getItem(LOCAL_STORAGE_JWT)
    setJWT(currentJWT);
    
    setTimeout(() => {
      if (currentJWT === 'null') {
        pageState.value = 'NEED_AUTH'
      }

      if (currentJWT !== 'null') {
        // validate: is jwt expired
        pageState.value = 'NEXT_PAGE'
      }
    }, 2000)
  })
</script>

<template>
  <div class="h-screen max-w-full mx-auto pt-16 md:pt-40 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
    <Auth.Login 
      :pageState="pageState"
      v-if="['LOADING', 'NEED_AUTH'].includes(pageState)"
    />

    <Chat.Conversation v-if="pageState === 'NEXT_PAGE'"/>
  </div>
</template>