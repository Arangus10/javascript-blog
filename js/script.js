'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
        
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
    
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
            
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
    
  const articleSelector = clickedElement.getAttribute('href');
    
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    
  const targetArticle = document.querySelector(articleSelector);
    
  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

/* part.2 - function generateTitleLinks */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */    
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
    
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
    
  let html = '';
    
  for (let article of articles) {
        
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
                
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into html variable */
    html = html + linkHTML;
    console.log(html);                
  }
    
  titleList.innerHTML = html;
    
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


