import Directory from "./components/directory/directory";
import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://www.google.com/search?q=hats&sxsrf=ALiCzsZD3ei94MqVGcHTnPxDe5ivLKEGiQ:1653947677033&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjEzpCem4j4AhXISfEDHVPiAXcQ_AUoAXoECAIQAw&biw=1038&bih=861&dpr=2#imgrc=uEJmb2c3ckfKXM",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://unsplash.com/photos/oD8JWHg1ydc",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://unsplash.com/photos/eZXk3wEPcpw",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
