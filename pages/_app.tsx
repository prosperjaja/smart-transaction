import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import en from "../src/lang/en.json";
import fr from "../src/lang/fr.json";
import nl_NL from "../src/lang/nl-NL.json";
import { IntlProvider, MessageFormatElement } from "react-intl";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const messages = {
  // esp,
  en,
  fr,
  "nl-NL": nl_NL,
};

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = router;
  const messagesForLocale = messages[locale as keyof typeof messages];

  if (!messagesForLocale) {
    console.error(`No messages found for locale: ${locale}`);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
          <IntlProvider
            locale={String(locale)}
            messages={
              messagesForLocale as
                | Record<string, string>
                | Record<string, MessageFormatElement[]>
                | undefined
            }
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
