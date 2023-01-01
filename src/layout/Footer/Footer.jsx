import img_GitHub from '/assets/images/icons/others/bxl-github.svg'
import img_LinkedIn from '/assets/images/icons/others/bxl-linkedin-square.svg'

import './footer.css'

export const Footer = () => {
  return (
    <footer>
      {/* Footer Contacts */}
      <div className="footerContacts">
        <button className='footerContacts__button githubButton'>
          <a href="https://github.com/AgusCFx" title="GitHub profile" target="_blank">
            <img src={img_GitHub} alt="GitHub" />
          </a>
        </button>
        <button className='footerContacts__button linkedinButton'>
          <a href="https://linkedin.com/in/aguscfx/" title="LinkedIn profile" target="_blank">
            <img src={img_LinkedIn} alt="LinkedIn" />
          </a>
        </button>
      </div>
      {/* Footer Info */}
      <div className="footerInfo">
        <p>Diseñado y desarrollado por</p>
        <p>Agustin Fernandez</p>
      </div>
    </footer>
  )
}