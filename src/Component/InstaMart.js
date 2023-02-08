import { useState } from "react";
import "./instamart.css";

const Section = ({ title, description }) => {
  const [isVisible, setIsvisible] = useState(false);
  //  I need to give control to the instamart
  // taaki my parent can control the children ( this is known as lifting the state up)
  return (
    <>
      <div className="instamart">
        <h1>{title}</h1>
        {isVisible ? (
          <button
            onClick={() => {
              setIsvisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => {
              setIsvisible(true);
            }}
          >
            Show
          </button>
        )}
        {isVisible && <h4>{description}</h4>}
      </div>
    </>
  );
};

const InstaMart = () => {
  return (
    <>
      <h1>hello I'm InstaMart</h1>
      <Section
        title={"About instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt.        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt."
        }
      />
      <Section
        title={"Career Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt.        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt."
        }
      />
      <Section
        title={"Contact Instamart"}
        description={
          "           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt.     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam harum blanditiis soluta distinctio incidunt maiores debitis, quasi quia cumque nobis velit quidem dolor aliquid pariatur praesentium officiis. Voluptas dolores eaque quas earum blanditiis odit iure eligendi aspernatur ipsum quam nisi optio enim nobis repudiandae, nostrum qui impedit? Praesentium, deserunt."
        }
      />
    </>
  );
};
export default InstaMart;

// suppose this is a very big component and it has 1000 of components inside it.

// chapter 11 data is new oil
