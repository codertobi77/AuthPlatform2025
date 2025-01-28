import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'; // Assurez-vous que le chemin est correct
import React from 'react';
import Left from '/public/icons/logoINSTI 1.png'
import Circle from '/public/icons/info-circle-fill.svg'
import Snow from '/public/icons/snow3.svg'
import Person from '/public/icons/person-fill.svg'
import Right from '/public/icons/0 2.png'

export default function Navbar() {
    // const [isOpen, setIsOpen] = useState(false); // Pour gérer l'ouverture du menu

    return (
        <div>
            {/* Header */}
            <header style={{ height: '73px', backgroundColor: '#0D4293', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px', boxSizing: 'border-box' }}>
                {/* Logo gauche */}
                <div className="logo-container1" style={{ height: '73px', width: '73px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px', marginRight: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
                    <img src={Left} alt="Logo gauche" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                </div>

                {/* Texte */}
                <div className="text-container" style={{ flexGrow: 1 }}>
                    <h1 className='text-white' style={{ fontSize: '1.2rem', margin: 0 }}>INSTI</h1>
                    <p className='text-white' style={{ fontSize: '0.7rem', margin: 0, marginTop: '5px' }}>
                        Institut National Supérieur de Technologie Industrielle <br /> de Lokossa
                    </p>
                </div>

                {/* Liens */}
                <div className="links" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '0.9rem', color: 'white', margin: '0 10px' }}>
                        <img src={Circle} alt="Info" className="icon-white me-1" style={{ width: '20px', height: '20px' }} /> Accès rapide
                    </a>
                    <span className="text-white">|</span>
                    <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '0.9rem', color: 'white', margin: '0 10px' }}>
                        <img src={Snow} alt="Observatoire" className="icon-white me-1" style={{ width: '20px', height: '20px' }} /> Observatoire
                    </a>
                    <span className="text-white">|</span>
                    <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '0.9rem', color: 'white', margin: '0 10px' }}>
                        <img src={Person} alt="Person" className="icon-white me-1" style={{ width: '20px', height: '20px' }} /> Nous écrire
                    </a>
                </div>

                {/* Logo droit */}
                <div className="logo-container1" style={{ height: '73px', width: '73px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
                    <img src={Right} alt="Logo droite" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                </div>
            </header>
        </div>
    );
}
