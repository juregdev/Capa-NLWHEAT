const Link_media = {
  facebook: 'filipe.barrosg',
  instagram: 'filipe_barrosg',
  github: 'Filipebarrosg'
}

function changeLink() {
  for (li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${Link_media[social]}`
  }
}
changeLink()

function get_profile_infos_github() {
  const url = `https://api.github.com/users/${Link_media.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user_bio.textContent = data.bio
      git.href = data.html_url
      user_photo.src = data.avatar_url
      user_login.textContent = data.login
    })
}

get_profile_infos_github()
