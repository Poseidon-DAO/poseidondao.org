import { submitArtist } from "apis/index";
import FullScreen from "components/FullScreen";
import LoadingModal from "components/LoadingModal";
import { Colors } from "components/UI_KIT/colors";
import CustomButton from "components/UI_KIT/CustomButton";
import { FormField } from "components/UI_KIT/CustomForm/FormField";
import { Pane } from "evergreen-ui";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";
import styled from "styled-components";
import { ButtonTypes, IArtist } from "types";
import { validators } from "utils/formValidators";

const ArtistForm = () => {
  const isServer = typeof window === "undefined";

  const getInitialValue = (type: string) => {
    if (!isServer) {
      const saved = localStorage.getItem("form-" + type);
      return saved?.length ? saved : "";
    }
    return "";
  };
  const router = useRouter();

  const [name, setName] = useState(() => getInitialValue("name"));
  const [email, setEmail] = useState(() => getInitialValue("email"));
  const [bio, setBio] = useState(() => getInitialValue("bio"));
  const [exhibitions, setExhibitions] = useState(() =>
    getInitialValue("exhibitions")
  );
  const [samples, setSamples] = useState(() => getInitialValue("samples"));
  const [website, setWebsite] = useState(() => getInitialValue("website"));
  const [project, setProject] = useState(() => getInitialValue("project"));
  const [twitter, setTwitter] = useState(() => getInitialValue("twitter"));
  const [instagram, setInstagram] = useState(() =>
    getInitialValue("instagram")
  );
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload: any) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );
  const [loading, setLoading] = useState(false);

  const [validation, setValidation] = useState("");

  const isValid = () => {
    setValidation("");
    if (!validators.lengthValidator(name, 3, 70)) {
      setValidation("Name is invalid");
      return false;
    } else if (!validators.emailValidator(email)) {
      setValidation("Email is invalid");
      return false;
    } else if (!validators.lengthValidator(bio, 2, 2000)) {
      setValidation("Bio is required");
      return false;
    } else if (!validators.lengthValidator(exhibitions, 2, 2000)) {
      setValidation("Exhibitions is required");
      return false;
    } else if (!validators.urlValidator(samples)) {
      setValidation("Samples is required");
      return false;
    } else if (!validators.lengthValidator(project)) {
      setValidation("A project is required");
      return false;
    } else if (!validators.urlValidator(twitter, "twitter")) {
      setValidation("Twitter is invalid");
      return false;
    } else if (
      instagram.length &&
      !validators.urlValidator(instagram, "instagram")
    ) {
      setValidation("Instagram is invalid");
      return false;
    } else if (website.length && !validators.urlValidator(website)) {
      setValidation("Website is invalid, please include http://");
      return false;
    }
    return true;
  };

  const isButtonDisabled =
    !name.length || !email.length || !bio.length || !twitter.length
      ? true
      : false;

  const handleSubmit = async () => {
    if (isValid()) {
      const artist: IArtist = {
        name,
        email,
        bio,
        exhibitions,
        samples,
        website,
        twitter_url: twitter,
        instagram_url: instagram,
        project,
      };
      try {
        setLoading(true);
        await submitArtist(artist);
        setLoading(false);
        setLoading(false);
        newToast({
          text: "Thank you for your application. Our team will review your profile and will reach out if it meets our requirements.",
          type: "success",
          time: 5000,
        });
        clearState();
        router.push("/");
      } catch (e: any) {
        setLoading(false);
        newToast({ text: "Oops, something went wrong!", type: "error" });
      }
    }
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setBio("");
    setExhibitions("");
    setSamples("");
    setWebsite("");
    setTwitter("");
    setInstagram("");
    setProject("");
    localStorage.setItem("form-name", "");
    localStorage.setItem("form-email", "");
    localStorage.setItem("form-bio", "");
    localStorage.setItem("form-exhibitions", "");
    localStorage.setItem("form-samples", "");
    localStorage.setItem("form-website", "");
    localStorage.setItem("form-twitter", "");
    localStorage.setItem("form-instagram", "");
    localStorage.setItem("form-project", "");
  };

  return (
    <FullScreen>
      <Pane
        display="flex"
        flexDirection="column"
        flex={1}
        alignItems="center"
        maxWidth="90vw"
        marginTop="15vh"
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: Colors.white.gray,
          }}
        >
          Artist Application
        </h2>
        <Form>
          <p
            style={{
              alignSelf: "flex-end",
              fontStyle: "italic",
              fontSize: ".8rem",
              color: Colors.white.gray,
              marginTop: "1rem",
            }}
          >
            Fields with * are required
          </p>
          <FormField value={name} type="name" onChange={setName} />
          <FormField value={email} type="email" onChange={setEmail} />
          <FormField value={twitter} type="twitter" onChange={setTwitter} />
          <FormField
            value={instagram}
            type="instagram"
            onChange={setInstagram}
            required={false}
          />
          <FormField
            value={website}
            type="website"
            onChange={setWebsite}
            required={false}
          />
          <FormField
            value={project}
            type="project"
            onChange={setProject}
            required
          />
          <FormField value={bio} type="bio" onChange={setBio} required />
          <FormField
            value={exhibitions}
            type="exhibitions"
            onChange={setExhibitions}
            required={false}
          />
          <FormField
            value={samples}
            type="samples"
            onChange={setSamples}
            required={false}
          />

          <h5 style={{ color: Colors.red.primary }}>{validation}</h5>
          <CustomButton
            type={ButtonTypes.success}
            text="APPLY"
            onClick={handleSubmit}
            style={{ marginTop: "1rem", width: "100%" }}
            disabled={isButtonDisabled}
            appearance="primary"
            backgroundColor={Colors.blue.primary}
          />
        </Form>
        {loading && <LoadingModal />}
      </Pane>
    </FullScreen>
  );
};

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 40%;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (max-width: 1200px) {
    max-width: 60%;
  }
  @media (max-width: 992px) {
    max-width: 90%;
  }
`;

export default ArtistForm;
