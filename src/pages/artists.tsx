import { useMemo } from "react";
import { Box, Button, useBreakpointValue, useToast } from "@chakra-ui/react";

import { submitArtist } from "apis/index";
import { IFormConfig, MultiStepForm } from "components/multi-step-form";
import { Select, Input, TextArea } from "components/multi-step-form/components";
import { validators } from "utils/formValidators";
import Head from "next/head";

const ArtistForm = () => {
  const toast = useToast();
  const buttonSize = useBreakpointValue({ sm: "2xl", lg: "xl" });

  const formConfig = useMemo<IFormConfig>(
    () => ({
      intro: null,
      outro: {
        title: "Congratulations!",
        question:
          "Thank you for your application. Our team will review your profile and will reach out if it meets our requirements.",
        continueButton: "Go Home",
        continueButtonSize: "xl",
        buttonType: "submit",
        buttonIcon: null,
        showEnterText: false,
        redirectUrl: "/",
      },
      sections: [
        {
          id: "1",
          title: "Please enter your name",
          question: "Just your first one is fine. Or a nickname.",
          questionNo: 1,
          name: "name",
          defaultValue: "",
          required: true,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) => v.length > 3 && v.length < 70,
          error: "Name is invalid",
        },
        {
          id: "2",
          title: "Please enter your email",
          question: "",
          questionNo: 2,
          name: "email",
          required: true,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) => validators.emailValidator(v),
          error: "Email is invalid",
        },
        {
          id: "3",
          title: "Please enter your Twitter url",
          question: "",
          questionNo: 3,
          name: "twitter",
          required: true,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) => validators.urlValidator(v, "twitter"),
          error: "Twitter is invalid",
        },
        {
          id: "4",
          title: "Please enter your Instagram url",
          question: "",
          questionNo: 4,
          name: "instagram",
          required: false,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) =>
            !!v ? validators.urlValidator(v, "instagram") : true,
          error: "Instagram is invalid",
        },
        {
          id: "5",
          title: "Please enter your personal website url",
          question: "",
          questionNo: 5,
          name: "website",
          defaultValue: "",
          required: true,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) => validators.urlValidator(v),
          error: "Website is invalid, please include http://",
        },
        {
          id: "6",
          title: "Please select a project",
          question: "",
          questionNo: 6,
          name: "project",
          required: true,
          children: ({ field }) => (
            <Select
              value={field?.value}
              onChange={(value) => field?.onChange(value)}
              options={[
                { "1": "Derivatives", value: "derivatives" },
                { "2": "Genesis", value: "genesis" },
                { "3": "Other", value: "other" },
              ]}
            />
          ),
          error: "A project is required",
        },
        {
          id: "7",
          title: "Please enter a bio",
          question: "Tell us about yourself",
          questionNo: 7,
          name: "bio",
          required: true,
          children: ({ field, fieldState }) => (
            <TextArea
              value={field?.value}
              onChange={field?.onChange}
              maxChars={2000}
              isInvalid={!!fieldState?.error}
            />
          ),
          validate: (v) => validators.lengthValidator(v, 2, 2000),
          error: "Bio is required",
        },
        {
          id: "8",
          title: "Write your exhibitions",
          question: "Tell us about your exhibitions",
          questionNo: 8,
          name: "exhibitions",
          required: false,
          children: ({ field, fieldState }) => (
            <TextArea
              value={field?.value}
              onChange={field?.onChange}
              maxChars={2000}
              isInvalid={!!fieldState?.error}
            />
          ),
          validate: (v) =>
            !!v ? validators.lengthValidator(v, 2, 2000) : true,
          error: "Exhibitions is invalid",
        },
        {
          id: "9",
          title: "Nft proposals",
          question:
            "Please provide a link to a public Drive/Dropbox, like folder with files",
          questionNo: 9,
          name: "samples",
          required: false,
          children: ({ field, fieldState }) => (
            <Input
              value={field?.value}
              onChange={field?.onChange}
              isInvalid={!!fieldState?.error}
              h={{ sm: 90, lg: "initial" }}
              fontSize={{ sm: "4xl", lg: "3xl" }}
            />
          ),
          validate: (v) => (!!v ? validators.urlValidator(v) : true),
          error: "Samples is invalid",
        },
        {
          id: "10",
          title: "Submit your application?",
          question:
            "If you want to change your inputs use the controls to see previous sections!",
          continueButton: (
            <Button size={buttonSize} type="submit">
              Submit
            </Button>
          ),
        },
      ],
    }),
    [buttonSize]
  );

  async function handleSubmit(data: any, showOutro: () => void) {
    try {
      await submitArtist({
        name: data.name,
        email: data.email,
        twitter_url: data.twitter,
        instagram_url: data.instagram,
        website: data.website,
        project: data.project,
        bio: data.bio,
        exhibitions: data.exhibitions,
        samples: data.samples,
      });

      showOutro();

      toast({
        title: "Aplication was successful.",
        description:
          "Thank you for your application. Our team will review your profile and will reach out if it meets our requirements.",
        status: "success",
        variant: "solid",
        position: "bottom-left",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Aplication was not successful.",
        description: (err as Error)?.message,
        status: "error",
        variant: "solid",
        position: "bottom-left",
        duration: 2000,
      });
    }
  }

  return (
    <Box pt="10vh">
      <Head>
        <title>Become an Artist.</title>
        <meta
          name="description"
          content="Become an artists by filling your info."
        />
      </Head>

      <MultiStepForm
        activeState="started"
        formConfig={formConfig}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default ArtistForm;
