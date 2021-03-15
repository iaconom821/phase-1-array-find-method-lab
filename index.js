
function superbowlWin(anArray) {
    const wonYear = anArray.find(elem => elem.result === "W");
    if (wonYear) {
        return wonYear.year
    }
}