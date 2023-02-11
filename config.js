var config = {
    app: {
        youtube: {
            status: true,
            url: "https://www.youtube.com"
        },
        netflix:  {
            status: true,
            url: "https://www.netflix.com"
        },
        disney:  {
            status: true,
            url: "https://www.disneyplus.com"
        },
        amazon_prime:  {
            status: true,
            url: "https://www.primevideo.com"
        }
    },
    widget: {
        clock: {
            status: true,
            position: "top-left-container",
            format: "HH:MM",
            timezone: "UTC+1",
            date: "dd/mm/yyyy",
            design: "basic",
        },
        weather: {
            status: true,
            position: "top-right-container",
            city: "Roskilde",
            country: "France",
            temperature_format : "C",
            design: "basic",
        },
        currency: {
            status: true,
            position: "bottom-container",
            currency: "DKK",
            design: "basic",
        }
    }
}

module.exports = {
    config: config
};