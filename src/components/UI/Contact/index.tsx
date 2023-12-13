import React from 'react'
import "./style.css"

function index() {
  return (
    <div className="wrapper">
  {/* header */}
  <div className="header-container">
    <div className="header">WeCraft</div>
  </div>
  {/* nav */}
  <div className="nav-container">
    <div className="nav-left">
      <div className="services nav-item">
        <div className="services nav-item">
          <div className="card-container">
            <div className="shapes-container">
              <div className="shapes">
                <div id="square" />
                <div id="circle" />
                <div id="triangle" />
              </div>
            </div>
            <div className="card">
              <div className="card-title">WeCraft</div>
              <div className="card-logo">
                {/* <ion-icon name="logo-codepen" /> */}
              </div>
              <div className="card-icon">
                {/* <ion-icon name="arrow-down-sharp" /> */}
              </div>
              <div className="preview-text">See our services</div>
              <div className="text-wrapper">
                We are passionate about Web Design. We are passionate about Web
                Design. We are passionate about Web Design. We are passionate
                about Web Design. We are passionate about Web Design. We are
                passionate about Web Design. We are passionate about Web Design.
                We are passionate about Web Design. We are passionate about Web
                Design. We are passionate about Web Design. We are passionate
                about Web Design. We are passionate about Web Design. We are
                passionate about Web Design. We are passionate about Web Design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-right">
      <div className="nav-top">
        <div className="work nav-item">
          <div className="card-container">
            <div className="card">
              <div className="card-icon">
                {/* <ion-icon name="code-working-sharp" /> */}
              </div>
              <div className="preview-text">Work</div>
              <div className="text-wrapper">
                View our showcase. View our showcase. View our showcase. View
                our showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase. View our
                showcase. View our showcase. View our showcase.
              </div>
            </div>
          </div>
        </div>
        <div className="about nav-item">
          <div className="card-container">
            <div className="card">
              <div className="card-icon">
                {/* <ion-icon name="business-sharp" /> */}
              </div>
              <div className="preview-text light">About us</div>
              <div className="text-wrapper light">
                Learn more about us. Learn more about us. Learn more about us.
                Learn more about us. Learn more about us. Learn more about us.
                Learn more about us. Learn more about us. Learn more about us.
                Learn more about us. Learn more about us. Learn more about us.
                Learn more about us. Learn more about us. Learn more about us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="contact nav-item">
          <div className="contact nav-item">
            <div className="card-container">
              <div className="card">
                <div className="card-icon">
                  {/* <ion-icon name="send-sharp" /> */}
                </div>
                <div className="preview-text">Contact us</div>
                <div className="text-wrapper">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos eveniet fugiat distinctio placeat tenetur provident officia praesentium excepturi! Magni rem cum ducimus iure maiores accusamus nobis sed nihil, laboriosam adipisci.
                Architecto, amet harum veniam at ut a nobis tempora voluptatibus quam optio modi perspiciatis corporis dolore impedit nihil, beatae tenetur? Et quod quaerat saepe, tenetur eligendi eum? Nobis, at iste.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default index