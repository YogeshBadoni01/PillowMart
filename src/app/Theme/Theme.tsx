"use client"
import { MantineThemeOverride } from "@mantine/core";
// import { useColorScheme } from "@mantine/hooks";
// import { useState } from "react";

// const preferredColorScheme = useColorScheme();
// const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
// const toggleColorScheme = (value?: ColorScheme) =>
//   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  // const myDefault ={defaultColorScheme:"light"};
// export your theme object
export  const Theme: MantineThemeOverride = {

  colors: {
   
    primary: ["#b08ead", "#4B3049", "#F4EDF2", "#4B3049", "#795376", "#707070", "#f4edf2", "#8f9195", "#fcc419", "#fcc419", "#fcc419"    ],
    textBg:["#f4f4f4","#777777","#f47793","#415094","#007bff","#ffffff","#000000","#666666","#999999","#212529",],
    BtnColor:["#f9f9ff","#b08ead","#4cd3e3","#34a4ff","#f4e700","#f44a40","#031b25","#fbf8fb","#031b25","#fbf9ff"]
  },
  // background: {
  //   default: '#f0f0f0', // Change this to your desired background color
  // },
  fontFamily:"Roboto",
  // defaultColorScheme:"light",
  primaryColor: "primary",
  primaryShade: 7,
  // colorScheme:"light",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
};
