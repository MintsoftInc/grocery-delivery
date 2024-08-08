import { defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Stores',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Store name',
      validation: rule=> rule.required(),
   },
   {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule=> rule.max(200),
   },
   {
      name: 'stores',
      type: 'array',
      title: 'Stores',
      of: [{type: 'reference', to: [{type: 'store'}]}]
   }
  ],
})