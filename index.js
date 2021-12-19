
const record =[
  { year: "2015",result: "W"},
  { year: "2014", result: "W"},
  { year: "2013", result: "L"},]
  //...
  //function superbowlWin(record){if (record.result==='W')return record.year}
  function superbowlWin(record){for (let obj of record)if (obj.result==="W"){return obj.year}}//else return undefined}
 console.log((superbowlWin(record)))
 //console.log(record[0].result)
