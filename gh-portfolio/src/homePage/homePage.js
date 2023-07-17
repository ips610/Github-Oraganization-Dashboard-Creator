import githubLogo from "../images/github.svg";
import "../owasp/style.css";
import "./home.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import pythonlogo from "../images/python.png";
import htmllogo from "../images/html.png";
import csslogo from "../images/css.png";
import jslogo from "../images/js.png";
import nodejslogo from "../images/nodejs.png";
import reactlogo from "../images/react.png";
import firebaselogo from "../images/firebase.png";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [idError, setIdError] = useState(0);
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/orgs/${text}`);
    if (response.status === 200) {
      // User exists
      setIdError(0);
    } else if (response.status === 404) {
      // User does not exist
      setIdError(1);
      setLoading(false);
      return 2;
    } else {
      // Handle other status codes
      setIdError(2);
      setLoading(false);
      return 3;
    }
    await fetch("https://marvelous-gingersnap-4ea482.netlify.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orgName: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate(`/${text}`);
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <p id="lineone" className="headinglines">
            ORGANIZATION
          </p>
          <p id="linetwo" className="headinglines">
            Projects Dashboard <br /><br />
          </p>
          <div className="login">
            <div className="orgname">
              <Box textAlign="center">
                <TextField
                  id="outlined-basic"
                  label="Organization Name"
                  variant="filled"
                  className="Textbox"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "white",
                      fontSize: "1.5rem",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "grey",
                      fontSize: "1.5rem",
                    },
                  }}
                />
              </Box>
              <Stack>
                <Button
                  onClick={() => {onSubmit()}}
                  variant="contained"
                  className="Button_login"
                  endIcon={<SendIcon />}
                  sx={{
                    backgroundColor: "#ff6b34",
                    borderRadius: "20px",
                    marginLeft: "1rem",
                    width: "10vw",
                    height: "7vh",
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "#004E89",
                      color: "white",
                    },
                  }}
                >
                  Continue
                </Button>
              </Stack>
            </div>
            {idError === 1 && <h1>Organisation Does not Exist</h1>}
            {idError === 2 && <h1>Some error occured, Please try again later</h1>}
            {loading && <h1>Loading...</h1>}
          </div>
        </div>
        {/* <div className="image">
          <img src={githubLogo} alt="Github Logo" />
        </div> */}
      </div>

      <div className="aboutus">
        <div className="aboutusbox" id="aboutusleft">
          <img src={githubLogo} alt="Github Logo" id="aboutus_billi_logo" />
        </div>
        <div className="aboutusbox" id="aboutusright">
          Behold the masterpieces from our brilliant contributors, a spectacular
          collection of ongoing projects directly fetched from Github. Be amazed
          by the relentless commits, issues, and pull requests!
        </div>
      </div>

      <div className="techstackheading">
        <p className="techstackheading_p">Technologies Used</p>
        <div className="techstack">
          <Tech source={pythonlogo} al="Python Logo" cl="card1" />
          <Tech source={htmllogo} al="HTML Logo" cl="card2" />
          <Tech source={csslogo} al="CSS Logo" cl="card3" />
          <Tech source={jslogo} al="JS Logo" cl="card4" />
          <Tech source={nodejslogo} al="NodeJS Logo" cl="card5" />
          <Tech source={reactlogo} al="React Logo" cl="card6" />
          <Tech source={firebaselogo} al="Firebase Logo" cl="card7" />
          <div className="blob"></div>
        </div>
      </div>

      <div className="top_contributors">
        <p>Need</p>
        
      </div>
      <div className="allprojects">
        <div className="allprojects_table">
          <p>
            A <b>GitHub portfolio generator </b>is a tool that helps individuals create
            and showcase their projects, contributions, and skills on GitHub in
            the form of a portfolio. It serves several needs: <br /><br />
            <b>Professional Presentation:</b> A well-organized portfolio enhances the
            professional presentation of a developer or a team. It provides a
            visually appealing and structured way to highlight projects,
            demonstrate coding skills, and showcase contributions to open-source
            projects. <br /><br /> <b>Showcasing Skills and Experience:</b> A portfolio
            generator allows developers to showcase their skills and experience
            in a concise and visually appealing manner. It provides an
            opportunity to demonstrate proficiency in various programming
            languages, frameworks, libraries, and tools used in different
            projects. <br /> <br /> <b>Personal Branding:</b> Having a professional portfolio
            helps in establishing a personal brand as a developer. It allows
            individuals to create a unique identity and showcase their expertise
            to potential employers, clients, or collaborators. <br /><br />
            <b>Collaboration and Networking:</b> GitHub is a popular platform
            for collaboration and networking among developers. A portfolio
            generator can help developers connect with like-minded individuals,
            potential collaborators, or recruiters who are looking for specific
            skills and expertise. <br /><br /> <b>Open Source Contributions:</b> Many
            developers contribute to open-source projects, and having a
            portfolio that highlights these contributions can be beneficial. It
            allows developers to demonstrate their involvement in the
            open-source community, showcase the projects they have contributed
            to, and attract attention from other developers and potential
            employers.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footercontent">
          <p>Developed By: Ishpuneet Singh, Mankirat Singh, Akshit Gupta</p>
          <p>Do Give A Star On Our Github Account</p>
        </div>
      </div>
    </>
  );
}

function Tech({ source, al, cl }) {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(`.${cl}`), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
    });
  }, [cl]);
  return (
    <div className="gfg">
      <div
        className={cl}
        style={{
          position: "relative",
          boxShadow: "20px 20px 50px rgb(0, 0, 0, 0.4)",
          borderRadius: "25px",
          background: "rgba(255, 255, 255, 0.1)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="tech">
          <img src={source} alt={al} className="techimg" />
        </div>
      </div>
    </div>
  );
}
