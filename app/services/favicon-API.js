export function getFavicon(partner_link) {
    let favicon_url = ''
    favicon_url = partner_link

    return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${favicon_url}/&size=128`
}