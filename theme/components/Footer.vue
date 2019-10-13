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
            <p class="hide-until-code">
                <b>ʇıʞʞnq ɐ sɐɥ ı</b>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    props: ["page"]
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
