Meteor.methods({
  'houses':function(){

      Houses.insert({
        'name':'House',
        'content':'content for house',
        'createdAt':new Date()
      })

      return 'Response'
  },

})
