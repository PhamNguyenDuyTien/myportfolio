 import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.jpg'
import IMG6 from '../../assets/img6.jpg'

const data = [
  {
    id : 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id : 2,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id : 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id : 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id : 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id : 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
];

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item_image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item_cta">
                  <a href={github} className='btn' title='github' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' title='demo'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio