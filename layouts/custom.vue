<script setup lang="ts">
  type Theme = 'light' | 'dark';
  const LOCAL_STORAGE_THEME_KEY = 'theme';
  const darkMode = useState(LOCAL_STORAGE_THEME_KEY, () => false);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    darkMode.value = newTheme === 'dark';
  };

  onMounted(() => {
    const isDarkModePreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const themeFromLocalStorage = localStorage.getItem(
      LOCAL_STORAGE_THEME_KEY
    ) as Theme;
    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    } else {
      setTheme(isDarkModePreferred ? 'dark' : 'light');
    }
  });

  watch(darkMode, selected => {
    setTheme(selected ? 'dark' : 'light');
  });
</script>

<template>
  <main :class="{ 'dark': darkMode }">
    <section class="h-screen overflow-y-auto dark:bg-gray-900">
      <button
        class="p-2 rounded focus:outline-none absolute right-0 top-0 px-5 py-5"
        aria-label="Toggle theme"
      >
        <svg @click="setTheme('light')" v-if="darkMode" class="w-5 h-5 fill-current text-yellow-300" aria-label="Apply light theme" role="img" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg @click="setTheme('dark')" v-if="!darkMode" class="w-5 h-5" aria-label="Apply dark theme" role="img" fill="currentColor" viewBox="0 0 20 20" >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>

      <slot />
    </section>
  </main>
</template>