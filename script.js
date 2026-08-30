const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

if (toggleButton && navbarLinks) {
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
}

/*
 * Archived-site notice.
 * This website is no longer maintained or in official use by the church.
 * Church leadership has since changed and this site is kept online only as
 * an archive of the original build. Shown on every page via one banner.
 */
;(function showArchivedNotice() {
  const banner = document.createElement('div')
  banner.setAttribute('role', 'note')
  banner.style.cssText = [
    'background:#b45309',
    'color:#fff',
    'font-family:Arial, Helvetica, sans-serif',
    'font-size:14px',
    'line-height:1.4',
    'text-align:center',
    'padding:10px 44px 10px 16px',
    'position:relative',
    'z-index:9999'
  ].join(';')
  banner.innerHTML =
    '<strong>Archived site &mdash; no longer in use.</strong> ' +
    'This is a historical copy of the Thaba Nchu SDA Church website and is ' +
    'not maintained. Details, leadership and contact information may be out of date.'

  const closeBtn = document.createElement('button')
  closeBtn.type = 'button'
  closeBtn.setAttribute('aria-label', 'Dismiss notice')
  closeBtn.textContent = '×'
  closeBtn.style.cssText = [
    'position:absolute',
    'top:50%',
    'right:12px',
    'transform:translateY(-50%)',
    'background:transparent',
    'border:0',
    'color:#fff',
    'font-size:20px',
    'line-height:1',
    'cursor:pointer'
  ].join(';')
  closeBtn.addEventListener('click', () => banner.remove())
  banner.appendChild(closeBtn)

  document.body.insertBefore(banner, document.body.firstChild)
})()
