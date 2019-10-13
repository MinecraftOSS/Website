<template>
    <div>
        <Navbar />
        <div class="section">
            <div class="container">
                <h1 class="title is-4">{{ page.attributes.title }}</h1>
                <h2 class="subtitle is-6 has-text-grey">{{ page.attributes.createdAt }}</h2>
                <div class="content">
                    <slot name="default" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    props: ['page'],
    components: {
        Navbar,
        Footer
    },
    head() {
        return {
            title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
        }
    }
}
</script>
