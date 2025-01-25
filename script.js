const countDown = setInterval(() => {
    // #1
    const upComing = new Date('december 23 2025 00:00:00').getTime()
    const now = new Date().getTime()
    const left = upComing - now

    // #2
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // #3
    const textDay = Math.floor(left / day)
    const textHour = Math.floor((left % day) / hour)
    const textMinute = Math.floor((left % hour) / minute)
    const textSecond = Math.floor((left % minute) / second)

    // #4
    document.querySelector('.day h1').textContent = textDay
    document.querySelector('.hour h1').textContent = textHour
    document.querySelector('.minute h1').textContent = textMinute
    document.querySelector('.second h1').textContent = textSecond

    if (left <= 0) {
        clearInterval(countDown)
        document.querySelector('.wrapper').innerHTML = '<h1>GAME OVER</h1>'
    }
}, 1000)