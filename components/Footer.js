export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const currentYear = getCurrentYear();

  return (
    <div className="bg-[#fff] text-xs md:text-center px-5 py-3 md:py-5">
      <p>{`Copyright © ${currentYear} Prime. All rights reserved.`}</p>
    </div>
  );
}
