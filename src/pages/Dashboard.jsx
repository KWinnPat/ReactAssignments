import React from "react";
import WidgetCard from "../components/WidgetCard";

const widgets = [
  {
    name: "counter",
    title: "Counter Widget",
    description: "A simple counter with increment and decrement functionality",
  },
  {
    name: "toggledGreeting",
    title: "Toggled Greeting Widget",
    description: "Toggles between hello and goodbye messages",
  },
  {
    name: "showHideToggle",
    title: "Show/Hide Toggle Widget",
    description: "Displays or hides text with a toggle button",
  },
  {
    name: "fontSizer",
    title: "Font Sizer Widget",
    description: "Adjusts text size with grow/shrink buttons",
  },
  {
    name: "textAlignment",
    title: "Text Alignment Widget",
    description: "Changes text alignment between left, center and right",
  },
  {
    name: "clock",
    title: "Clock Widget",
    description: "Displays real-time clock with mount/unmount control",
  },
  {
    name: "colorChanger",
    title: "Color Changer Widget",
    description: "Changes text color based on user input",
  },
  {
    name: "rgbSlider",
    title: "RGB Slider Widget",
    description: "Color mixer using red, green and blue sliders",
  },
  {
    name: "weather",
    title: "Weather Widget",
    description: "Fetches and displays weather data from API",
  },
];
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Widget Portfolio</h1>
      <p className="subtitle">
        Explore my collection of interactive React widgets
      </p>

      <div className="widget-grid">
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.name}
            name={widget.name}
            title={widget.title}
            description={widget.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
