import styles from "./styles.module.css";
import spotifyLogo from "../../assets/icons/logo.svg";
import googleIcon from "../../assets/icons/google.svg";
import googleHover from "../../assets/icons/google_hover.svg";
import appleIcon from "../../assets/icons/apple.svg";
import appleHoverIcon from "../../assets/icons/apple_hover.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import twitterHoverIcon from "../../assets/icons/twitter_hover.svg";
import SignInButton from "../signInButton";
import { useState } from "react";

export default function SignIn() {
  const [isHovered, setHoverStatus] = useState(false);
  const [icons, setIcons] = useState([
    { title: "apple", url: appleIcon },
    { title: "google", url: googleIcon },
    { title: "twitter", url: twitterIcon },
  ]);
  function handleHover(title) {
    setHoverStatus((prev) => !prev);
    changeIcon(title);
  }
  function whichIcon(icon) {
    switch (icon.title) {
      case "apple":
        return { ...icon, url: isHovered ? appleIcon : appleHoverIcon };
        break;
      case "google":
        return { ...icon, url: isHovered ? googleIcon : googleHover };
        break;
      case "twitter":
        return { ...icon, url: isHovered ? twitterIcon : twitterHoverIcon };
        break;
      default:
        break;
    }
  }
  function changeIcon(title) {
    const updatedIcons = icons.map((icon) => {
      if (title === icon.title) {
        return whichIcon(icon);
      } else {
        return icon;
      }
    });
    setIcons(updatedIcons);
  }
  return (
    <div className={styles.signIn_wrapper}>
      <div className={styles.signIn_header}>
        <img src={spotifyLogo} alt="spotify_logo" />
      </div>
      <div className={styles.signIn_body}>
        <h1>life is wasted on the living</h1>
        <h2>Sign in with</h2>
        <div className={styles.signIn_button_wrapper}>
          {icons.map((icon, idx) => {
            return (
              <SignInButton
                key={idx}
                id={icon.title}
                iconUrl={icon.url}
                handleHover={handleHover}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
