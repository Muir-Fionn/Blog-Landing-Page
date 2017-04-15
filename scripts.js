//-- Variables and functions for resizing the blog window --//
var blogWindow = {
  blog: document.querySelector('.blog'),
  about: document.querySelector('.about'),
  preview: document.querySelector('.blogPreview'),

  previewSize: () => {
    var size = blogWindow.getCurrentSize();

    if(size.blogWidth >= 768) {
      blogWindow.blog.style.paddingRight = '50px';

      blogWindow.about.style.position = 'fixed';
      blogWindow.about.style.width = '400px';

      blogWindow.preview.style.width = (size.blogWidth - 400 - size.blogPadding) + 'px';
      blogWindow.preview.style.left = '400px';
      blogWindow.preview.style.top = 'auto';
    }else {
      blogWindow.blog.style.paddingRight= '0';

      blogWindow.about.style.position = 'relative';
      blogWindow.about.style.width = '100%';

      blogWindow.preview.style.width = '100%';
      blogWindow.preview.style.left = 'auto';
      blogWindow.preview.style.top = size.aboutHeight + 'px';
    }
  },

  getCurrentSize: () => {
    var blogWidth = window.getComputedStyle(blogWindow.blog, null).width;
    var blogPadding = window.getComputedStyle(blogWindow.blog, null).paddingRight;
    var aboutHeight = window.getComputedStyle(blogWindow.about, null).height;

    blogWidth = eval(blogWidth.slice(0,-2));
    blogPadding = eval(blogPadding.slice(0,-2));
    aboutHeight = eval(aboutHeight.slice(0,-2));

    return {blogWidth, blogPadding, aboutHeight};
  }
}

//-- Variables and functions for adding Click Events --//
var clickEvents = {
  body: document.querySelector('body'),
  menu: document.querySelector('.menu'),
  footer: document.querySelector('footer'),
  blog: document.querySelector('.blog'),
  about: document.querySelector('.about'),
  preview: document.querySelector('.blogPreview'),
  toggle: document.querySelector('.menuToggle'),

  addClickEvents: () => {
    clickEvents.menu.addEventListener('click', function() {
      clickEvents.menu.classList.add('menu-open');
      clickEvents.footer.classList.add('menu-open');
      clickEvents.preview.classList.add('menu-open');
      clickEvents.about.classList.add('menu-open');
      clickEvents.toggle.classList.add('menu-open');
    });

    clickEvents.blog.addEventListener('click', function() {
      clickEvents.menu.classList.remove('menu-open');
      clickEvents.footer.classList.remove('menu-open');
      clickEvents.preview.classList.remove('menu-open');
      clickEvents.about.classList.remove('menu-open');
      clickEvents.toggle.classList.remove('menu-open');
    });

    clickEvents.toggle.addEventListener('click', function() {
      clickEvents.menu.classList.toggle('menu-open');
      clickEvents.footer.classList.toggle('menu-open');
      clickEvents.preview.classList.toggle('menu-open');
      clickEvents.about.classList.toggle('menu-open');
      clickEvents.toggle.classList.toggle('menu-open');
    });
  }
}

//-- Variables and functions for resizing the menu --//
var menu = {
  body: document.querySelector('body'),
  menu: document.querySelector('.menu'),
  footer: document.querySelector('footer'),
  toggle: document.querySelector('.menuToggle'),

  sizeMenu: function() {
    var width = window.getComputedStyle(this.body, null).width;
    width = eval(width.slice(0,-2));

    if(width < 768) {
      this.menu.style.right = '-260px';
      this.footer.style.right = '-260px';
      this.toggle.style.position = 'absolute';
    }else {
      this.menu.style.right = '-220px';
      this.footer.style.right = '-220px';
      this.toggle.style.position = 'fixed';
    }
  }
}

//-- Variables and functions for filling the blog entries --//
var blog = {
  buildEntries: function() {
    var length = this.blogEntries.length;
    var parent = document.querySelector('.blogPreview');

    for(var i=0; i < length; i++){
      var post = this.makeEntry(this.blogEntries[i]);
      parent.appendChild(post);
    }
  },

  makeEntry: function(obj) {
    var post = makeElement('div', 'postPreview', null);
    var title = makeElement('h2', 'title', obj.title);
    var p = makeElement('p', 'text', obj.text);
    var attr = makeElement('div', 'attribution', null);
    var date = makeElement('a', 'date', obj.date);
    var author = makeElement('a', 'author', obj.author);
    var text = document.createTextNode(' By ');

    appendChildren(attr, date, text, author);
    appendChildren(post, title, p, attr);

    return post;
  },

  blogEntries: [
    {
      title: "The Traveller's Dilemma",
      date: '14 April 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'The Reasons Why We Love Travel',
      date: '7 April 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: '7 Difficult Things About Travel',
      date: '31 March 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'The Modern Rules Of Travel',
      date: '24 March 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'The History Of Adventure',
      date: '17 March 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Out of the Office',
      date: '10 March 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Forks in the Road',
      date: '3 March 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Hiking the Himalayas',
      date: '24 February 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'The Adventure begins',
      date: '17 February 2017',
      author: 'Joe Schmoe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}

/*
  @param type: type of html element to build
  @param style: class to apply to the Elementary, if any
  @param text: text to be contained by element
  @return HTML DOM element
*/
function makeElement(type, style, text) {
  var el = document.createElement(type);

  if(style) {
    el.classList.add(style);
  }

  if(text) {
    var text = document.createTextNode(text);
    el.appendChild(text);
  }

  return el;
}

/*
  @param parent: desired parent element for provided children
  @args: elements to be appended to parent
*/
function appendChildren(parent) {
  var children = Array.prototype.slice.call(arguments, 1);

  children.forEach(function(el) {
    parent.appendChild(el);
  })
}

function resize() {
  blogWindow.previewSize();
  menu.sizeMenu();
}

//--- Page Build ---//
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    blog.buildEntries();
    blogWindow.previewSize();
    menu.sizeMenu();
    clickEvents.addClickEvents();
  }
};

//--- Adjust preview width on window resize ---//
window.onresize = resize;
