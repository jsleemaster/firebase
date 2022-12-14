import { useEffect } from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const index = () => {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [originAmount, setOriginAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [parent, enableAnimations] = useAutoAnimate();

  useEffect(() => {
    let percent = originAmount * (discount / 100);
    setDiscountAmount(percent);
  }, [discount, originAmount]);

  return (
    <>
      <div>
        원가
        <input
          type="number"
          value={originAmount}
          onChange={(e) => setOriginAmount(Number(e.target.value))}
        />
      </div>
      <div>
        할인율
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </div>
      <div>
        할인가 : <span ref={parent}>{discountAmount}</span>{" "}
      </div>
    </>
  );
};
export default index;
