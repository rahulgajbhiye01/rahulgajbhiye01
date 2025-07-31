import Logo from "./ui/logo";

const LogoUI = ({
  LogoClassName,
  TextClassName,
}: {
  LogoClassName?: string;
  TextClassName?: string;
}) => {
  return (
    <div className="flex flex-row">
      <Logo className={`${LogoClassName}`} />

      <span className={`place-self-end ${TextClassName}`}>ahul Gajbhiye</span>
    </div>
  );
};

export default LogoUI;
