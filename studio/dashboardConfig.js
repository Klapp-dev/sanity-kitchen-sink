export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecb94d99424d373157fce91',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mjz648d7',
                  apiId: '8c0a51ef-4959-41a6-ae7b-0a2b5fc25195'
                },
                {
                  buildHookId: '5ecb94d9c9456681345a1f9b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3j8xtz9i',
                  apiId: '4b74006d-8127-4b04-921f-3bd22f032d1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Klapp-dev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3j8xtz9i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
