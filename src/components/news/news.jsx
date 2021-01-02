import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './news.css'

export class News extends Component {

  componentDidMount(){
    let apiKey = '4e016d415a11418d81892362337c0730';
    function getNews(){
      const imgPlug = "https://techcrunch.com/wp-content/uploads/2019/01/GettyImages-958125096.jpg?w=600"
      fetch(`https://newsapi.org/v2/everything?q=auto industry&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.articles.forEach(article => {
          const block = document.createElement('div');
          const img = document.createElement('img')
          const link = document.createElement('a')
          const title = document.createElement('span');
          const desc = document.createElement('p');

          img.setAttribute('src', article.urlToImage ? article.urlToImage : imgPlug)
          link.setAttribute('href', article.url)
          link.setAttribute('target', 'blank')
          title.append(article.title);
          desc.append(article.description)

          block.classList.add('news-item');
          img.classList.add('news-item-img');
          link.classList.add('news-item-link');
          title.classList.add('news-item-title');
          desc.classList.add('news-item-desc')

          link.append(title);
          link.append(desc);
          block.append(img);
          block.append(link)

          document.querySelector('.news-block').append(block)
        })
        
      })
    }

    getNews()
  }
  render(){
    return(
      <div>
        <header>
          <AppBar position="static" className="MY CLASS">
            <Toolbar className="nav">
              <div className="nav-elems">
                <Link to='/' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">Head</Button>
                </Link>
                <Link to='/news' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">News</Button>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <h1 className="news-head">Cars industry news</h1>
          <div className="news-block">

          </div>
        </main>
      </div>
    )
  }
}