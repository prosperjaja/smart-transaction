import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
