const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "3"
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "heading",
        key: "1"
    },
    "heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
        key: "2"
    },
    [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);