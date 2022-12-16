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
            status: false,
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
            status: false,
            position: "top-right-container",
            city: "Lyon",
            country: "France",
            temperature_format : "C",
            design: "basic",
        }
    }
}

module.exports = {
    config: config
};