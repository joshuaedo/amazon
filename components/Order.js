import Image from "next/legacy/image";

export default function Order({ amount, amountShipping, timestamp, images }) {
  return (
    <div className="">
      {amount} {amountShipping}
    </div>
  );
}
