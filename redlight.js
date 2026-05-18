function flipCoin() {

    return new Promise((resolve, reject) => {

        let result = "heads";

        if (result === "heads") {

            resolve("You Win");

        }

        else {

            reject("You Lose");

        }

    });

}

flipCoin()

    .then((msg) => {

        console.log(msg);

    })

    .catch((err) => {

        console.log(err);

    });