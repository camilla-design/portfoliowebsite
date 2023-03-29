import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
   {
    name: "name",
    title: "Name",
    type: "string"
   },
   {
    name: "role",
    title: "Role",
    type: "string",
   },
   {
    name: "image",
    title: "image",
    type: "image",
    options: {
      hotspot: true,
    }
   },
   {
    name: "backgroundInformation",
    title: "BackgroundInformation",
    type: "string",
   },
  {
    name: "profilePictrure",
    title: "ProfilePicture",
    type: "image",
    options: {
      hotspot: true,
    }
  },
  ],

})