import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/Fellype.jpg'

 const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="Foto de Perfil Fellype Oliveira" />
            <div className="profile-title">Fellype Oliveira</div>
            
            <div className="profile-description">
            Realizei o curso Técnico em Desenvolvimento de Sistemas pela ETEC Sapopemba e atualmente faço o curso PROPROFISSÃO, que é uma formação focada no Desenvolvimento Full Stack, disponibilizado pelo do Instituto PROA e Senac. Além disso, faço Graduação em Administração pela PUC-SP.
            </div>

            <div className="profile-button"><a href="https://mapadecarreira-fellype.vercel.app">Sobre mim</a></div>
        </div>
    </div>
  )
}

export default UserProfileCard
