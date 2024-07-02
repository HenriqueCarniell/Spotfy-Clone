interface ButtonsInterface {
  icons: any;
  text: string;
}

function Buttons({ icons, text }: ButtonsInterface) {
  return (
    <div className="mb-4 flex cursor-pointer items-center gap-4 bg-black text-xl font-medium">
      {icons}
      <p>{text}</p>
    </div>
  );
}

export default Buttons;
