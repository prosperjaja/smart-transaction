import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { IntlProvider, MessageFormatElement } from "react-intl";
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import nl_NL from "../lang/nl-NL.json";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
export const messages = {
  en,
  fr,
  "nl-NL": nl_NL,
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = router;
  const messagesForLocale = messages[locale as keyof typeof messages];

  return (
    <IntlProvider
      locale={String(locale)}
      messages={
        messagesForLocale as unknown as
          | Record<string, string>
          | Record<string, MessageFormatElement[]>
      }
    >
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            enableColorScheme
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </MantineProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}
