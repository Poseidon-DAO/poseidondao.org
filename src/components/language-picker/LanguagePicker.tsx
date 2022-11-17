import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Stack,
} from "@chakra-ui/react";

import {
  ES,
  IT,
  FR,
  DE,
  GB,
  FlagComponent,
} from "country-flag-icons/react/3x2";
import Link from "next/link";
import { useRouter } from "next/router";

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const LanguagePicker = () => {
  const { locales, locale, asPath } = useRouter();

  function getFlagForLocale(l: string) {
    return {
      en: GB,
      es: ES,
      it: IT,
      fr: FR,
      de: DE,
    }[l];
  }

  const CurrentLocale = getFlagForLocale(locale!) as FlagComponent;

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Change language"
          variant="unstyled"
          icon={<CurrentLocale title={locale} width="40" height="40" />}
        />
      </PopoverTrigger>

      <PopoverContent maxW="100px">
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverBody mt={6} textAlign="center">
          <Stack display="inline-flex">
            {locales?.map((l) => {
              const Locale = getFlagForLocale(l) as FlagComponent;

              return (
                <Link href={asPath} locale={l} key={l}>
                  <IconButton
                    key={l}
                    aria-label="Change language"
                    variant="unstyled"
                    icon={<Locale title={l} width="40" height="40" />}
                  />
                </Link>
              );
            })}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export { LanguagePicker };
