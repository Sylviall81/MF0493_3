import React from "react";
import "./App.css";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar.jsx";
import MainContent from "./components/MainContent.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header>
          <NavBar />
        </header>

        <container centerContent>
          <Tabs>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Profiles</Tab>
              <Tab>Contact</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <container>
                  <WelcomeSection />
                </container>
              </TabPanel>
              <TabPanel>
                <MainContent />
              </TabPanel>
              <TabPanel>
                <Contact />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </container>

        <footer>
          <Footer />
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
