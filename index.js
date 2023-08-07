// code your solution here

// const superbowlWin = record => record.result === "W"

// record.find(superbowlWin)

// const superbowlWin = record.find(a => a.result === "W")
// ()=> {
//     if (superbowlWin) {
//         return superbowlWin.year
//     }
//     return undefined
// }



// function superbowlWin(record) {
//     if (record.result === "W")
//     return record.year
// }  return undefined

// record.find(superbowlWin)


function superbowlWin(record) {
    const winningRecord = record.find(array => array.result === "W");
    if (winningRecord) {
        return winningRecord.year;
    } else
    return undefined;
}