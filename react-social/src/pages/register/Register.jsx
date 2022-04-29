import axios from "axios";
import { useContext, useRef } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress} from "@material-ui/core";


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const { isFetching} = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        window.location.href='/login';
        // history.push("/login");
      } catch (err) {}
    }
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (<div className="sc-ezbkgU Signup__Container-nzwlft-0 iYxMPu dWDuqn snipcss-WgLO8">
  <div className="Signup__Content-nzwlft-1 gAKzYQ">
    <div className="Signup__MainContainer-nzwlft-2 bCuFza">
      <a href="/" className="Signup__LogoLink-nzwlft-3 kTNIBg snip-a">
        <img
          src={PF + "Ncem.png"}
          className="Signup__LogoImage-nzwlft-4 dFpMSY snip-img"
          alt="logo"
        />
      </a>
      <div className="Signup__MainContent-nzwlft-5 iQIiZr">
        <h1 className="Signup__Heading-nzwlft-6 bMoMti snip-h1">
          Sign Up For Ncemh
        </h1>
        <div className="Signup__FormContainer-nzwlft-7 glxDmC">
          <div className="Signup__SocialButtonsContainer-nzwlft-8 kPatmB">
            <a
              href="https://google.com"
              className="Signup__SocialButton-nzwlft-9 fxDcIg snip-a"
            >
              <span className="iconContainer">
                <img
                  src="data:image/png;base64,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"
                  className="icon snip-img"
                  alt=""
                />
              </span>
              <span className="text">Sign Up With Google</span>
            </a>
            <a
              href="https://twitter.com"
              className="Signup__SocialButton-nzwlft-9 fxDcIg snip-a"
            >
              <span className="iconContainer">
                <img
                  src="data:image/png;base64,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"
                  className="icon snip-img"
                  alt=""
                />
              </span>
              <span className="text">Sign Up With Twitter</span>
            </a>
          </div>
          <div className="Signup__DividerTextContainer-nzwlft-10 ePLvvm">
            <div className="Signup__DividerText-nzwlft-11 kSysKw">
              Or Sign up with your e-mail
            </div>
          </div>
          <form className="Signup__Form-nzwlft-12 cIyreV" onSubmit={handleClick}>
            <input
                type="username"
                placeholder="Username"
                required
                ref={username}
                className="Signup__Input-nzwlft-13 dhjjAw"
              />
            <input
              type="email"
              required
              ref={email}
              placeholder="Email"
              className="Signup__Input-nzwlft-13 dhjjAw"
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
              minLength="6"
              className="Signup__Input-nzwlft-13 dhjjAw"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              type="password"
              className="Signup__Input-nzwlft-13 dhjjAw"
            />
            <button
              type="submit"
              className="Signup__SubmitButton-nzwlft-14 jckPP snip-button"
              disabled={isFetching} >
              {isFetching ? (
                           <CircularProgress color="white" size="20px" />
                        ) :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon snip-svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy={7} r={4}></circle>
                <line x1={20} y1={8} x2={20} y2={14}></line>
                <line x1={23} y1={11} x2={17} y2={11}></line>
              </svg>}
              <span className="text">Sign Up</span>
            </button>
            <p className="Signup___StyledP-nzwlft-17 hrbmRe snip-p">
              I agree to abide by Ncem's
              <a href="/" className="Signup___StyledA-nzwlft-18 fldQHk snip-a">
                Terms of Service
              </a>
              and its
              <a href="/" className="Signup___StyledA2-nzwlft-19 lgQnZH snip-a">
                Privacy Policy
              </a>
            </p>
            <p className="Signup___StyledP2-nzwlft-20 cLkJnc snip-p">
              Already have an account?
              <a href="/login" className="Signup___StyledA3-nzwlft-21 DbMJR snip-a">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="Signup__IllustrationContainer-nzwlft-15 iaihZH">
      <div style={{backgroundImage : `url(${PF + 'register.png'})`}} className="Signup__IllustrationImage-nzwlft-16 cxbRat"></div>
    </div>
  </div>
</div>
  );
}