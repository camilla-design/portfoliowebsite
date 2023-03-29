import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    {
      name: "jobplace",
      name: "JobPlace",
      type: "string",
    },
   {
    name: "name",
    title: "Name",
    type: "string"
   },
   {
    name: "jobTitle",
    title: "Job Title",
    type: "string",
   },
   {
    name: "image",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    }
   },
   {
    name: "feedback",
    title: "Feedback",
    type: "string",
   },

  ],

})
