
var mt_data = mtData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
      var mt = mt_data.list[i]
      if (mt.id == id) {
          result = mt
      }
  }
  return result || {}
}

function mtData() {
  var arr = {
      list: [
          {
              id: '1',
              name: 'skd',
              score: 15000,
             
          }, {
              id: '2',
              name: 'lcy',
              score: 12000,
              
          }, {
              id: '3',
              name: 'qpw',
              score: 11230,
              
          }, {
              id: '4',
              name: 'qxl',
              score: 10000,
             
          }, {
              id: '5',
              name: 'wqe',
              score: 10,
           
          }
      ]
  }
  return arr
}
module.exports = {
  mtData: mtData,
  // searchmtdata: searchmtdata,
  // usedraw: usedraw
}
// function change(id,name,score){

// }