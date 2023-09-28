const content = document.querySelector('.content');
const homeButton = document.querySelector('.home');
const expButton = document.querySelector('.experience');
const resumeButton = document.querySelector('.resume');
const blogButton = document.querySelector('.blog');
let blogContent;
let blogArray = [];
let projects = [{
    name: 'CV Project',
    description: 'Created using React. Utilized props, states, and a complex file hierarchy',
    repositoryLink: 'https://github.com/ZhaoSongZh7/CV-Project',
    imageLink: 'assets/cv_project_image.png'
}, {
    name: 'To-Do List',
    description: 'Created using Vanilla JS. It includes a comprehensive project and todo list system, where users can add their own todos.',
    repositoryLink: 'https://github.com/ZhaoSongZh7/To-Do-List',
    imageLink: ''  
}, {
    name: 'To-Do List',
    description: 'Created using Vanilla JS. It includes a comprehensive project and todo list system, where users can add their own todos.',
    repositoryLink: 'https://github.com/ZhaoSongZh7/To-Do-List',
    imageLink: '' 
}, {
    name: 'To-Do List',
    description: 'Created using Vanilla JS. It includes a comprehensive project and todo list system, where users can add their own todos.',
    repositoryLink: 'https://github.com/ZhaoSongZh7/To-Do-List',
    imageLink: '' 
}];

let currentSlide;

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    const homeContent = document.createElement('div');
    const titleName = document.createElement('div');
    const softwareEngineerText = document.createElement('div');
    const checkOutForMoreText = document.createElement('div');
    homeContent.classList.add('home-content', 'hidden');
    titleName.classList.add('title-name', 'hidden', 'home-delay');
    softwareEngineerText.classList.add('hidden', 'software-engineer', 'home-delay');
    checkOutForMoreText.classList.add('home-delay', 'hidden', 'check-out-for-more');
    titleName.textContent = 'Hello! My name is Zhao Song Zhou.';
    softwareEngineerText.textContent = 'I\'m an aspiring software engineer.';
    checkOutForMoreText.textContent = 'Check out my other information!';
    content.appendChild(homeContent);
    homeContent.appendChild(titleName);
    homeContent.appendChild(softwareEngineerText);
    homeContent.appendChild(checkOutForMoreText);
    setTimeout(() => {
        homeContent.classList.add('show');
        titleName.classList.add('show');
        softwareEngineerText.classList.add('show');
        checkOutForMoreText.classList.add('show');
    }, 100);
});

expButton.addEventListener('click', () => {
    content.innerHTML = '';
    const experienceContent = document.createElement('div');
    experienceContent.classList.add('experience-content', 'hidden');
    for (let i = 0; i < projects.length; i++) {
        const projectLink = document.createElement('a');
        const projectContainer = document.createElement('div');
        const projectDescription = document.createElement('div'); 
        const projectImage = document.createElement('img');
        const projectTitle = document.createElement('div');
        projectLink.classList.add('project-link', 'hidden');
        projectContainer.classList.add('project-container', 'hidden');
        projectDescription.classList.add('project-description', 'hidden');
        projectTitle.classList.add('project-title', 'hidden');
        projectImage.classList.add('project-image', 'hidden');
        projectLink.href = projects[i].repositoryLink;
        projectImage.style.filter = 'blur(3px)';
        projectDescription.style.opacity = 0;
        projectTitle.textContent = projects[i].name;
        projectDescription.textContent = projects[i].description;
        if (projects[i].imageLink != '') {
            projectImage.src = projects[i].imageLink;
        }
        projectLink.appendChild(projectContainer);
        projectContainer.appendChild(projectDescription);
        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(projectImage);
        experienceContent.appendChild(projectLink);

        projectContainer.addEventListener('mouseover', () => {
            projectImage.style.filter = 'blur(5px)';
            projectTitle.style.bottom = '75%';
            projectDescription.style.bottom = '50%';
            projectDescription.style.opacity = 1;
            // projectTitle.style.opacity = 0;
        });

        projectContainer.addEventListener('mouseleave', () => {
            projectImage.style.filter = 'blur(1px)';
            projectTitle.style.bottom = '50%';
            projectDescription.style.bottom = '40%';
            projectTitle.style.opacity = 1;
            projectDescription.style.opacity = 0;
        });

        setTimeout(() => {
            projectLink.classList.add('show');
            projectContainer.classList.add('show'); 
            projectDescription.classList.add('show');
            projectTitle.classList.add('show');
            projectImage.classList.add('show');
        }, 100);
    };
    content.appendChild(experienceContent);
    setTimeout(() => {
        experienceContent.classList.add('show');
    }, 100);
});

resumeButton.addEventListener('click', () => {
    content.innerHTML = '';
    const resumeContent = document.createElement('div');
    resumeContent.classList.add('resume-content', 'hidden');
    resumeContent.textContent = 'TBA 2';
    content.appendChild(resumeContent);
    setTimeout(() => {
        resumeContent.classList.add('show');
    }, 100);
    // expContent.style.opacity = 0;
    // resumeContent.style.opacity = 1;
    // blogContent.style.opacity = 0;
});

blogButton.addEventListener('click', () => {
    content.innerHTML = '';
    blogArray = [];
    currentSlide = 0;
    blogContent = document.createElement('div');

    // const blogTracker = document.createElement('div');
    // const blogInput = document.createElement('input');
    // const numberOfBlogs = document.createElement('div');
    // blogTracker.classList.add('blog-tracker', 'hidden');
    // blogInput.classList.add('blog-input', 'hidden');
    // numberOfBlogs.classList.add('number-of-blogs', 'hidden');
    // blogInput.defaultValue = 1;

    blogContent.classList.add('blog-content', 'hidden');

    // Blog Creation
    createBlogMessage(blogContent, 'Blog #1', '9/5/23', 'This is my first blog post. I\'m so excited to post my experiences here for everyone to see! I can\'t wait for what\'s to come. I\'m currently working on this portfolio website.', blogArray, 'https://media.discordapp.net/attachments/719569914645577871/1148655948051783680/image.png?width=977&height=605');
    createBlogMessage(blogContent, 'Test', '9/31/23', 'hello', blogArray);
    createBlogMessage(blogContent, 'Test', '9/31/23', 'helerelo', blogArray);
    createBlogMessage(blogContent, 'Test', '9/31/23', 'e', blogArray);
    createBlogMessage(blogContent, 'Test', '9/31/23', 'edasdsa', blogArray);

    content.appendChild(blogContent);
    
    blogContent.innerHTML = '';
    createBlogTracker(blogContent, currentSlide)
    
    // blogTracker.appendChild(blogInput);
    // blogTracker.appendChild(numberOfBlogs);
    // content.appendChild(blogTracker);

    blogContent.appendChild(blogArray[currentSlide]);

    setTimeout(() => {
        blogContent.classList.add('show');
    }, 100);
    // observe();

});

function createBlogMessage(content, title, date, description, blogArray, url="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=") {
    const blogMessage = document.createElement('div');
    const blogHeading = document.createElement('div');
    const blogTitle = document.createElement('div');
    const blogDate = document.createElement('div');
    const blogDescription = document.createElement('div');
    const blogImage = document.createElement('img');

    const slideButtons = document.createElement('div');
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');

    slideButtons.classList.add('slide-buttons', 'hidden');
    nextButton.classList.add('next-button', 'hidden');
    prevButton.classList.add('prev-button', 'hidden');
    nextButton.textContent = '→';
    prevButton.textContent = '←';
    slideButtons.appendChild(prevButton);
    slideButtons.appendChild(nextButton);
    blogMessage.appendChild(slideButtons);

    // Creating Base Blog Message
    blogMessage.classList.add('blog-message', 'hidden');
    blogHeading.classList.add('blog-heading', 'hidden');
    blogTitle.classList.add('blog-title', 'hidden');
    blogDate.classList.add('blog-date', 'hidden');
    blogDescription.classList.add('blog-description', 'hidden');
    blogImage.classList.add('blog-image', 'hidden');
    blogTitle.textContent = title;
    blogDate.textContent = date;
    blogDescription.textContent = description;
    blogImage.src = url;
    content.appendChild(blogMessage);
    blogMessage.appendChild(blogHeading);
    blogHeading.appendChild(blogTitle);
    blogHeading.appendChild(blogDate);
    blogMessage.appendChild(blogDescription);
    blogMessage.appendChild(blogImage);

    // Appending Blog Tracker
    // blogTracker.appendChild(blogInput);
    // blogTracker.appendChild(numberOfBlogs);
    // blogMessage.appendChild(blogTracker);

    nextButton.addEventListener('click', () => {
        currentSlide += 1;
        content.innerHTML = '';
        if (currentSlide >= blogArray.length) {
            currentSlide = 0;
        } 
        createBlogTracker(blogContent, currentSlide)
        content.appendChild(blogArray[currentSlide]);
    });

    prevButton.addEventListener('click', () => {
        currentSlide -= 1;
        content.innerHTML = '';
        if (currentSlide < 0) {
            currentSlide = blogArray.length - 1;
        }
        createBlogTracker(blogContent, currentSlide)
        content.appendChild(blogArray[currentSlide]);
    })

    blogArray.push(blogMessage);

    setTimeout(() => {
        slideButtons.classList.add('show');
        nextButton.classList.add('show');
        prevButton.classList.add('show');
        blogMessage.classList.add('show');
        blogHeading.classList.add('show');
        blogTitle.classList.add('show');
        blogDate.classList.add('show');
        blogDescription.classList.add('show');
        blogImage.classList.add('show');
    }, 100);
    // observe();
}

function createBlogTracker(blogContent, currentSlide) {
    const blogTracker = document.createElement('div');
    const blogInput = document.createElement('div');
    const numberOfBlogs = document.createElement('div');
    blogTracker.classList.add('blog-tracker');
    blogInput.classList.add('blog-input');
    numberOfBlogs.classList.add('number-of-blogs');
    blogInput.textContent = currentSlide + 1;
    updateNumberOfBlogs(numberOfBlogs);

    blogTracker.appendChild(blogInput);
    blogTracker.appendChild(numberOfBlogs);
    blogContent.appendChild(blogTracker);
}

function updateNumberOfBlogs(numberOfBlogs) {
    numberOfBlogs.textContent = ` of ${blogArray.length}`;
}

function observe() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el));
}

observe();