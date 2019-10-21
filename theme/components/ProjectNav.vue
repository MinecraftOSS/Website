<template>
    <b-navbar type="is-secondary" transparent>
        <template slot="start">
            <b-navbar-item
                v-if="project.website">
                <a class="button is-outlined is-white" :href="project.website">
                    <b-icon pack="fab" size="is-small" icon="github"></b-icon><span> Website</span>
                </a>
            </b-navbar-item>
            <b-navbar-item
                v-if="project.source">
                <a class="button is-outlined is-white" :href="project.source">
                    <b-icon pack="fab" size="is-small" icon="github"></b-icon><span> GitHub</span>
                </a>
            </b-navbar-item>
            <b-navbar-item
                v-if="project.downloads">
                <a class="button is-outlined is-white" :href="project.downloads">
                    <b-icon pack="fab" size="is-small" icon="github"></b-icon><span> Downloads</span>
                </a>
            </b-navbar-item>
            <b-navbar-item
                v-if="project.docs">
                <a class="button is-outlined is-white" :href="project.docs">
                    <b-icon pack="fab" size="is-small" icon="github"></b-icon><span> Docs</span>
                </a>
            </b-navbar-item>
            <b-navbar-item
                v-if="project.patreon">
                <a class="button is-outlined is-white" :href="project.patreon">
                    <b-icon pack="fab" size="is-small" icon="patreon"></b-icon><span> Patreon</span>
                </a>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    props: ["project"]
}
</script>
