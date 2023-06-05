<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="/logo.jpg" alt="logo yu-gi-oh">
        </div>
        <h1>
            Yu-Gi-Oh API
        </h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    height: 50px;

    .logo {
        width: 80px;
        margin-inline: 15px;
        margin-top: 5px;
    }

    h1 {
        font-weight: 400;
    }
}
</style>
