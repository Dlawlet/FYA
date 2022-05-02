import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress} from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sc-ezbkgU Login__Container-sc-5wufj1-0 iYxMPu iEVkHE snipcss-hBtne">
        <div className="Login__Content-sc-5wufj1-1 VxNKD">
          <div className="Login__MainContainer-sc-5wufj1-2 jAcvoZ">
            <a href="/" className="Login__LogoLink-sc-5wufj1-3 rujQf snip-a">
              <img src={PF + "site/Ncem.png"} className="Login__LogoImage-sc-5wufj1-4 iyoYoL snip-img" alt ="Logo" />
            </a>
            <div className="Login__MainContent-sc-5wufj1-5 llzQuc">
              <h1 className="Login__Heading-sc-5wufj1-6 fuZfmB snip-h1">
                Sign In To Ncemh
              </h1>
              <div className="Login__FormContainer-sc-5wufj1-7 gPujhN">
                <div className="Login__SocialButtonsContainer-sc-5wufj1-8 hzwFly">
                  <a href="https://google.com" className="Login__SocialButton-sc-5wufj1-9 unjfD snip-a">
                    <span className="iconContainer">
                      <img src="data:image/png;base64,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" className="icon snip-img" alt="" />
                    </span>
                    <span className="text">
                      Sign In With Google
                    </span>
                  </a>
                  <a href="https://twitter.com" className="Login__SocialButton-sc-5wufj1-9 unjfD snip-a">
                    <span className="iconContainer">
                      <img src="https://img.icons8.com/fluency/344/google-logo.png" alt="" />
                    </span>
                    <span className="text">
                      Sign In With Twitter
                    </span>
                  </a>
                </div>
                <div className="Login__DividerTextContainer-sc-5wufj1-10 bvGmQx">
                  <div className="Login__DividerText-sc-5wufj1-11 cLeyEb">
                    Or Sign in with your e-mail
                  </div>
                </div>
                <form className="Login__Form-sc-5wufj1-12 gQArSq" onSubmit={handleClick}>
                  <input required type="email" placeholder="Email" className="Login__Input-sc-5wufj1-13 LlKGX" ref={email}/>
                  <input required type="password" placeholder="Password" className="Login__Input-sc-5wufj1-13 LlKGX" minLength="6"  ref={password}/>
                  <button type="submit" className="Login__SubmitButton-sc-5wufj1-14 khMJpg snip-button" disabled={isFetching}>
                  {isFetching ? (
                      <CircularProgress color="white" size="20px" />
                      ) : 
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon snip-svg">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4">
                      </path>
                      <polyline points="10 17 15 12 10 7">
                      </polyline>
                      <line x1={15} y1={12} x2={3} y2={12}>
                      </line>
                    </svg> }
                    <span className="text">
                      Sign In
                    </span>
                  </button>
                </form>
                <p className="Login___StyledP-sc-5wufj1-17 lfZQJJ snip-p">
                  <a href="/register" className="Login___StyledA-sc-5wufj1-18 fPaNZv snip-a">
                    Forgot Password ?
                  </a>
                </p>
                <p className="Login___StyledP2-sc-5wufj1-19 MQHgB snip-p">
                  Dont have an account? 
                  <a href="/register" className="Login___StyledA2-sc-5wufj1-20 iEAyFm snip-a">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="Login__IllustrationContainer-sc-5wufj1-15 dprhkA">
            <div style={{backgroundImage : `url(${PF + 'site/login.png'})`}} className="Login__IllustrationImage-sc-5wufj1-16 gJLYTH">
            </div>
          </div>
        </div>
      </div>
  );
}