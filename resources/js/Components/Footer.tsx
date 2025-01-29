import React from "react";
import Insti from '/public/icons/logoINSTI 1.png'
import Facebook from '/public/icons/facebook.svg'
import Youtube from '/public/icons/youtube.svg'


const Footer = () => {
  return (
    <footer className="py-4 mt-5 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Logo et Informations */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={Insti}
              alt="Logo"
              className="mb-3"
              style={{ width: "80px" }}
            />
            <p className="mb-0">Lokossa, Agnivedji</p>
            <p>
              <strong>(+229) 22 41 13 66</strong>
            </p>
            <p>"Science et technologie au service de l'homme"</p>
            <a href="mailto:instilokossa@gmail.com" className="text-white">
              <strong>instilokossa@gmail.com</strong>
            </a>
            <div className="mt-3 flex items-center">
              {/* Icône Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-3"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="icon-white"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              {/* Icône YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img
                  src={Youtube}
                  alt="YouTube"
                  className="icon-white"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
            <div className="underline mt-2"></div>
          </div>

          {/* Nos Ressources */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold">NOS RESSOURCES</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  Incubateur de startups
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Unité d'application de l'INSTI
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Plateforme E-learning
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Blog officiel de l'INSTI
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div className="w-full md:w-1/3">
            <h5 className="font-bold">LIENS UTILES</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  Ministère de l'Enseignement Supérieur et de la Recherche
                  Scientifique
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Université Nationale des Sciences, Technologies, Ingénierie et
                  Mathématiques
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Institut National Supérieur de Technologie Industrielle
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">
            © INSTI, UNSTIM 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
