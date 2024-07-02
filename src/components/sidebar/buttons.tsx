interface ButtonsInterface {
  icons: any;
  text: string;
}

function Buttons({ icons, text }: ButtonsInterface) {
  return (
    <div className="mb-4 flex cursor-pointer items-center gap-4 text-xl font-medium text-[#B3B3B3] hover:text-white">
      {icons}
      <p>{text}</p>
    </div>
  );
}

export default Buttons;
