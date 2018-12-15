function pandaId(rawDataObj){
  this.id = rawDataObj.id;
};

var allIds = [];

pandaId.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}


pandaId.fetchAll = function(){
  $.get('data/pandaBase.json',
  pandaId.loadAll);

}
