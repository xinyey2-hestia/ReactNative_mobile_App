export function api() {
    return fetch('https://api.github.com/users/'.concat(gitUserName).concat('/repos'))
      .then(res => res.json())
      .then(response => {
      return response;
      })
  };


const query = `
    query {
        viewer {
            bio
            login
            avatarUrl
            createdAt
            email
            name
            followers {
                totalCount
             }
            following {
                totalCount
             }
             repositories {
                 totalCount
              }
             websiteUrl

        }

     }`;
const accessToken = "860dcba4338853ffe40a14a0b071776f8d3dd743";
export function gitapi(){
    return fetch('https://api.github.com/graphql',{
        method : 'POST',
        body: JSON.stringify({query}),
        headers:{
            'Authorization': `Bearer ${accessToken}`,
        },

    })
      .then(res => res.json())
      .then(response => {
      return response
      })
};