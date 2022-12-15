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
            position: "top_left",
            format: "HH:MM",
            timezone: "UTC+1",
            design: "basic",
        },
        weather: {
            status: true,
            position: "bottom_right",
            city: "Lyon",
            country: "France",
            temperature_format : "C",
            design: "basic",
        }
    }
}