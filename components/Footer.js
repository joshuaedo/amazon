export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const currentYear = getCurrentYear();

  return (
    <footer className="absolute w-full bottom-0 h-[9vh] max-h-[9.1vh] lg:max-h-[12.1vh] lg:h-[12vh] flex bg-[#fff] text-xs md:justify-center px-5 py-3 md:py-4 items-center">
      <p>{`Copyright © ${currentYear} Prime. All rights reserved.`}</p>
    </footer>
  );
}
