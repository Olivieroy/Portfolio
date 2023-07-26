import React, { useState, useEffect } from "react";
import chroma from "chroma-js";
import "../assets/sass/layouts/_colorchecker.scss";

function TesteurContraste() {
  const [textColor, setTextColor] = useState("#79E4E4");
  const [backgroundColor, setBackgroundColor] = useState("#05081A");
  const [contrastResult, setContrastResult] = useState(null);
  const [apcaActivated, setApcaActivated] = useState(true);
  const [isApcaChecked, setIsApcaChecked] = useState(apcaActivated);

  useEffect(() => {
    calculateContrast();
  }, [textColor, backgroundColor, apcaActivated]);

  const calculateContrast = () => {
    const contrast = chroma.contrast(textColor, backgroundColor);
    setContrastResult(contrast.toFixed(2));
  };

  const getResultClass = () => {
    if (contrastResult === null) {
      return "result fail";
    } else {
      if (apcaActivated) {
        // Utiliser la norme APCA
        return contrastResult >= 6.5 ? "result pass" : "result fail";
      } else {
        // Utiliser les normes WCAG AA et WCAG AAA fusionnées
        if (contrastResult >= 7) {
          return "result pass";
        } else if (contrastResult >= 4.5) {
          return "result pass";
        } else {
          return "result fail";
        }
      }
    }
  };

  const getContrastStatus = () => {
    if (contrastResult === null) {
      return "Aucun contraste calculé";
    } else {
      if (apcaActivated) {
        // Utiliser la norme APCA
        return contrastResult >= 6.5 ? "APCA valide" : "APCA non valide";
      } else {
        // Utiliser les normes WCAG AA et WCAG AAA fusionnées
        if (contrastResult >= 7) {
          return "AAA valide";
        } else if (contrastResult >= 4.5) {
          return "AA valide";
        } else {
          return "AA et AAA non valides";
        }
      }
    }
  };

  const getContrastIcon = () => {
    if (contrastResult === null) {
      return null;
    } else {
      if (apcaActivated) {
        // Utiliser la norme APCA
        return contrastResult >= 6.5 ? (
          <span className="material-icons-round text-awesome">verified</span>
        ) : (
          <span className="material-icons-round text-fail">cancel</span>
        );
      } else {
        // Utiliser les normes WCAG AA et WCAG AAA fusionnées
        if (contrastResult >= 7) {
          return (
            <>
              <span
                className="material-icons-round text-awesome"
                aria-hidden="true"
              >
                verified
              </span>
              <span className="material-icons-round text-awesome">
                verified
              </span>
            </>
          );
        } else if (contrastResult >= 4.5) {
          return (
            <span
              className="material-icons-round text-success"
              aria-hidden="true"
            >
              check_circle
            </span>
          );
        } else {
          return (
            <>
              <span className="material-icons-round text-fail" aria-hidden='true'>cancel</span>
            </>
          );
        }
      }
    }
  };

  const handleApcaSwitchChange = () => {
    setIsApcaChecked(!isApcaChecked);
    setApcaActivated(!isApcaChecked);
  };

  return (
    <div className={`checkcontrast ${isApcaChecked ? "apca-checked" : ""}`}>
      <div className="apca">
        <div className="apca-pills">
          <label htmlFor="apcaSwitch" className="aa-element">
            AA et AAA
          </label>
          <label htmlFor="apcaSwitch" className="apca-element">
            APCA{" "}
          </label>
        </div>

        <input
          className="apca-switch"
          type="checkbox"
          id="apcaSwitch"
          checked={isApcaChecked}
          onChange={handleApcaSwitchChange}
        />
      </div>
      <span
        className="checkcontrast-text"
        style={{ color: textColor, backgroundColor: backgroundColor }}
      >
        Lorem ipsum dolor sit amet
      </span>
      <p className="checkcontrast-info">
        Contraste : <span className={getResultClass()}>{contrastResult}</span>{" "}
        {getContrastIcon()}
      </p>

      <div>
        <p>{getContrastStatus()}</p>
      </div>
      <div className="container">
        <div className="container-input">
          <label htmlFor="text-color">Couleur du texte :</label>
          <input
            type="color"
            id="text-color"
            className="color-input"
            style={{ backgroundColor: textColor }}
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <label htmlFor="text-color">{textColor}</label>
        </div>
        <div className="container-input">
          <label htmlFor="background-color">Couleur de fond :</label>
          <input
            type="color"
            id="background-color"
            className="color-input"
            style={{ backgroundColor: backgroundColor }}
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <label htmlFor="background-color">{backgroundColor}</label>
        </div>
      </div>
    </div>
  );
}

export default TesteurContraste;
