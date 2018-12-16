function pandaId(rawDataObj){
  this.id = rawDataObj.id;
};

pandaId.all = [];

pandaId.loadAll = function(rawData) {
  console.log('hi!')
  console.log(rawData);
  rawData.forEach(function(ele) {
    pandaId.all.push(new pandaId(ele));
  })
};


pandaId.fetchAll = function(){
  console.log('helo1')
  $.get('data/pandaBase.json',
  pandaId.loadAll);
};
