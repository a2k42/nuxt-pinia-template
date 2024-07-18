<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.page-enter-active {
    transition: all .25s ease-in;
}

.page-leave-active {
    transition: all .25s ease-out;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(5rem);
}

.slide-fade-leave-active,
.slide-fade-enter-active {
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
}

.slide-fade-enter-from {
    transform: translateX(100vw);
}

.slide-fade-leave-to {
    transform: translateX(-100vw);
}

.layout-enter-active {
    transition: all .3s ease-out;
}

.layout-leave-active {
    transition: all .3s ease-in;
}

.layout-enter-from {
    transform: translateY(10vh);
}
.layout-leave-to {
    transform: translateY(-10vh);
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

</style>