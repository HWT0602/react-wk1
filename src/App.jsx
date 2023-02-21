import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App()
{
    const [count, setCount] = useState(0)

    return(
        <div>
            <header className="header">
    <div className="container d-flex flex-column align-items-center">
      <img classNameName="header__avatar" src="./images/avatar.png" alt="avatar" />
      <h1 className="header__title">Name</h1>
      <hr className="divider--light"/>
      <p className="header__slogan">Slogan</p>
    </div>
  </header>

  <article className="image__layout py-3 py-sm-5">
    <div className="container">
      <h1 className="text-center">IMAGES</h1>
      <hr className="divider--dark"/>
      <div className="row">
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img1.jpg" alt="" className="image__style" />
          </a>
          <p className="image_title">Place 1</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img2.jpg" alt="" className="image__style" />
          </a>
          <p className="image_title">Place 2</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img3.jpg" alt="" className="image__style" />
          </a>
          <p className="image_title">Place 3</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img4.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 4</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img5.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 5</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img6.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 6</p>
        </div>                
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img7.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 7</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img8.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 8</p>
        </div>   
      </div>
    </div>
  </article>

  <article className="description__layout py-4 py-sm-5">
    <div className="container d-flex flex-column align-items-center">
      <h1>DESCRIPTIONS</h1>
      <hr className="divider--light"/>
      <p className="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
        ullam
        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
        quod
        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
        tempora.
        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
    </div>
  </article>

  <footer className="footer">
    <div className="footer__above py-5">
      <div className="container">
        <div className="row my-3">
          <h5 className="footer__description col-lg-8">
            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
          </h5>
          <ul className="footer__list col-lg-4">
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer__below">
      <div className="container">
        <h6>
          &copy; Copyright All rights reserved.
        </h6>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default App
