export const users = {
    "Marek": {
        password: "marek12",
        accounts: ["Konto1", "Konto2"],
    },
    "Andrzej": {
        password: "andrzej21",
        accounts: ["Konto1", "Konto2"]
    }
}

const delayedResponse = (thunk) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(thunk());
        }, 200 + Math.floor(Math.random() * 1500));
    });
};

export const getQualityRating = (username, account) => {
    return delayedResponse(() => {
        return username == "Marek"
            ? (account == "Konto1"
                ? {
                    isPresent: true,
                    cumulativeGrade: 4.5,
                    worstAspects: [
                        { name: "Szybkość dostaw", grade: 2.5 },
                        { name: "Cena", grade: 3.5 },
                        { name: "Jakość Produktów", grade: 3 },
                    ]
                }
                : { isPresent: false }
            )
            : (
                { isPresent: false }
            );
    });
}

export const languages = ["Polski", "English"]

export const opinions = [
    { "from": "User1", "opinion": "Great product!", "isPositive": false, "date": "2022-01-21T08:30:00Z", "user": { "username": "Andrzej", "account": "Konto1" } },
    { "from": "User2", "opinion": "Not impressed.", "isPositive": false, "date": "2022-01-22T12:45:00Z", "user": { "username": "Marek", "account": "Konto1" } },
    { "from": "User3", "opinion": "Fantastic service!", "isPositive": false, "date": "2022-01-23T15:20:00Z", "user": { "username": "Andrzej", "account": "Konto2" } },
    { "from": "User4", "opinion": "Could be better.", "isPositive": false, "date": "2022-01-24T09:10:00Z", "user": { "username": "Marek", "account": "Konto2" } },
    { "from": "User5", "opinion": "Love it!", "isPositive": true, "date": "2022-01-25T14:05:00Z", "user": { "username": "Andrzej", "account": "Konto1" } },
    { "from": "User6", "opinion": "Disappointing.", "isPositive": true, "date": "2022-01-26T11:55:00Z", "user": { "username": "Marek", "account": "Konto1" } },
    { "from": "User7", "opinion": "Highly recommended!", "isPositive": true, "date": "2022-01-27T10:40:00Z", "user": { "username": "Andrzej", "account": "Konto2" } },
    { "from": "User8", "opinion": "Not satisfied.", "isPositive": true, "date": "2022-01-28T13:25:00Z", "user": { "username": "Marek", "account": "Konto2" } },
    { "from": "User9", "opinion": "Outstanding quality!", "isPositive": false, "date": "2022-01-29T16:15:00Z", "user": { "username": "Andrzej", "account": "Konto1" } },
    { "from": "User10", "opinion": "Meh.", "isPositive": false, "date": "2022-01-30T17:30:00Z", "user": { "username": "Marek", "account": "Konto1" } },
    { "from": "User11", "opinion": "Amazing experience!", "isPositive": false, "date": "2022-01-31T14:50:00Z", "user": { "username": "Andrzej", "account": "Konto2" } },
    { "from": "User12", "opinion": "Waste of money.", "isPositive": false, "date": "2022-02-01T09:40:00Z", "user": { "username": "Marek", "account": "Konto2" } },
    { "from": "User13", "opinion": "Excellent customer support!", "isPositive": true, "date": "2022-02-02T12:20:00Z", "user": { "username": "Andrzej", "account": "Konto1" } },
    { "from": "User14", "opinion": "Not worth the hype.", "isPositive": true, "date": "2022-02-03T15:45:00Z", "user": { "username": "Marek", "account": "Konto1" } },
    { "from": "User15", "opinion": "Superb!", "isPositive": true, "date": "2022-02-04T11:00:00Z", "user": { "username": "Andrzej", "account": "Konto2" } },
    { "from": "User16", "opinion": "Terrible.", "isPositive": true, "date": "2022-02-05T14:30:00Z", "user": { "username": "Marek", "account": "Konto2" } },
    { "from": "User17", "opinion": "Will buy again!", "isPositive": false, "date": "2022-02-06T16:50:00Z", "user": { "username": "Andrzej", "account": "Konto1" } },
    { "from": "User18", "opinion": "Avoid at all costs.", "isPositive": false, "date": "2022-02-07T13:10:00Z", "user": { "username": "Marek", "account": "Konto1" } },
    { "from": "User19", "opinion": "Impressive quality!", "isPositive": false, "date": "2022-02-08T09:20:00Z", "user": { "username": "Andrzej", "account": "Konto2" } },
    { "from": "User20", "opinion": "Not recommended.", "isPositive": false, "date": "2022-02-09T11:45:00Z", "user": { "username": "Marek", "account": "Konto2" } },
]

export const orders = [
    { "type": "notPaid", "count": 43, "user": { "username": "Marek", "account": "Konto1" } },
    { "type": "notSent", "count": 12, "user": { "username": "Marek", "account": "Konto1" } },
    { "type": "returned", "count": 1, "user": { "username": "Marek", "account": "Konto1" } },
    { "type": "notPaid", "count": 48, "user": { "username": "Marek", "account": "Konto2" } },
    { "type": "notSent", "count": 54, "user": { "username": "Marek", "account": "Konto2" } },
    { "type": "returned", "count": 12, "user": { "username": "Marek", "account": "Konto2" } },
    { "type": "notPaid", "count": 62, "user": { "username": "Andrzej", "account": "Konto1" } },
    { "type": "notSent", "count": 8, "user": { "username": "Andrzej", "account": "Konto1" } },
    { "type": "returned", "count": 3, "user": { "username": "Andrzej", "account": "Konto1" } },
    { "type": "notPaid", "count": 76, "user": { "username": "Andrzej", "account": "Konto2" } },
    { "type": "notSent", "count": 31, "user": { "username": "Andrzej", "account": "Konto2" } },
    { "type": "returned", "count": 13, "user": { "username": "Andrzej", "account": "Konto2" } }
]
