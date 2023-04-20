<template>
    <input
        v-model="input"
    />
</template>

<script setup lang="ts">
import { useUserInput } from "@composables/useUserInput";

const { input } = useUserInput(handleInput);

function handleInput(input: string) {
    console.log(input);
}
</script>