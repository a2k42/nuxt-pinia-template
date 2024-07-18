<template>
    <div class="grid">
        <header class="top">
            <h2>Header</h2>
        </header>
        <main>
            <section class="middle">
                <slot />
            </section>
        </main>
        <section class="bottom">
            <h2>Footer</h2>
        </section>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    gap: 1em;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    height: 100%;
}

.top {
    padding: 1.5em;
    text-align: center;
}

main {
    display: grid;
    grid-template-columns: 5em 1fr 5em;
    justify-items: center;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    mask-image: linear-gradient(transparent 0, black 5%, black 95%, transparent 100%);
}

.middle {
    grid-column: 2;
    max-width: 60em;
    padding-top: 20vh;
    padding-right: 1em;
}

.bottom {
    padding: .5em 0 .5em 0;
}
</style>