// https://web.dev/patterns/theming/theme-switch#css

import React from 'react';
import styled, { css } from 'styled-components';


interface ThemeToggleProps {
  toggleTheme: (a: any) => void;
  theme: 'light' | 'dark';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {

  return (
    <ToggleContainer onClick={toggleTheme} $theme={theme} className="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
      <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.button<{ $theme: "light" | "dark" }>`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  opacity: 0.9;
  stroke-linecap: round;
   transition: opacity 0.5s ease!important;
  --icon-fill-dark: #8FAADC; /* Default icon color */
  --icon-fill-light: #FFD700; /* Default icon color */
  --icon-fill-hover: #fff; /* Icon color on hover */
  --ease-elastic-3: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Moderate elasticity */
  --ease-elastic-4: cubic-bezier(0.76, -0.76, 0.3, 1.65); /* Higher elasticity */
  --ease-3: cubic-bezier(0.25, 0.1, 0.25, 1); /* Standard ease (ease-in-out) */
  --ease-out-5: cubic-bezier(0.33, 1, 0.68, 1); /* Smooth ease-out */
    &:hover {
        opacity: 1;
       
    }
.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center;
}

.sun-and-moon > :is(.moon, .sun) {
    fill:${({ $theme }) => ($theme === 'dark' ? 'var(--icon-fill-dark)' : 'var(--icon-fill-light)')}; 
}



.sun-and-moon > .sun-beams {
    stroke: ${({ $theme }) => ($theme === 'dark' ? 'var(--icon-fill-dark)' : 'var(--icon-fill-light)')}; 
    stroke-width: 2px;
}



.sun-and-moon > .sun {
  ${({ $theme }) =>
    `${$theme === "dark" && css`
              transform: scale(1.75);
    `}`} 
}

.sun-and-moon > .sun-beams {
   ${({ $theme }) =>
    `${$theme === "dark" && css`
           opacity: 0;
    `}`} 
}

.sun-and-moon > .moon > circle {
   ${({ $theme }) =>
    `${$theme === "dark" && css`
            transform: translateX(-7px);
    `}`} 
}

@supports (cx: 1) {
 .sun-and-moon > .moon > circle {
   ${({ $theme }) =>
    `${$theme === "dark" && css`
          cx: 17;
          transform: translateX(0);
    `}`} 
  }
}

@media (prefers-reduced-motion: no-preference) {
  .sun-and-moon > .sun {
    transition: transform .5s var(--ease-elastic-3), fill .3s var(--ease-3);
  }

  .sun-and-moon > .sun-beams {
    transition: transform .5s var(--ease-elastic-4), opacity .5s var(--ease-3), stroke .3s var(--ease-3);
  }

  .sun-and-moon .moon > circle {
    transition: transform .25s var(--ease-out-5);
  }

  @supports (cx: 1) {
    .sun-and-moon .moon > circle {
      transition: cx .25s var(--ease-out-5);
    }
  }

  .sun-and-moon > .sun {
    ${({ $theme }) =>
    `${$theme === "dark" && css`
            transition-timing-function: var(--ease-3);
            transition-duration: .25s;
            transform: scale(1.75);
    `}`} 
   }

  .sun-and-moon > .sun-beams {
      ${({ $theme }) =>
    `${$theme === "dark" && css`
            transition-duration: .15s;
            transform: rotateZ(-25deg);
        `}`} 
  }

  .sun-and-moon > .moon > circle {
       ${({ $theme }) =>
    `${$theme === "dark" && css`
             transition-duration: .5s;
             transition-delay: .25s;
        `}`} 
  }
}
`;
