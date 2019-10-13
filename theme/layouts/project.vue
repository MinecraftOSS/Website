<template>
    <div>
        <div class="hero is-small is-secondary">
            <div class="hero-head">
                <Navbar hero/>
            </div>
            <div class="hero-body">
                <h3 class="title">{{ page.title }}</h3>
                <h5 class="subtitle has-text-grey-light" v-if="page.project.authors">
                    by
                    <span v-for="(author, index) in page.project.authors" :key="index">
                        <span v-if="index != 0">, </span>
                        <a class="has-text-white" :href="author.url">{{ author.name }}</a>
                    </span>
                </h5>
            </div>
        </div>
        <div class="section">
            <div class="container">
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
