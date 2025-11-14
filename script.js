async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text()
    console.log(response)
    let element = document.createElement("div")
    let as = div.getElementsByTagName("td")

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}

getSongs()

async function main(){
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]

    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20", " ")} </li>`
    }

    var audio = new Audio(songs[0])
    audio.play()

    audio.addEventListener("ontimeupdate", () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
    })
}

main()