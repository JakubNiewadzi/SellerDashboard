import Polski from '../languages/Polski.json';
import English from '../languages/English.json';

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

export const LANGUAGES = [
    { name: "Polski", messages: Polski },
    { name: "English", messages: English },
]

// export const languages = ["Polski", "English"]

const delayedResponse = (thunk) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(thunk());
        }, 100 + Math.floor(Math.random() * 600));
    });
};

export const performLogin = (username, password) => {
    return delayedResponse(() => {
        switch (true) {
            case username === "Marek" && password === "marek12":
                return {
                    isLoginSuccessful: true,
                    user: "Marek",
                    accounts: ["Konto1", "Konto2"],
                };
            case username === "Andrzej" && password === "andrzej21":
                return {
                    isLoginSuccessful: true,
                    user: "Andrzej",
                    accounts: ["Konto1", "Konto2"],
                };
            default:
                return { isLoginSuccessful: false };
        }
    })
}

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
            case username === "Andrzej" && account === "Konto2":
                return {
                    isPresent: true, opinions: [
                        ...(includePositive ? [
                            { "isPositive": true, "from": "User6", "opinion": "Disappointing. The product didn't meet my expectations. I was hoping for better quality.", "date": "2022-01-26T11:55:00Z" },
                            { "isPositive": true, "from": "User14", "opinion": "Not worth the hype. I had high hopes, but it fell short of delivering the promised features.", "date": "2022-02-03T15:45:00Z" }
                        ] : []),
                        ...(includeNegative ? [
                            { "isPositive": false, "from": "User2", "opinion": "Not impressed. The product lacks essential features, and I expected more for the price.", "date": "2022-01-22T12:45:00Z" },
                            { "isPositive": false, "from": "User10", "opinion": "Meh. Average product with nothing exceptional. I wouldn't recommend it.", "date": "2022-01-30T17:30:00Z" },
                            { "isPositive": false, "from": "User18", "opinion": "Avoid at all costs. Terrible quality, and it's not worth the money spent.", "date": "2022-02-07T13:10:00Z" }
                        ] : []),
                    ],
                };
            default:
                return { isPresent: false };
        }
    });
};

export const [PRODUCTS_RANKING_MOST_SOLD, PRODUCTS_RANKING_LEAST_SOLD] = [0, 1];

export const getProductRanking = (username, account, type) => {
    const mostRare = [
        { name: "Łopata", sold: 33, img: "/spinner.gif", uniqueViews: 121 },
        { name: "Grabie", sold: 13, img: "/spinner.gif", uniqueViews: 539 },
        { name: "Motyka", sold: 43, img: "/spinner.gif", uniqueViews: 442 },
        { name: "Szpadel", sold: 31, img: "/spinner.gif", uniqueViews: 131 },
        { name: "Kilof", sold: 53, img: "/spinner.gif", uniqueViews: 221 },
    ];
    const mostCommon = [
        { name: "Łopata", sold: 33, img: "/spinner.gif", revenue: 32 },
        { name: "Grabie", sold: 13, img: "/spinner.gif", revenue: 12 },
        { name: "Motyka", sold: 43, img: "/spinner.gif", revenue: 51 },
        { name: "Szpadel", sold: 31, img: "/spinner.gif", revenue: 11 },
        { name: "Kilof", sold: 53, img: "/spinner.gif", revenue: 12 },
    ];
    return delayedResponse(() => {
        switch (true) {
            case username === "Marek" && account === "Konto1":
            case username === "Andrzej" && account === "Konto2":
                return {
                    isPresent: true,
                    type: type,
                    entries: type === PRODUCTS_RANKING_MOST_SOLD ? mostCommon : mostRare
                }
            default:
                return { isPresent: false };
        }
    });
};

export const [CHART_CURRENT_PERIOD, CHART_PREVIOUS_PERIOD] = ["current", "previous"];
export const [CHART_MEASURE_SOLD, CHART_MEASURE_REVENUE] = ["sold", "revenue"];
export const [CHART_MONTH, CHART_WEEK, CHART_DAY] = ["byMonth", "byWeek", "byDay"];

export const getChartData = (_username, _account, period, timeFrame) => {
    const data = [];
    if (timeFrame == CHART_MONTH) {
        for (let week = 1; week <= 4; week++) {
            data.push({
                key: "Tydzień " + week,
                revenue: Math.floor(Math.random() * (Math.abs(3 - week) + 1) * 35),
                sold: Math.floor(Math.random() * (Math.abs(3 - week) + 1) * 25),
            });
        }
    } else if (timeFrame == CHART_WEEK) {
        for (let day = 1; day <= 7; day++) {
            data.push({
                key: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ][day - 1],
                revenue: Math.floor(Math.random() * (Math.abs(1 - day) + 1) * 35),
                sold: Math.floor(Math.random() * (Math.abs(1 - day) + 1) * 25),
            });
        }
    } else if (timeFrame == CHART_DAY) {
        for (let hour = 0; hour <= 23; hour++) {
            data.push({
                key: hour.toString().padStart(2, '0') + ":00",
                revenue: Math.floor(Math.random() * (Math.abs(2 - hour) + 1) * 35),
                sold: Math.floor(Math.random() * (Math.abs(2 - hour) + 1) * 25),
            });
        }
    }
    return delayedResponse(() => {
        return {
            timeFrame: timeFrame,
            period: period,
            data: data,
        };
    });
}
