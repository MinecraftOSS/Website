<template>
    <footer class="footer has-background-black-ter has-text-white">
        <div class="section content">
            <p>
                All plugins belong to their respective owners and contributors and are released under an open source licence.
            </p>
            <p>
                Website by <a href="https://github.com/md678685"><b>md678685</b></a>. Inspired by <a href="https://papermc.io">PaperMC</a> and based on the <a href="https://essentialsx.cf">EssentialsX website</a>.
                Built with <a href="https://saber.land">Saber</a>, <a href="https://bulma.io">Bulma</a>, <a href="https://vuejs.org">Vue</a> and <a href="https://buefy.org/">Buefy</a>.
            </p>
        </div>
    </footer>
</template>

<script>
import axios from "axios";

export default {
    props: ["page"],
    computed: {
        commitHash() {
            return this.$siteConfig.commitHash;
        },
        commitLink() {
            return "https://github.com/md678685/EssentialsX-Website/commit/" + this.commitHash;
        },
        downloads() {
            return this.external.downloads ? (this.external.downloads / 1000000).toFixed(2) + "m" : "1.5m";
        },
        downloadsHover() {
            return this.external.downloads ? this.external.downloads.toLocaleString("en") : "Over 1.5 million";
        },
        stars() {
            return this.external.github.stars || "400+";
        },
        buildNo() {
            return this.external.jenkins.build || "???";
        },
        members() {
            return this.external.discord.members ? (this.external.discord.members / 1000).toFixed(1) + "k" : "1k";
        },
        membersHover() {
            return this.external.discord.members || "Over 1000";
        }
    }
}



</script>


<style>
.hide-until-code {
    display: none;
}

.konami .hide-until-code {
    display: initial;
}
</style>
