import { useState } from 'react'
import { profile } from '../data/portfolioData'

export default function ProfileImage({ className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`photo-wrap ${className}`}>
      <div className="photo-frame">
        {failed ? (
          <div className="photo-fallback" aria-label="Profile placeholder">
            R
          </div>
        ) : (
          <img
            src={profile.photo}
            alt="Portrait of Rudra"
            loading="eager"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}