async function getText(url) {
    let response = await fetch(url);
    let data = await response.json();

    return data

}


for (let i = 0; i < 50; i++) {
    getText("https://api.sampleapis.com/beers/ale")
}