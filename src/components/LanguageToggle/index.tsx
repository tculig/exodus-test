import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ReactComponent as USAFlag } from '../../images/USA-flag.svg';
import { ReactComponent as SpainFlag } from '../../images/spain-flag.svg';

const LanguageSwitcher: React.FC = () => {
    const { languages, changeLanguage, language } = useI18next();

    return (
        <div style={{ marginRight: "12px", display: "flex" }}>
            {languages.map((lng) => (
                <div
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    style={{
                        margin: "0 10px",
                        opacity: language === lng ? "1" : "0.6",
                        display: "inline-block"
                    }}
                >
                    {lng === 'en' ? <USAFlag width="30px" /> : <SpainFlag width="30px" />}
                </div>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
