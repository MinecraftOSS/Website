<template>
    <div>
        <!-- <Navbar /> - included in hero-head -->
        <slot name="default" />
        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Navbar,
        Footer
    },
    head() {
        return {
            title: `${this.$siteConfig.title}`
        }
    }
}
</script>
