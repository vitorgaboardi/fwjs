<template>
  <div className="tabPane">
    <h1>Vue</h1>
    <button
      v-for="(option, index) in content"
      :key="option"
      :class="{ selected: index === currentOption }"
      @click="select(index)"
    >
      {{ option['title'] }}
    </button>
    <div>
      <Option v-bind="content[currentOption]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Option, { type OptionProps } from './Option.vue';

const content: OptionProps[] = [
  {
    title: 'Tab 1',
    text: 'Texto da tab 1',
  },
  {
    title: 'Tab 2',
    text: 'Texto da tab 2',
  },
  {
    title: 'Tab 3',
    text: 'Texto da tab 3',
  },
  {
    title: 'Tab 4',
    text: 'Texto da tab 4',
  },
];

const currentOption = ref(0); // armazena qual é a Opção selecionada no momento.

/** Atualiza a opção selecionada pelo usuário. */
function select(optionIndex: number) {
  currentOption.value = optionIndex;
}
</script>

<style>
.tabPane {
  padding: 50px;
  text-align: center
}

button {
  margin: 0px 17px 10px 17px;
  background-color: #eee;
  border: 2px solid rgb(118, 118, 118);
  border-radius: 3px;
  padding: 5px 30px;
}

.selected {
  font-weight: bold;
  background-color: #aaa;
}
</style>
