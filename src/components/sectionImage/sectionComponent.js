export const Subtitle = ({ name }) => {
  return <h1 className='text-2xl font-bold leading-7'>{name} </h1>;
};

export const Content = ({ name }) => {
  return <p className=' text-lg  font-light  leading-[1.375rem]'>{name}</p>;
};

export const ImageSec = ({ name, nodeRef, className }) => {
  return (
    <img
      ref={nodeRef}
      src={name}
      className={`absolute object-cover w-full h-full ${className}`}
      alt={name}
    />
  );
};

// Data for the component
export const DataSection = [
  {
    id: 1,
    subtitle: "Lightweight",
    content:
      "Upper mesh material provides proper ventilation and reduction in the weight of the shoes.",
    src: "https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    subtitle: "Flexibility",
    content:
      "Soft, flexible soles will allow the walker to push off easly with each step.",
    src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    subtitle: " Durability ",
    content:
      "Lightweight, woven material  is durable and provide structure and support.",
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];
