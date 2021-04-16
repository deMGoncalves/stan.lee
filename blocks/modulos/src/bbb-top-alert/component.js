define('bbb-top-alert', props =>
  <div>
    <div
      style={`background: ${props.self.backgroundColor};`}>
      <div className='bbb__topalert'
        style={`background-image: url(${props.self.backgroundImage})`}>
        <ButtonList {...props} dataCollect='internal-banner-link' />
      </div>
    </div>
    <div
      style={`background: ${props.self.backgroundColor};`}>
      <div className='bbb__topalert--mob'
        style={`background-image: url(${props.self.backgroundImageMob})`}>
        <ButtonList {...props} dataCollect='internal-banner-link' />
      </div>
    </div>
  </div>

)
