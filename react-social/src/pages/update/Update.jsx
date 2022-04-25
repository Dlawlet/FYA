import "./update.css"
import Topbar from "../../components/topbar/Topbar";
import React, { useContext, useRef } from 'react';
import Footbar from "../../components/footbar/Footbar";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Update(){
    const { user: user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const name = useRef();
    const lastName = useRef();
    const email = useRef();
    const submitHandler1 = async (e) =>{
        e.preventDefault()
        try {
            await axios.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 username:
                    name.current.value
                    ? lastName.current.value
                        ? name.current.value +" "+lastName.current.value
                        :name.current.value
                    :lastName.current.value
                        ? lastName.current.value
                        : user.username,
                 email: 
                    email.current.value
                    ? email.current.value
                    : user.email})
            alert('Thank you! Your Account infos have been updated!');
            {localStorage.clear("token");window.location.href='/login'} // Need to be handle differently
        } catch (error) {
            alert('Oops! Something went wrong, Please try again');
        }
        
     }

    return (
    <>
    <div className="Topbar">
    <Topbar/>
    </div>
    <div>
        <div className="second-container">
          <div className="settings-block">
            <div className="account-settings-box">
                <h2 className="heading">Account Info</h2>
                <div className="form-block w-form">
                <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    className="form"
                    onSubmit={submitHandler1}
                >
                    <div className="text-field-box">
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-5"
                        data-name="Name 5"
                        placeholder="Name"
                        id="Name-5"
                        ref={name}
                    />
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-6"
                        data-name="Name 6"
                        placeholder="Last Name"
                        id="Name-6"
                        ref={lastName}
                    />
                    </div>
                    
                    <div className="text-field-box">
                    <input
                        type="email"
                        className="text-field _2 w-input"
                        maxLength={256}
                        name="Email-2"
                        data-name="Email 2"
                        placeholder="Email"
                        id="Email-2"
                       ref={email}
                    />
                    </div>
                    <button
                    type="submit"
                    defaultValue="Save changes"
                    data-wait="Please wait..."
                    className="button w-button "
                    >Save changes
                    </button>
                </form>
                
                </div>
            </div>
            <div className="account-settings-box">
                <h2 className="heading">Profile Details</h2>
                <div className="form-block w-form">
                <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    className="form"
                >
                    <div className="text-field-box">
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-5"
                        data-name="Name 5"
                        placeholder="Country"
                        id="Name-5"
                    />
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-6"
                        data-name="Name 6"
                        placeholder="City"
                        id="Name-6"
                    />
                    </div>
                    <div className="text-field-box _2">
                    <input
                        type="text"
                        className="text-field _2 w-input"
                        maxLength={256}
                        name="Username-2"
                        data-name="Username 2"
                        placeholder="Title"
                        id="Username-2"
                    />
                    </div>
                    <div className="text-field-box">
                    <input
                        type="text"
                        className="text-field _2 w-input"
                        maxLength={256}
                        name="Email-2"
                        data-name="Email 2"
                        placeholder="Website"
                        id="Email-2"
                    />
                    </div>
                    <div className="text-field-box bio">
                    <textarea
                        placeholder="Bio"
                        maxLength={5000}
                        id="field"
                        name="field"
                        data-name="Field"
                        className="text-field _2-copy w-input"
                        defaultValue={""}
                    />
                    <div className="text-block-28">Max 140 characters.</div>
                    </div>
                    <div className="text-field-box _2">
                    <input
                        type="text"
                        className="text-field _2 w-input"
                        maxLength={256}
                        name="Username-2"
                        data-name="Username 2"
                        placeholder="Interests"
                        id="Username-2"
                    />
                    <div className="text-block-28">
                        Fields you're passionate about or would like to explore.
                    </div>
                    </div>
                    <input
                    type="submit"
                    defaultValue="Save changes"
                    data-wait="Please wait..."
                    className="button hide w-button"
                    />
                    <a href="#" className="button w-button">
                    Save changes
                    </a>
                </form>
                <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                </div>
            </div>
            <div className="account-settings-box">
                {/*<h2 className="heading">Linked Accounts</h2>
                <div className="social-accounts-wrapper">
                <div className="social-accounts">
                    <img
                    src="https://assets.website-files.com/5f17fb07b9515de2d22c8c43/5f17fb34c1906f547a9f18e2_G.png"
                    alt=""
                    className="social-icon"
                    />
                    <div className="text-block-59">Google</div>
                    <a href="#" className="button-2 _2 w-button">
                    Unlink
                    </a>
                </div>
                <div className="social-accounts">
                    <img
                    src="https://assets.website-files.com/5e21e035412066379cd0b9b1/5e22140208ba35d23e7cfc4c_facebook%20icon.svg"
                    alt=""
                    className="social-icon"
                    />
                    <div className="text-block-59">Facebook</div>
                    <a href="#" className="button-2 w-button">
                    Link Account
                    </a>
                </div>
                <div className="social-accounts">
                    <img
                    src="https://assets.website-files.com/5f17fb07b9515de2d22c8c43/5f17fb34c1906f9e7d9f18ea_github.png"
                    sizes="24px"
                    srcSet="https://assets.website-files.com/5f17fb07b9515de2d22c8c43/5f17fb34c1906f9e7d9f18ea_github-p-500.png 500w, https://assets.website-files.com/5f17fb07b9515de2d22c8c43/5f17fb34c1906f9e7d9f18ea_github.png 512w"
                    alt=""
                    className="social-icon"
                    />
                    <div className="text-block-59">Github</div>
                    <a href="#" className="button-2 w-button">
                    Link Account
                    </a>
                </div>
                <div className="social-accounts">
                    <img
                    src="https://assets.website-files.com/5e21e035412066379cd0b9b1/5e22140d9e6c49a1727dc76a_twitter%20icon.svg"
                    alt=""
                    className="social-icon"
                    />
                    <div className="text-block-59">Twitter</div>
                    <a href="#" className="button-2 w-button">
                    Link Account
                    </a>
                </div>
                <div className="social-accounts">
                    <img
                    src="https://assets.website-files.com/5e21e035412066379cd0b9b1/5e223e3198d7ea38f4b322ee_linkedin%20icon.svg"
                    alt=""
                    className="social-icon"
                    />
                    <div className="text-block-59">LinkedIn</div>
                    <a href="#" className="button-2 w-button">
                    Link Account
                    </a>
                </div>
    </div>*/}
            </div>
            <div className="account-settings-box">
                <h2 className="heading">Public Profile</h2>
                <div className="div-block-64">
                <a
                    href="#"
                    data-ix="toggle"
                    data-w-id="15693fd0-3c3b-cf7a-a5e2-25440c4906a9"
                    className="togglebutton w-inline-block"
                >
                    <div className="buttontoggle" />
                </a>
                <div className="text-block-29">
                    Allow members of the platform to view your profile.
                </div>
                </div>
            </div>
            <div className="account-settings-box">
                <h2 className="heading">Connections</h2>
                <div className="div-block-64">
                <a
                    href="#"
                    data-ix="toggle"
                    data-w-id="15693fd0-3c3b-cf7a-a5e2-25440c4906b1"
                    className="togglebutton w-inline-block"
                >
                    <div className="buttontoggle" />
                </a>
                <div className="text-block-29">
                    Allow members of the platform to send you a connection request.
                </div>
                </div>
            </div>
            <div className="account-settings-box last">
                <h2 className="heading">Change Password</h2>
                <div className="form-block w-form">
                <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    className="form"
                >
                    <div className="text-field-box _2">
                    <div className="text-field-box">
                        <input
                        type="password"
                        className="text-field password w-input"
                        maxLength={256}
                        name="Password-4"
                        data-name="Password 4"
                        placeholder="Old Password"
                        id="Password-4"
                        required=""
                        />
                    </div>
                    <div className="text-field-box">
                        <input
                        type="password"
                        className="text-field password w-input"
                        maxLength={256}
                        name="Password-3"
                        data-name="Password 3"
                        placeholder="New Password"
                        id="Password-3"
                        required=""
                        />
                    </div>
                    <div className="text-field-box">
                        <input
                        type="password"
                        className="text-field password w-input"
                        maxLength={256}
                        name="Password-2"
                        data-name="Password 2"
                        placeholder="Repeat New Password"
                        id="Password-2"
                        required=""
                        />
                    </div>
                    </div>
                    <input
                    type="submit"
                    defaultValue="Save changes"
                    data-wait="Please wait..."
                    className="button hide w-button"
                    />
                    <a href="#" className="button w-button">
                    Save changes
                    </a>
                </form>
                <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                </div>
            </div>
            </div>
        
        </div>

    </div>
    <div>
    <Footbar/>
    </div>
    </>)
    }