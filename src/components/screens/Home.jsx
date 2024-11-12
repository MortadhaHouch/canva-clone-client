/* eslint-disable react/no-unknown-property */
import Spline from '@splinetool/react-spline';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
export default function Home() {
  const theme = useContext(ThemeContext)
  return (
    <main
      style={{
        backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
      }}
      className="w-100 min-vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 main-page">
      <section>
        <Spline
          className='w-100 h-100'
          scene="https://prod.spline.design/ctdPxCeWvwjIOu7n/scene.splinecode" 
        />
        <div className='d-flex flex-column justify-content-center align-items-center position-absolute welcome-text'>
          <h3>{document.title.toUpperCase()}</h3>
          <p className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>
            Unleash your creativity with our easy-to-use drawing and graphic design app! From stunning illustrations to professional layouts, our powerful tools make design a breeze. Start creating today—sign up now!
          </p>
            <button className="cssbuttons-io-button">
            Get started
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </section>
      <section>
        <div className='d-flex flex-column justify-content-center align-items-center position-absolute welcome-text'>
          <h3></h3>
          <p className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>Our web app offers a wide range of tools to help you create stunning designs with ease. Whether you’re sketching out ideas, creating vector illustrations, or designing intricate layouts, we’ve got you covered. Enjoy an intuitive interface that lets you focus on your creativity, not the tools.</p>
        </div>
        <Spline scene="https://prod.spline.design/qiWGVEbidcwZrtfY/scene.splinecode" />
      </section>
      <section>
        <div className='d-flex flex-column justify-content-center align-items-center position-absolute welcome-text'>
          <h3></h3>
          <p className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>With features like customizable brushes, vector editing, layer management, and drag-and-drop elements, your design possibilities are endless. Plus, collaborate with teammates in real time and access your work from anywhere. Design like a pro with ease—start today!</p>
        </div>
        <Spline scene="https://prod.spline.design/OCzDFC6YBVeuF8Ww/scene.splinecode" />
      </section>
      <section>
        <div className='d-flex flex-column justify-content-center align-items-center position-absolute welcome-text'>
          <h3>What are you waiting for</h3>
          <p className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>Design like a pro with ease! Start creating stunning designs today and take your creativity to the next level.</p>
          <button className='btn btn-primary'>Get started</button>
        </div>
      </section>
    </main>
  )
}
