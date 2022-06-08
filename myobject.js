const myLive = {
    myName: 'Sahruddin',
    lastname: 'Utsiev',
    money: 100,
    married: true,
    mood: 100,
    auto: {
        autoName: 'Priora',
        autoColor: 'white',
        moves: true,
        fuel: 0,
    },


    married1: function () {
        this.money = 0;
    },

    myMoney: function () {
        if (this.money === 0) {
            this.moves = false
            console.log(' машина не на ходу')
        } else {
            console.log(' машина на ходу')
        }
    },

    autoMoves: function () {
        if (this.auto.fuel === 0) {
            console.log('нужна заправка')
        } else {
            this.fuel--
            this.money--
        }
    },

    myMood: function () {
        if (this.money < 30) {
            this.mood = 0;
            console.log(' жизнь боль')
        } else {
            console.log(' обстановка по кайфу')
        }
    },

    jizn: function () {
        this.money--
        this.auto.fuel--
        this.mood--
    }
};
// моя работа