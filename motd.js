function setMotd() {
    motdList = [
        "I hope the Wii Fit Trainer gets stung by a beehive!",
        "LEROYYYYY JENKINSSSSSS",
        "Get your raisins out of that radish - you heard me",
        "I'm rolling with my boy, Orange Square",
        "Building with a hORN on it! Building with a hORN on it!",
        "Shoutout to my girl: the word \"ON\" with two arrows above it!",
        "Escaping to the ONE place that hasn't been corrupted by capitalism",
        "Fast is what you do best, ain’t it? Just keep running.",
        "You know what that means: FISH",
        "Revolution? Overthrow the government? Uh, I think so?",
        "what is this",
        "How the hell do you loose a PS5 on an airplane?",
        "Hell, this is a dinosaur!",
        "Yo phone linging",
        "we're gonna just make a beat from scratch",
        "5th kamehameha fail?",
        "think beyond antiVIRus",
        "Possibly overqualified",
        "Loved by the Russian Queen!",
        "WOMBO COMBO"
    ]

    motdLinkList = [
        "https://www.youtube.com/watch?v=gVsSIJQp8gk",
        "https://www.youtube.com/watch?v=mLyOj_QD4a4",
        "https://rw.rs/",
        "https://www.youtube.com/watch?v=59CpJqCbxXs",
        "https://www.youtube.com/watch?v=59CpJqCbxXs",
        "https://www.youtube.com/watch?v=59CpJqCbxXs",
        "https://www.youtube.com/watch?v=niZpcdp2v34",
        "https://en.wikipedia.org/wiki/Cyberpunk:_Edgerunners",
        "https://www.youtube.com/watch?v=3at_m1J1O4I",
        "https://www.youtube.com/watch?v=3at_m1J1O4I",
        "https://www.youtube.com/watch?v=WO03pmzoIYI",
        "https://direct.playstation.com/en-us/buy-consoles/playstation5-console-1-tb?smcid=pdc:us-en:web-pdc-ps5:buttonblock-buy-now",
        "https://www.youtube.com/watch?v=WPkMUU9tUqk",
        "https://www.youtube.com/watch?v=dvbrfucq8l8",
        "https://www.youtube.com/watch?v=59NVvnkJ0Sw",
        "https://www.youtube.com/watch?v=_ytlnaCT3BQ",
        "https://www.youtube.com/watch?v=JpkUcDV_T8Y",
        "https://www.youtube.com/watch?v=-UYgORr5Qhg",
        "https://www.youtube.com/watch?v=SRWiqjgOyX0",
        "https://www.youtube.com/watch?v=pD_imYhNoQ4"
    ]

    const motdIndex = Math.floor(Math.random() * motdList.length)
    document.getElementById("motd-text").textContent = motdList[motdIndex];
    document.getElementById("motd-link").href = motdLinkList[motdIndex];
}

setMotd();