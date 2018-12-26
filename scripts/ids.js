function pandaId(rawDataObj){
  this.id = rawDataObj.id;
};

pandaId.all = [];

pandaId.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    pandaId.all.push(new pandaId(ele));
  })
};


pandaId.fetchAll = function(){
  $.get('data/pandaBase.json',
  pandaId.loadAll);
};
