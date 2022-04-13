const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
    constructor(name) {
        super(name);
        this.job = "Thief";
    }

    robbedBlind() {
        // TODO: answer here
        if (this.getGold() < 10) {
            return "Aku terlalu miskin";
        } else {
            this.setGold(this.getGold() - 10);
            return this.setStealChance(0.75);
        }
    }

    steal(player) {
        // TODO: answer here
        if (player.randomizer() <= this.getStealChance() && player.getGold() >= 5) {
            let gold1 = 0;
            let gold2 = 0;
            gold1 = this.getGold() + 5;
            gold2 = player.getGold() - 5;
            this.setGold(gold1);
            player.setGold(gold2);
            if (player.job === "Trickster") {
                return player.distractionPurse(this);
            } else {
                return "Berhasil mencuri 5 gold";
            }
        } else if (player.getGold() < 5) {
            return "Lawan terlalu miskin";
        } else {
            return "Gagal mencuri, coba lain kali";
        }
    }
}

class Trickster extends Player {
    constructor(name) {
        super(name);
        this.distractionPurseChance = 0.25;
        this.job = "Trickster";
    }

    setDistractionPurseChance(chance) {
        // TODO: answer here
        this.distractionPurseChance = chance;
    }

    getDistractionPurseChance() {
        // TODO: answer here
        return this.distractionPurseChance;
    }

    distractionPurse(player) {
        const acak = this.randomizer();
        // TODO: answer here
        if (this.getDistractionPurseChance() >= acak) {
            return this.steal(player);
        } else {
            return "Gagal mencuri balik";
        }
    }

    steal(player) {
        // TODO: answer here
        if (player.getGold() > 10) {
            this.setGold(this.getGold() + 10);
            player.setGold(player.getGold() - 10);
            return "Berhasil mencuri balik 10 gold";
        } else {
            this.setGold(this.getGold() + player.getGold());
            player.setGold(0);
            return "Berhasil mencuri balik semua uang lawan";
        }
    }
}

const p1 = new Thief("Fauzan");
const p2 = new Trickster("Tegar");

console.log('Jumlah gold Player 1: ' + p1.getGold())
console.log('Jumlah gold Player 2: ' + p2.getGold())
console.log(p1.steal(p2));
console.log('Total gold Player 1: ' + p1.getGold())
console.log('Total gold Player 2: ' + p2.getGold())
// Dilarang menghapus code dibawah ini!!!
module.exports = {
    Thief,
    Trickster,
};