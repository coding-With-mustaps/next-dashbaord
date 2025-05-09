import { media } from "@/Global_properties/MediaQuery";
import { styled, keyframes } from "styled-components";

//TODO: From here || is a shared code with setting popup
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
`;

// export const Container = styled.div<{$isVisible: boolean}>`
//      position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   backdrop-filter: blur(2px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 100000;
// `

export const Container = styled.div<{ $isvisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  animation: ${({ $isvisible }) => ($isvisible ? fadeIn : fadeOut)} 0.3s ease forwards;
  pointer-events: ${({ $isvisible }) => ($isvisible ? "auto" : "none")};
`;

export const Wrapper = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
    background-color: var(--popup-background);
    color: var(--popup-color);
    border-radius: 5px;

    @media ${media.mobile} {
      width: 90%;
      background-color: var(--popup-background-mobile);
    }
`

export const CloseButtonIcon = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    background-color: var(--close-button-background);
    color: var(--close-button-color);

    .icon {
        color: var(--close-button-color);
        font-size: 25px;
    }
`
//? To here || is a shared code with setting popup