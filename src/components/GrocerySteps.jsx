import React from "react";
import { FaLeaf, FaShoppingCart, FaTruck } from "react-icons/fa";

const GrocerySteps = () => {

  const steps = [
    {
      id: "01",
      icon: <FaLeaf size={32} className="text-green-600" />,
      title: "Pick a starter option",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    {
      id: "02",
      icon: <FaShoppingCart size={32} className="text-green-600" />,
      title: "Shop groceries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    {
      id: "03",
      icon: <FaTruck size={32} className="text-green-600" />,
      title: "We deliver. You enjoy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
  ];

  return (
    <section className="w-full bg-white h-auto py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 w-full md:w-1/3 relative"
            >
              <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mb-4 shadow-md relative">
                <span className="absolute -top-2 -left-2 bg-lime-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                  {step.id}
                </span>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-emerald-400 backface-visible">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-15%] top-1/2 transform -translate-y-1/2 text-gray-300">
                  <img src="https://developmentalphawizz.com/html/grocery/assets/img/shape/feature-shape.png" />
                </div>
              )}
            </div>
          ))}
        </div>
        <img
          src="https://developmentalphawizz.com/html/grocery/assets/img/shape/shape-2.png"
          className="left-0 absolute transform -translate-y-1/2"
          data-aos="fade-left"
          style={{ width: "300px", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default GrocerySteps;
