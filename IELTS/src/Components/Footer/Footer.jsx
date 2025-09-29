import './Footer.css'
function Footer() {
  return (
    <>
    <div className="footer">
        <p> © {new Date().getFullYear()} IELTS Mastery. All rights reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    </>
  )
}

export default Footer;