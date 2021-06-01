import app from 'flarum/app';


export default function () {

  const regex = /(?![^<]*>)#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+/g;

  const p = this.$('.Post-body');
  const baseurl = app.forum.attribute('baseUrl');



  p.html = p.html(p.html().replace(regex, match => `<a href="${baseurl}/?q=${match}" class="hasht" title="Search this hashtag into Flarum">${match}</a>`))

}


