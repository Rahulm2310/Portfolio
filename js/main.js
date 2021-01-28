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
      "YourMAIT is a one stop portal for MAIT (my college) students.It's a web app where students can notes,notices,placement details,upcoming events. Students can create,like,comment posts. They can also create/join chat rooms.",
    image: 'img/projects/yourMait.JPG',
    url: 'https://yourmait.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'MongoDB',
      'Redux',
      'Firebase',
      'JWT',
      'JQuery',
      'Axios',
      'Sass',
      'AJAX',
      'REST',
      'Socket.io',
      'Draft.js',
      "Puppeteer",
      "Alan AI"
    ],
  },
  Wedeo: {
    title: 'Wedeo',
    description:
      "Wedeo is a web based video conferenencing application built with WebRTC and Web Sockets. Users can host or join a meeting with a meeting id & password.",
    image: 'img/projects/wedeo.JPG',
    url: 'https://wedeo.netlify.app',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'React.js',
      'Next.js',
      'Express.js',
      'Firebase',
      'Realtime Database',
      'Redux',
      'Redux-Thunk',
      'Peer.js',
      'Socket.io',
      'JQuery',
      'REST API'
    ],
  },
  Estylish: {
    title: 'Estylish',
    description:
      "Estylish is a full stack e-commerce platform based on apparels and accessories for men & women. Users can register/login, add products to their cart, process a fake payment using Stripe's payment gateway.",
    image: 'img/projects/estylish.JPG',
    url: 'https://estylish.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'Firebase',
      'Cloud Firestore',
      'Redux',
      'Redux-Saga',
      'Reselect',
      'JQuery',
      'Styled Components',
      'Stripe',
      'GraphQL',
      'Jest'
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
      'MongoDB Atlas',
      'ExpressJs',
      'ReactJs',
      'Redux',
      'Axios',
      'Sass',
      'JWT',
      'AJAX',
      'REST'
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
      'JavaScript',
      'NodeJs',
      'ExpressJs',
      'Bootstrap',
      'Axios',
      'JQuery',
      'API',
      'REST',
      'AJAX'
    ],
  },
  Swizzle: {
    title: 'Swizzle',
    description:
      "Swizzle is a men's shirt manufacturing company based in New Delhi, India.This website is a showcase for the company's products and work processes.",
    image: 'img/projects/swizzle.JPG',
    url: 'https://swizzleshirts.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'NodeJs',
      'ExpressJs',
      'MongoDB',
      'EJS',
      'JQuery',
      'Axios',
      'REST',
      'Bootstrap'
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
  // console.log(totalHeight);
  let progress = (window.pageYOffset / totalHeight) * 100;
  $('#progress-bar').css('height', progress + '%');
};

//fetching github details
let dataFetched = false;
// let repos = [
//   {
//     repo: 'processing/p5.js-website',
//     title: 'Processing Foundation',
//     image: './img/projects/processing.jpg',
//     issues:[],
//     prs:[]
//   },
//   {
//     repo: 'laurent22/joplin',
//     title: 'Joplin',
//     image: './img/projects/joplin.jpg',
//     issues:[],
//     prs:[]
//   },
//     {
//     repo: 'anitab-org/bridge-in-tech-web',
//     title: 'AnitaB.org',
//     image: './img/projects/anitab.png',
//     issues:[],
//     prs:[]
//   },
// ];
// console.log(location.pathname);

const fetchData = async()=>{
  let prs = await fetch(
    `https://api.github.com/search/issues?q=author:rahulm2310+type:pr`
  );
  let issues = await fetch(
    `https://api.github.com/search/issues?q=author:rahulm2310+type:issue`
  );

  prs=await prs.json();
  issues=await issues.json();
  prs=prs.items;
  issues=issues.items;
 
 
  updateUi({issues,prs});
}

if (location.pathname.substring(10) == '/work.html') {
  fetchData();


  // repos.forEach(async (r) => {
    // await fetchingGithubData(r.repo, true);
    // await fetchingGithubData(r.repo, false);
    // let openPrs = await fetch(
    //   `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:pr+is:open+sort:author-date-asc`
    // );
    // let mergedPrs = await fetch(
    //   `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:pr+is:merged+sort:author-date-asc`
    // );
    // let openIssues = await fetch(
    //   `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:issue 
    //   +is:open+sort:author-date-asc`
    // );
    // let closedIssues = await fetch(
    //   `https://api.github.com/search/issues?q=author:rahulm2310+repo:${r.repo}+type:issue
    //   +is:closed+sort:author-date-asc`
    // );
}


const GITHUB_URL = 'https://github.com';

function updateUi(r) {
    let openSource = `<div class="box">
                <div class="issue-box">
                  <div class="header">
                    <h5>Issues Reported</h5>
                    </div>
                    <div class="issue-list">
                    ${
                      r.issues.length > 0
                        ? r.issues
                            .map(
                              (pr) => {
                                const repoUrl = pr.repository_url.substring(29);
                                const image = repoUrl.includes('processing')?"processing.jpg":repoUrl.includes('joplin')?"joplin.jpg":repoUrl.includes('anitab-org')?"anitab.png":"ztm.png";
                                return `<div class="${pr.state=="open"?"issue-item open-item":"issue-item merged-item"}">
                <i class="${pr.state=="open"?"fas fa-exclamation-circle open-icon":"far fa-check-circle merged-icon"}"></i>
                <div class="content">
                  <div class="content-left">
                  <h6><a href='${GITHUB_URL}${pr.url.substring(28)}'>#${pr.number} : ${pr.title}</a></h6>
                  <small>${
                    new Date(pr.created_at).getDate() +
                    ' ' +
                    months[new Date(pr.created_at).getMonth()] +
                    ',' +
                    new Date(pr.created_at).getFullYear()
                  }</small>
                  </div>
                  <div class="content-right">
                    <img src="./img/projects/${image}" />
                  </div>
                </div>
              </div>`
                })
                            .join('')
                        : `<p>Fetching issues...</p>`
                    }
                    </div>
                    
       </div>

    <div class="pr-box">
        <div class="header">
          <h5>Pull Requests</h5>
          </div>
    <div class="issue-list">
      ${
        r.prs.length > 0
          ? r.prs
              .map(
                (pr) => {
                  const repoUrl = pr.repository_url.substring(29);
                   const image = repoUrl.includes('processing')?"processing.jpg":repoUrl.includes('joplin')?"joplin.jpg":repoUrl.includes('anitab-org')?"anitab.png":"ztm.png";
                  return `<div class="${pr.state=="open"?"issue-item open-item":"issue-item merged-item"}">
                            <div class='icon-wrapper open-icon'>
                                  <img src="${pr.state=="open"?"./img/open-icon.png":"./img/merge-icon.png"}" />
                                </div>
                              <div class="content">
                              <div class="content-left">
                                <h6><a href='${GITHUB_URL}${pr.url.substring(28)}'>#${pr.number} : ${pr.title}</a></h6>
                                <small>${
                                  new Date(pr.created_at).getDate() +
                                  ' ' +
                                  months[new Date(pr.created_at).getMonth()] +
                                  ',' +
                                  new Date(pr.created_at).getFullYear()
                                }</small>
                                </div>
                                <div class="content-right">
                                <img src="./img/projects/${image}" />
                              </div>
                              </div>
                          </div>`
                              })
              .join('')
          : `<p>Fetching pull requests...</p>`
      }
          </div>
       </div>
    </div>`

  // console.log(openSource);
  $('.open-source-list').html(openSource);
}
