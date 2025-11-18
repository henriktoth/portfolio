<script setup>
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
    id: String,
    type: String,
    icon: String,
    year: String,
    name: String,
    subname: String,
    data: Array
});
</script>

<template>
    <div class="flex flex-col items-center border-3 rounded-2xl p-5 md:min-w-[400px] min-w-[350px]
                transition-transform duration-300 hover:scale-105 cursor-default">
        <Icon v-if="type == 'study'" class="pb-5" :icon="icon" width="128" height="128" />
        <img v-else class="pb-5" :src="icon" width="128" height="128">
        <p class="text-md font-bold pb-3">{{ year }}</p>
        <p class="text-2xl text-center"> {{ name }}</p>
        <p class="pb-5"> {{ subname }}</p>
        <div>
            <ul class="list-disc pl-5">
                <li v-for="(item, index) in data" :key="index">{{ t(`${type}.${id}.${item}`) }}</li>
            </ul>
        </div>
    </div>
</template>
