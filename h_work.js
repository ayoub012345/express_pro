function hours_Work(req, res, next) {
    const date = new Date()
    const hours = date.getHours();
    const days  = date.getDay();


if(days < 6 && days > 0  && hours >= 9 && hours < 17)

{
    next()

}else {
    res
        .status(403)
        .send("<h2>We're not working in the current time, come back at (Monday to Friday at 9h -> 17h)<h2>")
}

}

module.exports = hours_Work