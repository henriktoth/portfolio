<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
    <div class="bg-neutral-800 m-2 rounded-2xl p-5 flex justify-between">
        <p class="text-white">&copy; {{ new Date().getFullYear() }} Tóth Henrik. Minden jog fenntartva.</p>
        <p class="text-white text-right"> Icons provided by <a class="text-orange-400 font-bold"
                href="https://icones.js.org">icones.js.org</a></p>
    </div>
</template>