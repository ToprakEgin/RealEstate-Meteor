import "./index.css"
import "./index.html"

Template.homepage.onRendered(function(){
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   $('select#status').material_select();
})

Template.homepage.helpers({
  card(){
    return [1,2,3]
  }
})
