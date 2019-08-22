function getPlatform() {
    const platform = window.navigator.platform

    if (platform.includes('Win')) {
        return 'Windows'
    } else if (platform.includes('Linux')) {
        return 'Linux'
    } else {
        return 'Mac'
    }
}

function play() {
    const box = document.querySelector('#typed-text')

    box.innerHTML = ''

    let i = 0

    setTimeout(() => box.innerHTML += ';', i += 300)
    setTimeout(() => box.innerHTML += 'n', i += 200)
    setTimeout(() => box.innerHTML += 'e', i += 300)
    setTimeout(() => box.innerHTML += 'w', i += 300)
    setTimeout(() => box.innerHTML = box.innerHTML.substring(0, box.innerHTML.length - 1), i += 100)
    setTimeout(() => box.innerHTML = box.innerHTML.substring(0, box.innerHTML.length - 1), i += 20)
    setTimeout(() => box.innerHTML = box.innerHTML.substring(0, box.innerHTML.length - 1), i += 20)
    setTimeout(() => box.innerHTML = box.innerHTML.substring(0, box.innerHTML.length - 1), i += 20)
    setTimeout(() => box.innerHTML += 'Open up new possibilities', i += 10)
}

async function main() {
    document.querySelector('#os').innerHTML = `Download for Mac`
    // document.querySelector('#os').innerHTML = `Download for ${getPlatform()}` // @todo Uncomment

    const response = await fetch('https://api.github.com/repos/quickwords/quickwords/releases/latest')
    const data = await response.json()

    const url = data.tag_name
        ? `https://github.com/quickwords/quickwords/releases/download/${data.tag_name}/Quickwords-Mac.dmg`
        : 'https://github.com/quickwords/quickwords/releases'
    
    document.querySelector('#os').href = url
    document.querySelector('#mac').href = url
    document.querySelector('#version').innerHTML = data.tag_name || ''

    // @todo Uncomment
    // document.querySelector('#os').href = `https://github.com/quickwords/quickwords/releases/download/${data.tag_name}/Quickwords-${getPlatform()}.zip`
    // document.querySelector('#version').innerHTML = data.tag_name

    setTimeout(play, 1000)
    setInterval(play, 8000)
}

main()
