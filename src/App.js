import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App(props) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}
