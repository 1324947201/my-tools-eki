//格式化时间
function dateFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = dt.getFullYear()
    const m = padTime(dt.getMonth() + 1)
    const d = padTime(dt.getDate())

    const hh = padTime(dt.getHours())
    const mm = padTime(dt.getMinutes())
    const ss = padTime(dt.getSeconds())

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
}
//补零
function padTime(n) {
    return n > 9 ? n : '0' + n
}

module.exports.dateFormat = dateFormat