export const getOrigin = () => {
    const oring = window.location.href
    const url = oring.split('//')[1]
    const path = url.split('/')[1]

    return path
}