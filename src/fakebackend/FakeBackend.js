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

export const languages = ["Polski", "English"]

const delayedResponse = (thunk) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(thunk());
        }, 100 + Math.floor(Math.random() * 600));
    });
};

export const getQualityRating = (username, account) => {
    return delayedResponse(() => {
        switch (true) {
            case username === "Marek" && account === "Konto1":
                return {
                    isPresent: true,
                    cumulativeGrade: 4.5,
                    worstAspects: [
                        { name: "Szybkość dostaw", grade: 2.5 },
                        { name: "Cena", grade: 3.5 },
                        { name: "Jakość Produktów", grade: 3 },
                    ],
                };
            case username === "Andrzej" && account === "Konto2":
                return {
                    isPresent: true,
                    cumulativeGrade: 1.5,
                    worstAspects: [
                        { name: "Szybkość dostaw", grade: 3.5 },
                        { name: "Cena", grade: 3 },
                        { name: "Jakość Produktów", grade: 1.5 },
                    ],
                };
            default:
                return { isPresent: false };
        }
    });
};

export const getOrdersStatistics = (username, account) => {
    return delayedResponse(() => {
        switch (true) {
            case username === "Marek" && account === "Konto1":
                return { isPresent: true, notPaid: 48, notSent: 54, returned: 12, };
            case username === "Andrzej" && account === "Konto1":
                return { isPresent: true, notPaid: 62, notSent: 8, returned: 3, };
            default:
                return { isPresent: false };
        }
    });
};

export const [OPINIONS_ALL, OPINIONS_POSITIVE, OPINIONS_NEGATIVE] = [0, 1, 2];

export const getLatestOpinions = (username, account, type) => {
    const includePositive = type === OPINIONS_POSITIVE || type === OPINIONS_ALL;
    const includeNegative = type === OPINIONS_NEGATIVE || type === OPINIONS_ALL;
    return delayedResponse(() => {
        switch (true) {
            case username === "Marek" && account === "Konto1":
                return {
                    isPresent: true, opinions: [
                        ...(includePositive ? [
                            { "isPositive": true, "from": "User6", "opinion": "Disappointing.", "date": "2022-01-26T11:55:00Z" },
                            { "isPositive": true, "from": "User14", "opinion": "Not worth the hype.", "date": "2022-02-03T15:45:00Z" }
                        ] : []),
                        ...(includeNegative ? [
                            { "isPositive": false, "from": "User2", "opinion": "Not impressed.", "date": "2022-01-22T12:45:00Z" },
                            { "isPositive": false, "from": "User10", "opinion": "Meh.", "date": "2022-01-30T17:30:00Z" },
                            { "isPositive": false, "from": "User18", "opinion": "Avoid at all costs.", "date": "2022-02-07T13:10:00Z" }
                        ] : []),
                    ],
                };
            case username === "Marek" && account === "Konto2":
                return {
                    isPresent: true, opinions: [
                        ...(includePositive ? [
                            { "isPositive": true, "from": "User8", "opinion": "Not satisfied.", "date": "2022-01-28T13:25:00Z" },
                            { "isPositive": true, "from": "User16", "opinion": "Terrible.", "date": "2022-02-05T14:30:00Z" }
                        ] : []),
                        ...(includeNegative ? [
                            { "isPositive": false, "from": "User4", "opinion": "Could be better.", "date": "2022-01-24T09:10:00Z" },
                            { "isPositive": false, "from": "User12", "opinion": "Waste of money.", "date": "2022-02-01T09:40:00Z" },
                            { "isPositive": false, "from": "User20", "opinion": "Not recommended.", "date": "2022-02-09T11:45:00Z" }
                        ] : []),
                    ],
                };
            case username === "Andrzej" && account === "Konto1":
                return {
                    isPresent: true, opinions: [
                        ...(includePositive ? [
                            { "isPositive": true, "from": "User5", "opinion": "Love it!", "date": "2022-01-25T14:05:00Z" },
                            { "isPositive": true, "from": "User13", "opinion": "Excellent customer support!", "date": "2022-02-02T12:20:00Z" }
                        ] : []),
                        ...(includeNegative ? [
                            { "isPositive": false, "from": "User1", "opinion": "Great product!", "date": "2022-01-21T08:30:00Z" },
                            { "isPositive": false, "from": "User9", "opinion": "Outstanding quality!", "date": "2022-01-29T16:15:00Z" },
                            { "isPositive": false, "from": "User17", "opinion": "Will buy again!", "date": "2022-02-06T16:50:00Z" }
                        ] : []),
                    ],
                };
            case username === "Andrzej" && account === "Konto2":
                return {
                    isPresent: true, opinions: [
                        ...(includePositive ? [
                            { "isPositive": true, "from": "User7", "opinion": "Highly recommended!", "date": "2022-01-27T10:40:00Z" },
                            { "isPositive": true, "from": "User15", "opinion": "Superb!", "date": "2022-02-04T11:00:00Z" }
                        ] : []),
                        ...(includeNegative ? [
                            { "isPositive": false, "from": "User3", "opinion": "Fantastic service!", "date": "2022-01-23T15:20:00Z" },
                            { "isPositive": false, "from": "User11", "opinion": "Amazing experience!", "date": "2022-01-31T14:50:00Z" },
                            { "isPositive": false, "from": "User19", "opinion": "Impressive quality!", "date": "2022-02-08T09:20:00Z" }
                        ] : []),
                    ],
                };
            default:
                return { isPresent: false };
        }
    });
};
