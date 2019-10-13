import Vue from "vue";
import axios from "axios";

const state = Vue.observable({
    discord: {
        members: null,
    }
});

export default {
    data() {
        return {
            external: state
        }
    }
}

async function getMembers() {
    let members = 1000;
    try {
        let response = await axios.get("https://canary.discordapp.com/api/guilds/390942438061113344/widget.json");
        members = response.data.members.length;
    } catch (e) {
        console.error(e);
    }

    state.discord.members = members;
}

getMembers();
