import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
   {
    name: "title",
    title: "Title",
    description: "Plattform for teknologi",
    type: "string"
   },
   {
    name: "url",
    title: "Url",
    type: "url",
   },
   
  ],

})
