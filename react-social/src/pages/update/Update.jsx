import "./update.css"
import Topbar from "../../components/topbar/Topbar";
import React, { useContext, useRef, useState  } from 'react';
import Footbar from "../../components/footbar/Footbar";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";



export default function Update(){
    const {user} = useContext(AuthContext);
    const name = useRef();
    const lastName = useRef();
    const email = useRef();

    
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);

    const country = useRef();const city = useRef();
    const descr = useRef();const work = useRef();
    const parcours = useRef(); 

    const newpassw = useRef(); //const passw = useRef(); TODO
    const Rnewpassw= useRef();

    const submitHandler1 = async (e) =>{
        e.preventDefault()
        try {
            await axiosInstance.put("/users/"+user._id, 
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
            localStorage.clear("token");window.location.href='/login' // Need to be handle differently
        } catch (error) {
            alert('Oops! Something went wrong, Please try again');
        }
        
    }
    const submitHandlerImg1 = async (e) => {
        e.preventDefault();
        if (file1) {
          const data = new FormData();
          const [extension] = (file1.name).split('.').reverse();
          const fileName = user._id + "userImg." +extension;

          data.append("name", fileName);
          data.append("file", file1);
          try {
            await axiosInstance.post("/upload", data);
            await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 profilePicture: "/person/"+fileName,})
          } catch (err) { alert('Oops! Something went wrong, Please try again');}
        }
        if (file2) {
            const data = new FormData();
            const [extension] = (file2.name).split('.').reverse();
            const fileName = user._id + "userCover." + extension;
            data.append("name", fileName);
            data.append("file", file2);
            try {
              await axiosInstance.post("/upload", data);
              await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 coverPicture: "/person/"+fileName,})
            } catch (err) { alert('Oops! Something went wrong, Please try again');}
          }
        /* try {
        window.location.reload();
        } catch (err) {}; */
        alert('Profile mis à jour!, veuillez vous reconnecter!');
        localStorage.clear("token");window.location.href='/login' // Need to be handle differently
          
      }
    const submitHandler2 = async (e) =>{
        e.preventDefault()
        try {
            await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                desc: 
                    descr.current.value
                    ? descr.current.value
                    : user.desc,
                city: 
                    city.current.value
                    ? city.current.value
                    : user.city,
                from: 
                    country.current.value
                    ? country.current.value
                    : user.from,
                work: 
                    work.current.value
                    ? work.current.value
                    : user.work,
                parcours: 
                    parcours.current.value
                    ? parcours.current.value
                    : user.parcours})
            alert('Thank you! Your Account infos have been updated!');
            localStorage.clear("token");window.location.href='/login' // Need to be handle differently
        } catch (error) {
            alert('Oops! Something went wrong, Please try again');
        }
        
    }
    const submitHandlerImg2 = async (e) => {
        e.preventDefault();
        if (file1) {
          const data = new FormData();
          const [extension] = (file1.name).split('.').reverse();
          const fileName = user._id + "cni." + extension;
          data.append("name", fileName);
          data.append("file", file1);
          try {
            await axiosInstance.post("/upload", data);
            await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 checkWaiting: true,
                 cniPicture: "/person/"+fileName})
          } catch (err) { alert('Oops! Something went wrong, Please try again');}
        }
        if (file2) {
            const data = new FormData();
            const [extension] = (file2.name).split('.').reverse();
            const fileName = user._id + "Diploma." + extension;
            data.append("name", fileName);
            data.append("file", file2);
            try {
              await axiosInstance.post("/upload", data);
              await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 checkWaiting: true,
                 eduPdf: "/person/"+fileName})
            } catch (err) { alert('Oops! Something went wrong, Please try again');}
          }
          if (file3) {
            const data = new FormData();
            const [extension] = (file3.name).split('.').reverse();
            const fileName = user._id + "work." + extension;
            data.append("name", fileName);
            data.append("file", file3);
            try {
              await axiosInstance.post("/upload", data);
              await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 checkWaiting: true,
                 workPicture: "/person/"+fileName})
            } catch (err) { alert('Oops! Something went wrong, Please try again');}
          }
          if (file4) {
            const data = new FormData();
            const [extension] = (file4.name).split('.').reverse();
            const fileName = user._id + "Salary." + extension;
            data.append("name", fileName);
            data.append("file", file4);
            try {
              await axiosInstance.post("/upload", data);
              await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 checkWaiting: true,
                 bankPdf: "/person/"+fileName})
            } catch (err) { alert('Oops! Something went wrong, Please try again');}
          }
          alert('merci! Vos Informations ont été mises à jour!');
      }
    const submitHandler3 = async (e) =>{
        e.preventDefault()
        if (Rnewpassw.current.value !== newpassw.current.value) {
            Rnewpassw.current.setCustomValidity("les mots de passe ne correspondent pas!");}
        else {try {
            await axiosInstance.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                 password : Rnewpassw.current.value
                 })
            alert('merci! Vos Informations ont été mises à jour!');
            localStorage.clear("token"); window.location.href='/login' // Need to be handle differently
        } catch (error) {
            alert('Oops! Something went wrong, Please try again');
        }}
        
    }

    return (
    <>
    <div className="Topbar">
    <Topbar/>
    </div>
    <div>
        <div className="second-container">
        <h2 className="heading" style={{fontSize:"170%",marginLeft:"5%",marginBottom:"8rem"}}>Paramètres et Certifications de Votre Compte</h2>
          <div className="settings-block">
            {user.cniCheck
            ?""
            :<div className="account-settings-box">
                <h2 className="heading">Info Utilisateur</h2>
                <div className="form-block w-form">
                <form
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
            </div>}
            <div className="account-settings-box">
                <h2 className="heading">Images de Profile</h2>
                <div className="form-block w-form">
                <form className="form" onSubmit={submitHandlerImg1}>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span style={{color:"gray"}}>Photo d'utilisateur</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setFile1(e.target.files[0])}
                        />
                        </label>
                    </div>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span  style={{color:"gray"}}>Photo de couverture</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setFile2(e.target.files[0])}
                        />
                        </label>
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
                <h2 className="heading">Details Profile</h2>
                <div className="form-block w-form">
                <form className="form" onSubmit={submitHandler2}>
                    <div className="text-field-box">
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-5"
                        data-name="Name 5"
                        placeholder="Pays"
                        ref={country}
                    />
                    <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Name-6"
                        data-name="Name 6"
                        placeholder="Ville"
                        ref={city}
                    />
                    </div>
                    <div className="text-field-box _2">
                    <input
                        type="text"
                        className="text-field _2 w-input"
                        maxLength={256}
                        name="Username-2"
                        data-name="Username 2"
                        placeholder="Profession"
                        ref={work}
                    />
                    </div>
                    <div className="text-field-box">
                    <input
                        type="text"
                        className="text-field _2 w-input"
                        maxLength={237}
                        name="Email-2"
                        data-name="Email 2"
                        placeholder="phrase d'accroche"
                        ref={descr}
                    />
                    </div>
                    <div className="text-field-box bio">
                    <textarea
                        placeholder="Parcours de Vie"
                        maxLength={500}
                        id="field"
                        name="field"
                        data-name="Field"
                        className="text-field _2-copy w-input"
                        ref={parcours}
                    />
                    <div className="text-block-28">Max 500 charactères.</div>
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
                <h2 className="heading">Documents de Certification</h2>
                <div className="form-block w-form">
                <form  className="form" onSubmit={submitHandlerImg2}>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span style={{color:"gray"}}>Carte Nationale d'identité</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg,.pdf"
                            onChange={(e) => setFile1(e.target.files[0])}
                        />
                        </label>
                    </div>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span  style={{color:"gray"}}>Plus Haut Diplome</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg,.pdf"
                            onChange={(e) => setFile2(e.target.files[0])}
                        />
                        </label>
                    </div>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span  style={{color:"gray"}}>Contrat de Travail</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg,.pdf"
                            onChange={(e) => setFile3(e.target.files[0])}
                        />
                        </label>
                    </div>
                    <div className="text-field-box _2">
                        <label htmlFor="file" >
                        <span  style={{color:"gray"}}>Fiches de Paye Récentes</span>
                        <input
                            className="text-field _2 w-input"
                            style={{ }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg,.pdf"
                            onChange={(e) => setFile4(e.target.files[0])}
                        />
                        </label>
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
            <div >{/*className="account-settings-box">
                <h2 className="heading">Linked Accounts</h2>
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
            <div >{/*className="account-settings-box">
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
</div>*/}
            </div>
            <div >{/*className="account-settings-box">
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
                </div>*/}
            </div>
            <div className="account-settings-box last">
                <h2 className="heading">Changer Mot de passe</h2>
                <div className="form-block w-form">
                <form
                    className="form"
                    onSubmit={submitHandler3}
                >
                    <div className="text-field-box _2">
                    <div>{/* className="text-field-box">
                        <input
                        type="password"
                        className="text-field password w-input"
                        maxLength={256}
                        name="Password-4"
                        data-name="Password 4"
                        placeholder="Ancien Mot de passe"
                        id="Password-4"
                        required
                        ref={passw}
                        />*/}
                    </div>
                    <div className="text-field-box">
                        <input       // TODO add a div section to check the current password
                        type="password"
                        className="text-field password w-input"
                        maxLength={25}
                        minLength={6}
                        name="Password-3"
                        data-name="Password 3"
                        placeholder="Nouveau Mot de passe"
                        id="Password-3"
                        required
                        ref={newpassw}
                        />
                    </div>
                    <div className="text-field-box">
                        <input
                        type="password"
                        className="text-field password w-input"
                        maxLength={25}
                        minLength={6}
                        name="Password-2"
                        data-name="Password 2"
                        placeholder="Repéter Nouveau Mot de Passe"
                        id="Password-2"
                        required
                        ref={Rnewpassw}
                        />
                    </div>
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
            </div>
        
        </div>

    </div>
    <div>
    <Footbar/>
    </div>
    </>)
    }