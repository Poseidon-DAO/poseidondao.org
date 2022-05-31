import FullScreen from 'components/FullScreen'
import CustomButton from "components/UI_KIT/CustomButton";
import { useCallback, useState } from "react";
import { ButtonTypes, IArtist } from "types";
import { FormField } from "components/UI_KIT/CustomForm/FormField";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";
import { submitArtist } from "apis/index";
import { validators } from "utils/formValidators";
import LoadingModal from "components/LoadingModal";
import { useRouter } from "next/router";
import { Pane, toaster } from 'evergreen-ui';
const ArtistForm = () => {
  const isServer = typeof window === "undefined";

  const getInitialValue = (type: string) => {
    if (!isServer) {
      const saved = localStorage.getItem('form-' + type);
      return saved?.length ? saved : '';
    }
    return "";
  }
  const router = useRouter();

  const [name, setName] = useState(() => getInitialValue("name"));
  const [email, setEmail] = useState(() => getInitialValue("email"));
  const [bio, setBio] = useState(() => getInitialValue("textarea"));
  const [website, setWebsite] = useState(() => getInitialValue("website"));
  const [twitter, setTwitter] = useState(() => getInitialValue("twitter"));
  const [instagram, setInstagram] = useState(() => getInitialValue("instagram"));

  const [loading, setLoading] = useState(false);

  const [validation, setValidation] = useState("");

  const isValid = () => {
    setValidation("");
    if (!validators.lengthValidator(name, 3)) {
      setValidation("Name is invalid");
      return false;
    } else if (!validators.emailValidator(email)) {
      setValidation("Email is invalid");
      return false;
    } else if (!validators.lengthValidator(bio)) {
      setValidation("Bio is required");
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
        website,
        twitter_url: twitter,
        instagram_url: instagram,
      };
      try {
        setLoading(true);
        await submitArtist(artist);
        setLoading(false);
        toaster.success("Thank you for your application. Our team will review your profile and will reach out if it meets our requirements.")
        clearState();
        router.push('/');
      } catch (e: any) {
        setLoading(false);
        toaster.danger("Oops, something went wrong!");
      }
    }
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setBio("");
    setWebsite("");
    setTwitter("");
    setInstagram("");
    localStorage.setItem('form-name', '');
    localStorage.setItem('form-email', '');
    localStorage.setItem('form-textarea', '');
    localStorage.setItem('form-website', '');
    localStorage.setItem('form-twitter', '');
    localStorage.setItem('form-instagram', '');
  };

  return (
    <FullScreen>
      <Pane display='flex' flexDirection='column' flex={1} alignItems='center' maxWidth='90vw' marginTop='15vh'>
        <h2 style = {{ textAlign:'center', color: '#d1d1da' }}>Artist Application</h2>
        <Pane style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '900px',
          flexDirection: 'column',
          paddingBottom: '3rem',
        }}>
          <p
            style={{ alignSelf: "flex-end", fontStyle: "italic", fontSize: ".8rem", color: '#d1d1da', marginTop: '1rem' }}
          >
            Fields with * are required
          </p>
          <FormField value={name} type="name" onChange={setName} />
          <FormField value={email} type="email" onChange={setEmail} />
          <FormField value={twitter} type="twitter" onChange={setTwitter} />
          <FormField value={instagram} type="instagram" onChange={setInstagram} required={false} />
          <FormField value={website} type="website" onChange={setWebsite} required={false} />
          <FormField value={bio} type="textarea" onChange={setBio} />

          <h5 style={{ color: "rgb(255, 69, 58)" }}>{validation}</h5>
          <CustomButton
            type={ButtonTypes.success}
            text="Submit"
            onClick={handleSubmit}
            style={{ marginTop: "15px" }}
          />
        </Pane>
        {loading && <LoadingModal />}
      </Pane>
    </FullScreen>
  );
};
export default ArtistForm;