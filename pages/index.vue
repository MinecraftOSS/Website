<template>
    <div>
        <div class="hero is-primary is-bold is-medium">
            <div class="hero-head">
                <Navbar />
            </div>
            <div class="hero-body has-text-centered">
                <h1 class="title is-1">Welcome to MOSS</h1>
                <h3 class="subtitle is-3">Minecraft Open Source Software</h3>
            </div>
        </div>
        <div class="section">
            <h2 class="title is-2 has-text-centered">Our projects</h2>
            <ClientOnly>
                <carousel
                    class="container"
                    :autoplay="true"
                    :loop="true"
                    :per-page-custom="[[0, 1], [769, 2], [1024, 3], [1408, 4]]"
                    :scroll-per-page="false">
                    <slide style="padding: 12px" v-for="project in page.showcase" :key="project.name">
                        <div class="box">
                            <h1 class="title">{{ project.name }}</h1>
                            <h3 class="subtitle">{{ project.tagline }}</h3>
                            <p><saber-link :to="project.slug + '.html'">View this project...</saber-link></p>
                        </div>
                    </slide>
                </carousel>
            </ClientOnly>
        </div>
        <div class="section">
            <h2 class="title is-2 has-text-centered">News</h2>
            <ul class="post-list container" v-if="page && page.posts && page.posts.length > 0">
                <li class="box" v-for="post in page.posts" :key="post.permalink">
                    <h3>
                        <saber-link
                        class="post-link title is-4 has-text-primary"
                        :to="post.permalink"
                        >{{ post.title }}</saber-link>
                    </h3>
                    <span class="subtitle is-6 is-italic has-text-grey">{{ formatPostDate(post.createdAt) }}</span>
                    <div class="content">
                        <hr>
                        <span v-html="post.excerpt"></span>
                        <saber-link :to="post.permalink">Read more...</saber-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { formatDistance } from "date-fns";

import Navbar from "../theme/components/Navbar.vue";
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";

export default {
    props: ["page"],
    components: {
        Navbar,
        Carousel,
        Slide
    },
    methods: {
        formatPostDate(date) {
            return `${formatDistance(date, Date.now())} ago`;
        }
    }
};

export const attributes = {
    layout: "index",
    // Inject post list as `page.posts` (by saber-plugin-query-posts)
    injectAllPosts: true,
    injectShowcase: true
}

</script>

<style lang="scss" scoped>
.box {
    transition: 500ms transform ease;
}
.box:hover {
    transform: scale(1.02);
}
</style>
