<template>
    <b-navbar type="is-primary" :transparent="hero">
        <template slot="brand">
            <b-navbar-item tag="saber-link" to="/">
                <b>{{ $siteConfig.title }}</b>
            </b-navbar-item>
        </template>

        <template slot="start">
            <!-- Projects -->
        </template>

        <template slot="end">
            <b-navbar-item tag="a" href="https://github.com/MinecraftOSS">GitHub</b-navbar-item>
            <b-navbar-item tag="saber-link" to="/discord">Discord</b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    props: {
        hero: {
            type: Boolean,
            default: false
        }
    }
}
</script>
