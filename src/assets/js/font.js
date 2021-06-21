export const fontSize = (res, width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) => {
    let docEl = document.documentElement,
        clientWidth = width
    if (!clientWidth) return
    let fontSize = 100 * (clientWidth / 1920)
    return res * fontSize
}