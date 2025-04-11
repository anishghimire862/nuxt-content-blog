<template>
  <pre :class="$props.class" class="relative overflow-hidden"><div class="absolute w-full-right-margin flex justify-between small-text mb-2 pr-5"><span>{{ displayFilenameAndLanguage() }}</span><a @click="copyToClipboard" class="text-white cursor-pointer no-underline small-text absolute right-0"><Icon name="prime:copy" class="copy-icon"/></a></div><div ref="codeBlock" class="overflow-auto mt-5 pt-4"><slot/></div></pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const displayFilenameAndLanguage = (() => {
  const { filename, language } = props
  return filename ? (language ? `${filename} (${language})` : filename) : (language || filename)
})

const codeBlock = ref(null)
const copyToClipboard = async () => {
  if (codeBlock.value) {
    const textToCopy = codeBlock.value.innerText
    await navigator.clipboard.writeText(textToCopy)
  }
}
</script>

<style>
pre code {
  display: block;
  padding: 0;
}

.copy-icon {
  background: white !important;
  font-size: 2rem;
}

.copy-icon:hover {
  background: #e0e0e0 !important;
}

.small-text {
  font-size: 0.875em;
}

.w-full-right-margin {
  width: 96%;
}
</style>
