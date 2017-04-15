import "./index.css"
import "./index.html"

Template.homepage.onRendered(function(){ // Document.ready
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   $('select#status').material_select();
   $('.tooltipped').tooltip();
})

Template.homepage.helpers({
  card(){
    return Houses.find();
  }
})

Template.homepage.onCreated(function(){

})

Template.homepage.events({
  'click #button':function(event,template){
    event.preventDefault();
    Meteor.call('houses',function(error,response) {
        if(error){
          Materialize.toast('Bu Bir Error', 2500,'red white-text');
        }else{
          Materialize.toast(response, 2500,'green white-text');
        }
    });
  }
})
