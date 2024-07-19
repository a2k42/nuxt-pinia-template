import { useStorage } from '@vueuse/core'

export const useCounterStore = defineStore("counter", () => {
    const count = useStorage("count", 0)

    function increment() {
        count.value++;
    }

    function reset() {
        count.value = 0;
    }

    return { count, increment, reset }
})

export const useTextStore = defineStore("text", () => {
    const text = useStorage("text", "")

    function clear() {
        text.value = ""
    }

    return { text, clear }
})
