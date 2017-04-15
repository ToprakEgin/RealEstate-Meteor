Meteor.publish('allHouses',function(){
  return Houses.find({},{limit:5});
})
