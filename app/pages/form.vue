<script setup lang="ts">
const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment, reset } = counterStore

const countRef = ref(0);

const textRef = ref("Green")

const textStore = useTextStore()
const { clear } = textStore
const { text } = storeToRefs(textStore)

function eraseStorage() {
    localStorage.clear()
}
</script>

<template>
    <section class="container">
        <button @click="countRef++">Increment Ref: {{ countRef }}</button>
        <button @click="increment()">Increment Store: {{ count }}</button>
        <button class="wide" @click="reset()">Reset Store</button>

        <div class="textInput">
            <label for="pinia">Text Ref</label>
            <input name="pinia" v-model="textRef" />
        </div>

        <div class="textInput">
            <label for="pinia">Text Store</label>
            <input name="pinia" v-model="text" placeholder="Enter some text"/>
        </div>
        <button class="wide" @click="clear()">Clear Store</button>

        <p class="wide">When using reactive references alone, state is lost after a page navigation.</p>

        <p class="wide">Using Pinia saves the state but only while the app is open. We also need some persistant storage if we want our data to survive page reloads.</p>

        <NuxtLink to="/" class="next">Home</NuxtLink>
        <NuxtLink to="/lorem" class="next">Lorem</NuxtLink>

        <button class="wide" @click="eraseStorage()">Erase Storage</button>
    </section>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5em;
    column-gap: .5em;
    width: 22em;
}

.wide {
    grid-column: 1 / 3;
}

.textInput {
    display: grid;
}

button {
    display: block;
    text-align: center;
}

label {
    padding-right: 1em;
}

p {
    color: white;
}

.next {
    display: block;
    justify-self: center;
}
</style>
