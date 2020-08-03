// import projects from './projectData';
const menuBtn = $('.menu-btn');
const menu = $('.menu');
const menuNav = $('.menu-nav');
const menuBranding = $('.menu-branding');
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.on('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.addClass('close');
    menu.addClass('show');
    menuNav.addClass('show');
    menuBranding.addClass('show');

    navItems.forEach(function (item) {
      $(item).addClass('show');
    });

    showMenu = true;
  } else {
    menuBtn.removeClass('close');
    menu.removeClass('show');
    menuNav.removeClass('show');
    menuBranding.removeClass('show');

    navItems.forEach(function (item) {
      $(item).removeClass('show');
    });

    showMenu = false;
  }
}

const projects = {
  YourMAIT: {
    title: 'YourMAIT',
    description:
      "YourMAIT is a one stop solution for MAIT (my college) students.It's a web app where students can notes,notices,placement details,upcoming events.There is a feed page where students can create,like,comment posts.Students can also create/join chat rooms",
    image: 'img/projects/yourMait.jpg',
    url: 'https://yourmait.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'MongoDB',
      'Redux',
      'PassportJs',
      'JWT',
      'JQuery',
      'Axios',
      'Sass',
    ],
  },
  Estylish: {
    title: 'Estylish',
    description:
      "Estylish is a full stack e-commerce platform based on apparels and accessories for men & women. Users can register/login, add products to their cart, process a fake payment using Stripe's payment gateway.",
    image: 'img/projects/estylish.jpg',
    url: 'https://estylish.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'Firebase',
      'Redux',
      'Reselect',
      'JQuery',
      'Styled Components',
    ],
  },
  LinkedUp: {
    title: 'LinkedUp',
    description:
      'LinkedUp is a social networking platform designed for developers around the world to connect with each other. Users can register/login, create, like, comment, delete posts, setup their own profile as well as view other developer profiles.',
    image: 'img/projects/linkedup.jpg',
    url: 'https://linked-up-net.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'MongoDB',
      'ExpressJs',
      'ReactJs',
      'Redux',
      'Axios',
      'Sass',
      'JWT',
    ],
  },
  'India fights Corona': {
    title: 'India fights Corona',
    description:
      'India fights Corona is a Covid-19 tracker application to track current situation of novel coronavirus in India. It shows state wise as well as district wise data.It also has a news section and a helplines section with covid-19 helplines for all states.',
    image: 'img/projects/corona.JPG',
    url: 'https://india-fights-corona.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'JS',
      'NodeJs',
      'ExpressJs',
      'Bootstrap',
      'Axios',
      'JQuery',
      'API',
    ],
  },
  Swizzle: {
    title: 'Swizzle',
    description:
      "Swizzle is a men's shirt manufacturing company based in New Delhi, India. They are a best quality shirt manufacturer providing one stop solution for all bulk needs.",
    image: 'img/projects/swizzle.JPG',
    url: 'https://swizzleshirts.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'JS',
      'NodeJs',
      'ExpressJs',
      'MongoDB',
      'EJS',
      'JQuery',
      'Axios',
    ],
  },
};

//show Project Details Modal
$('.item .btn-light').on('click', function () {
  const name = $(this).text();
  const project = projects[name];
  //setting up modal
  $('body .modal-title').text(project.title);
  $('.modal-body').html(`
    <div class='project-info'>
    <div class='project-head'>
      <div class='project-image'>
      <img src=${project.image} alt=${project.title}/>
      </div>
      <p class='project-desc'>${project.description}</p>
      </div>
      <h6 class="text-secondary">
            Technologies Used
          </h6>
<div class='skills'>${project.technologies
    .map((tech) => `<p>${tech}</p>`)
    .join('')}</div>
    </div>
  `);
  $('.modal-footer').html(`
    <a href=${project.url} class='btn-light'>Go to project website</a>
  `);
});

//progress bar
var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  console.log(totalHeight);
  let progress = (window.pageYOffset / totalHeight) * 100;
  $('#progress-bar').css('height', progress + '%');
};

//fetching github details
let dataFetched = false;
let repos = [
  {
    repo: 'processing/p5.js-website',
    title: 'Processing Foundation',
    image: './img/projects/processing.jpg',
    openPrs: [],
    mergedPrs: [],
    openIssues: [],
    closedIssues: [],
  },
  {
    repo: 'laurent22/joplin',
    title: 'Joplin',
    image: './img/projects/joplin.jpg',
    openPrs: [],
    mergedPrs: [],
    openIssues: [],
    closedIssues: [],
  },
];

//fetching open pull requests
// const fetchingGithubData = async (repo, isIssue) => {
//   let openPrs = await fetch(
//     `https://api.github.com/search/issues?q=author:rahulm2310+repo:${repo}+type:${
//       isIssue ? 'issue' : 'pr'
//     }+is:open+sort:author-date-asc`
//   );
//   let mergedPrs = await fetch(
//     `https://api.github.com/search/issues?q=author:rahulm2310+repo:${repo}+type:${
//       isIssue ? 'issue' : 'pr'
//     }+is:${isIssue ? 'closed' : 'merged'}+sort:author-date-asc`
//   );
//   openPrs = await openPrs.json();
//   mergedPrs = await mergedPrs.json();

//   console.log(openPrs);
//   let issues =
//     openPrs.items.length > 0
//       ? openPrs.items.map(
//           (pr) => `<div class="issue-item">
//   <i class="fab fa-facebook open"></i>
//   <div class="content">
//     <h6><a href='${pr.url}'>${pr.title}</a></h6>
//     <p>this is a subtitle</p>
//   </div>
// </div>`
//         )
//       : [`<p>No pull requests found</p>`];
//   console.log(issues);
//   $('.issue-list').html(issues.join(''));
// };

// fetchingGithubData();
if (location.pathname.substring(6) == 'work.html') {
  repos.forEach(async (r) => {
    // await fetchingGithubData(r.repo, true);
    // await fetchingGithubData(r.repo, false);
    let openPrs = await fetch(
      `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:pr+is:open+sort:author-date-asc`
    );
    let mergedPrs = await fetch(
      `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:pr+is:merged+sort:author-date-asc`
    );
    let openIssues = await fetch(
      `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:issue 
      +is:open+sort:author-date-asc`
    );
    let closedIssues = await fetch(
      `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:issue
      +is:closed+sort:author-date-asc`
    );
    openPrs = await openPrs.json();
    mergedPrs = await mergedPrs.json();
    openIssues = await openIssues.json();
    closedIssues = await closedIssues.json();
    r.openPrs = openPrs.items;
    r.mergedPrs = mergedPrs.items;
    r.openIssues = openIssues.items;
    r.closedIssues = closedIssues.items;
    // console.log(r.openPrs);
    // console.log(r.mergedPrs);
    // dataFetched = true;
    updateUi();
  });
}

function updateUi() {
  let openSource = repos.map((r) => {
    return `<div class="box">
  <div class="left">
    <img
      src="${r.image}"
      alt="project-image"
    />
    <h5>${r.title}</h5>
  </div>
  <div class="right">
    <div class="issues">
      <div class="header">
        <h5>Issues Reported</h5>
        <div class="tabs">
        <h6 class="issue-closed tab active">Closed</h6>
          <h6 class="issue-open tab ">Open</h6>
        </div>
      </div>
      <div class="issue-list">
      ${
        r.closedIssues.length > 0
          ? r.closedIssues
              .map(
                (pr) => `<div class="issue-item merged-item">
  <i class="far fa-check-circle merged-icon"></i>
  <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.closed_at).getDate() +
      ' ' +
      months[new Date(pr.closed_at).getMonth()] +
      ',' +
      new Date(pr.closed_at).getFullYear()
    }</small>
  </div>
</div>`
              )
              .join('')
          : `<p>No closed issues found</p>`
      }
      </div>
    </div>
    <div class="issues">
    <div class="header">
      <h5>Pull Requests</h5>
      <div class="tabs">
      <h6 class="pr-merged tab active">Merged</h6>
          <h6 class="pr-open tab">Open</h6>
        </div>
        </div>
      <div class="issue-list">
      ${
        r.mergedPrs.length > 0
          ? r.mergedPrs
              .map(
                (pr) => `<div class="issue-item merged-item">
                <div class='icon-wrapper open-icon'>
                <img src='./img/merge-icon.png'/>
              </div>
  <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.closed_at).getDate() +
      ' ' +
      months[new Date(pr.closed_at).getMonth()] +
      ',' +
      new Date(pr.closed_at).getFullYear()
    }</small>
  </div>
</div>`
              )
              .join('')
          : `<p>No merged pull requests found</p>`
      }
      </div>
    </div>
  </div>
</div>`;
  });

  $('.open-source-list').html(openSource.join(''));
}

$(document).on('click', '.issue-open', function () {
  $(this).addClass('active');
  $(this).parent().children('.issue-closed').removeClass('active');
  let index = repos.find(
    (r) =>
      r.title ==
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .children()
        .children('h5')
        .text()
  );
  let list =
    index.openIssues.length > 0
      ? index.openIssues.map(
          (pr) => `<div class="issue-item open-item">
  <i class="fas fa-exclamation-circle open-icon"></i>
  <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.created_at).getDate() +
      ' ' +
      months[new Date(pr.created_at).getMonth()] +
      ',' +
      new Date(pr.created_at).getFullYear()
    }</small>
  </div>
</div>`
        )
      : [`<p>No open issues found</p>`];
  $(this)
    .parent()
    .parent()
    .parent()
    .children('.issue-list')
    .html(list.join(''));
});

$(document).on('click', '.pr-open', function () {
  $(this).addClass('active');
  $(this).parent().children('.pr-merged').removeClass('active');
  console.log('clickeddd');
  let index = repos.find(
    (r) =>
      r.title ==
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .children()
        .children('h5')
        .text()
  );
  let list =
    index.openPrs.length > 0
      ? index.openPrs.map(
          (pr) => `<div class="issue-item open-item">
          <div class='icon-wrapper open-icon'>
          <img src='./img/open-icon.png'/>
        </div>
  <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.created_at).getDate() +
      ' ' +
      months[new Date(pr.created_at).getMonth()] +
      ',' +
      new Date(pr.created_at).getFullYear()
    }</small>
  </div>
</div>`
        )
      : [`<p>No open pull requests found</p>`];
  // console.log($(this).parent().parent().parent().children('.issue-list'));
  $(this)
    .parent()
    .parent()
    .parent()
    .children('.issue-list')
    .html(list.join(''));
});

$(document).on('click', '.issue-closed', function () {
  $(this).addClass('active');
  $(this).parent().children('.issue-open').removeClass('active');
  let index = repos.find(
    (r) =>
      r.title ==
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .children()
        .children('h5')
        .text()
  );
  let list =
    index.closedIssues.length > 0
      ? index.closedIssues.map(
          (pr) => `<div class="issue-item merged-item">
  <i class="fas fa-check-circle merged-icon"></i>
  <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.closed_at).getDate() +
      ' ' +
      months[new Date(pr.closed_at).getMonth()] +
      ',' +
      new Date(pr.closed_at).getFullYear()
    }</small>
  </div>
</div>`
        )
      : [`<p>No closed issues found</p>`];
  $(this)
    .parent()
    .parent()
    .parent()
    .children('.issue-list')
    .html(list.join(''));
});

$(document).on('click', '.pr-merged', function () {
  $(this).addClass('active');
  $(this).parent().children('.pr-open').removeClass('active');
  $();
  let index = repos.find(
    (r) =>
      r.title ==
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .children()
        .children('h5')
        .text()
  );
  let list =
    index.mergedPrs.length > 0
      ? index.mergedPrs.map(
          (pr) => `<div class="issue-item merged-item">
          <div class='icon-wrapper'>
          <img src='./img/merge-icon.png'/>
        </div>
          <div class="content">
    <h6><a href='${pr.url}'>#${pr.number} : ${pr.title}</a></h6>
    <small>${
      new Date(pr.closed_at).getDate() +
      ' ' +
      months[new Date(pr.closed_at).getMonth()] +
      ',' +
      new Date(pr.closed_at).getFullYear()
    }</small>
  </div>
</div>`
        )
      : [`<p>No merged pull requests found</p>`];
  // console.log($(this).parent().parent().parent().children('.issue-list'));
  $(this)
    .parent()
    .parent()
    .parent()
    .children('.issue-list')
    .html(list.join(''));
});
