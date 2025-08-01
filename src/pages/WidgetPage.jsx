import React from "react";
import { useParams } from "react-router-dom";
import "../styles/WidgetPage.css";

import Counter from "../components/widgets/Counter";
import ToggledGreeting from "../components/widgets/ToggledGreeting";
import ShowHideToggle from "../components/widgets/ShowHideToggle";
import FontSizer from "../components/widgets/FontSizer";
import TextAlignment from "../components/widgets/TextAlignment";
import Clock from "../components/widgets/Clock";
import ColorChanger from "../components/widgets/ColorChanger";
import RGBSlider from "../components/widgets/RGBSlider";
import Weather from "../components/widgets/Weather";

const widgetComponents = {
  counter: Counter,
  toggledGreeting: ToggledGreeting,
  showHideToggle: ShowHideToggle,
  fontSizer: FontSizer,
  textAlignment: TextAlignment,
  clock: Clock,
  colorChanger: ColorChanger,
  rgbSlider: RGBSlider,
  weather: Weather,
};

const widgetDescriptions = {
  counter: {
    title: "Counter Widget",
    description:
      "Demonstrates basic state management with a counter that maintains and updates a numeric value.",
    instructions:
      "Click the '+' button to increment or '-' to decrement the count. The counter prevents values below 0.",
  },
  toggledGreeting: {
    title: "Toggled Greeting Widget",
    description:
      "Shows conditional rendering by toggling between two different greeting messages.",
    instructions:
      "Click the 'Toggle Me' button to switch between 'Hello' and 'Goodbye' messages.",
  },
  showHideToggle: {
    title: "Show/Hide Toggle Widget",
    description:
      "Illustrates dynamic UI changes by showing or hiding content with a button.",
    instructions:
      "Click the button to toggle visibility of the text. The button label changes to reflect the current state.",
  },
  fontSizer: {
    title: "Font Sizer Widget",
    description:
      "Demonstrates dynamic style manipulation by adjusting font size in real-time.",
    instructions:
      "Use the 'Grow' and 'Shrink' buttons to increase or decrease the font size (range: 0-100px).",
  },
  textAlignment: {
    title: "Text Alignment Widget",
    description:
      "Shows how to dynamically change text alignment through state management.",
    instructions:
      "Click the 'Left', 'Center', or 'Right' buttons to change the text alignment.",
  },
  clock: {
    title: "Clock Widget",
    description:
      "Demonstrates lifecycle methods and real-time updates with a dynamic clock.",
    instructions:
      "The clock updates every second. Use the button to mount/unmount the component.",
  },
  colorChanger: {
    title: "Color Changer Widget",
    description:
      "Shows two-way binding between input and display with color manipulation.",
    instructions:
      "Type a color name in the input field and click 'Update' to change the text color. The input clears after each update.",
  },
  rgbSlider: {
    title: "RGB Slider Widget",
    description:
      "Illustrates complex state management with three coordinated inputs for color mixing.",
    instructions:
      "Adjust the red, green, and blue sliders to create custom colors. The box and RGB values update in real-time.",
  },
  weather: {
    title: "Weather Widget",
    description:
      "Demonstrates API integration with real-time weather data fetching.",
    instructions:
      "Enter a city name to fetch current weather data. Displays temperature, conditions, and humidity.",
  },
};

const WidgetPage = () => {
  const { widgetName } = useParams();
  const WidgetComponent = widgetComponents[widgetName];
  const widgetInfo = widgetDescriptions[widgetName];

  if (!WidgetComponent) {
    return <div>Widget not found</div>;
  }

  return (
    <div className="widget-page">
      <h1>{widgetInfo.title}</h1>

      <div className="widget-container">
        <div className="widget-demo">
          <WidgetComponent />
        </div>

        <div className="widget-info">
          <h2>About This Widget</h2>
          <p>{widgetInfo.description}</p>

          <h3>How To Use</h3>
          <p>{widgetInfo.instructions}</p>

          <div className="code-section">
            <h3>Implementation</h3>
            <p>This widget uses React hooks for state management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetPage;
